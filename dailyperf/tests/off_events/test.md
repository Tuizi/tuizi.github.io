# The use case

_DOM Events are not always cleaned up, what the impact on performance?_

**tl;dr** HUGE, always remove event binded, each ```.on()/addEventListener()``` should have its ```.off()/removeEventListener()```

[RAIL](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail) performance impact:

R: Major, the application will become more and more slower.
A: Minor, but as the application will become more and more slower, the browser will not be able to render fluid animation.
I: N/A
L: No impact on the load time.

## The Question

Today, when reading some code, I notice a lot of this:
 
``` javascript
$(document.body).on('click', function() { /*...*/ });
$(document).on('resize', function() { /*...*/ });
```
The worse case I have read was a function called multiple time, and each time binding a click on the body. 

Using this magic snippet:

```jQuery._data( document.body, "events" );```

I got:
```
{
  click: Array[6]
  keydown: Array[1]
}
```
The same method is binded 6 times on the body, so when I click, this method is called **6 times**!

So what is really happening when we forgot to clean after us when coding, and the impact on performance in a SPA?

## The answer

I will answer by a code example:

``` javascript
var $btn;

var TimeSheet = function () {
    var hugeArrayOfBigObject = [2]; //imagine a big fat data array...

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
    // then I don't need the timesheet instance anymore...
    timesheet = undefined;
})
```

With this ```timesheet = undefined```, what do you think it will happen when:

- You click on the button #submit ?
- You resize the window ?

Both method will still continue to be executable, resizing the window will log "_resize_" and the click on the button will still log "_submit, [2]_".
So you probably guessed that well, but what should freak you up the most it's this "_submit, [2]_", why?

Because you explicitly destroyed the timesheet, and this big fat array is **still in memory!**

In fact has you didn't have removed these bindings, there is still a reference on this object (on methods of it actually) and the browser is not able to remove it from the memory.
So never forgot to call```.off()/removeEventListener()```.

And keep in mind, when you bind an event to a method: ```$btn.on('click', timesheet.submit);```, doing that a second time, will not replace the currently method binded to 'click' event, the method will be called twice!
