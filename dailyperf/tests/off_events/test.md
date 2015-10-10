# The use case

_DOM Events are not always cleaned up, what the impact on performance?_

**tl;dr** HUGE, always remove event binded, each ```.on()/addEventListener()``` should have its ```.off()/removeEventListener()```

[RAIL](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail) performance impact:

R: Huge, the application will become more and more slower.
A: Minor, but as the application will becore more and more slower, the browser will not be able to render fluid animation.
I: N/A
L: No impact on the load time.

## The Question

Today, when reading some code, I notice a lot of this kind of code:
 
``` javascript

$(document.body).on('click', function() { /*...*/ });
$(document).on('resize', function() { /*...*/ });

```
The worse case I have read was a function called multiple time, and each time binding a click on the body. Using this magic snippet:

```jQuery._data( document.body, "events" );```

I got:
```
{
  click: Array[6]
  keydown: Array[1]
}
```
The same method is binded 6 times on the body, so when I click, the same method is called **6 times**!

So what is really happening when we forgot to clean after us when coding, and the impact on performance in a SPA?

## The answer

I will answer by a code example, using this code:

``` javascript
var $btn;

var TimeSheet = function () {
    var hugeArrayOfBigObject = [2];

    this.submit = function () {
        console.log('submit', hugeArrayOfBigObject)
    };

    this.resize = function () {
        console.log('resize');
    };

    $(window).on('resize', this.resize);

    return this;
};

$(document).ready(function () {
    $btn = $('#submit');

    var timesheet = new TimeSheet();

    $btn.on('click', timesheet.submit);

    // a lot of code...
    // ...
    // then I don't need a timesheet instance anymore...
    timesheet = undefined;
})
```

With this ```timesheet = undefined```, what do you think it will happen when:

- You click on the button #submit ?
- You resize the window ?

