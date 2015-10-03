# The use case

![Border VS Icons](img.png)

_Between border and icon, witch one impact the most the performance?_

**tl;dr** No significant impact on performance for both. But border is better than using icon.

[RAIL](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail) performance impact:

|  R    |	 A  | 	I  | 	L  |
|-------|-------|------|-------|
|  N    |  N    |  Y   |   N   |

## The Question
Today we got a good visual question, we have to choose between two designs to render events in a grid.

The user must know what is the type of these events, so we have to choose between:

 1. Using a glyph to set the type of the event.
 2. Using a border color to define the type of the event. 

## The answer

Between the two choice we have a little performance difference. Border is faster than icon of 20ms in average.
Following the [RAIL performance model](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail#animation-render-frames-every-16ms) we have a budget of 16 ms for animation.
In our case, if we have to dynamically generate these events during an animation or an user input (scroll for example), our budget for a fluid animation (16ms) is already burn
when using icons.

# The test

## Real word parameters

 - Worse case could be more than 700 events displayed in a grid on desktop and 31 on mobile (events grouped by day).
 - We already have a webfont for all our icons, so the impact of loading a webfont is not to consider in our test.
 - We have to make sure our HTML respect accessibility rules.
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

Keep in mind, **we have to support accessibility,** so we can't use a CSS pseudo-element `::before` to display our glyph. 
Some screen reader will try to read the `content` property. So we have to use a `<i>` tag and a span containing text for screen-reader with the bootstrap class `sr-only` or equivalent.

## Result

Frame render time:

|  Browser    |	 Border  | 	Icon  |
|-------------|----------|--------|
|      IE     |  <130ms  | <170ms |
|     Chome   |  <50ms   |  <70ms |
|Chrome Mobile|  <90ms   | <130ms |


The performance difference is mainly in the rendering process, here is a more detailed version of these result on Chrome mobile for example: 

|   Visual   | Loading | Rendering | Painting |
|------------|---------|-----------|----------|
| **Border** | <7 ms   | <25ms     | <8ms     | 
| **Icon**   | <10ms   | <45ms     | <9ms     |

