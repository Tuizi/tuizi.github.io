# The use case

_DOM Events are not always cleaned up, what is the impact on performance?_

**tl;dr** The impact is HUGE, always remove events binded on an element; each occurence of ```.on()/addEventListener()``` should have its ```.off()/removeEventListener()```

[RAIL](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail) performance impact:

R: Major, the application will become more and more slower.
A: Minor, but as the application will become more and more slower, the browser will not be able to render fluid animations.
I: N/A
L: No impact on the load time.

## The Question

Today, when reading some code, I notice a lot of this:

``` javascript
$(document.body).on('click', function() { /*...*/ });
$(document).on('resize', function() { /*...*/ });
```
The worse case I read was a function called multiple times, and each time binding a new click event on the body.

Using this magic snippet:

```jQuery._data( document.body, "events" );```

Yielded:
```
{
  click: Array[6]
  keydown: Array[1]
}
```
The same method was attached 6 times on the ``body``, it means that once I click on the ``body`` element, this method is called **6 times**!

So, what is really happening in term of performance when we forget to clean those registered events?

## The answer

I will answer by a code snippet:

``` javascript
var $btn;

var TimeSheet = function () {
    var hugeArrayOfBigObject = [{}, {}, {}, ...]; //imagine a big fat data array...

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

Notice the ```timesheet = undefined``` instruction, what do you think will happen when:

- You click on the ``#submit`` button?
- You resize the window ?

Both methods will still continue to be executable, resizing the window will log "_resize_" and the click event on the button will still log "_submit, [2]_".
So you probably guessed that well, but what should freak you up the most is this "_submit, [{}, {}, ...]_", why?

Because you explicitly destroyed the timesheet, and this big fat array is **still in memory!**

In fact, since you haven't removed those bindings, there is still a reference on this object (on methods of it actually) and the browser is not able to remove it from the memory.
So never forget to call```.off()/removeEventListener()```.

And keep in mind, when you bind an event to a method: ```$btn.on('click', timesheet.submit);```, doing that a second time, will not replace the currently method binded to 'click' event, the method will add a new listener calling the method ``timesheet.submit`` twice.
