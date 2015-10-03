# The use case

## The Question
Today we got a good visual question, we have to choose between a design to render events in a grid.

The user must know what is the type of these events, so we have to choose between:

 1. Use a glyph to set the type of the event.
 2. Use a color border to define the type of the event. 

The question about performance was: Is the use of icons impact the performance?

## The answer
So yes there is a **low** impact, an average of 20ms of rendering for 700 events, which is very low actually. 
But on mobile it's more perceptible with an impact of 200ms.
Following the [RAIL performance model](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail?hl=en) we have to load our page in 1000ms, this difference of 200ms represent 20% of this time in extra to display icons instead of border.

# The test

## Real word parameters

 - Worse case could be more than 700 events displayed in the grid. Our test will generate 700.
 - We already have a webfont for all our icons, so the impact of loading a webfont is not to considere in our test.
 - We have to support accessibility, so we have to make sure our HTML respect accessibility rules.
 - Support mobile and IE11

## HTML

With border:

``` HTML
<div class="event event-border">	
	<span>Event 20</span>
	<span class="sr-only">Has comment</span>
</div>
```
    
With icon:

``` HTML
<div class="event event-icon">
	<i class="has-comment" aria-hidden="true"></i>
	<span>Event 8</span>
	<span class="sr-only">Has comment</span>
</div>
```

**Keep in mind**, we have to support accessibility, so we can't use a CSS pseudo-element `::before` to display our glyph. Some screen reader will try to read the `content` property. So we have to use a `<i>` tag and a span containing text for screen-reader with the bootstrap class `sr-only` or equivalent.

## Result

|  Browser    |	B order  | 	Icon  |
|-------------|----------|--------|
|      IE     |  <130ms  | <170ms |
|     Chome   |  <50ms   |  <70ms |
|Chrome Mobile|  <800ms  | <1000ms|


The performance difference is mainly in the rendering process, here is a more detailed version of these result on Chrome mobile for example: 

|   Visual   | Loading | Rendering | Painting |
|------------|---------|-----------|----------|
| **Border** | <200ms  | <450ms    | <60ms    | 
| **Icon**   | <210ms  | <600ms    | <80ms    |

