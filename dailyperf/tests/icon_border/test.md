# The use case

## The Question
Today we got a good visual question, we have to choose between a design to render events in a grid.

The user must know what is the type of these events, so we have to choose between:

 1. Use a glyph to set the type of the event.
 2. Use a color border to define the type of the event. 

The question about performance was: Is the use of icons impact the performance?

## The answer
So yes there is an **low** impact, an average of 20ms of rendering for 700 events, which is very low actually. 
The impact on mobile is obviously more perceptible with an impact of 200ms.
According to the [RAIL performance model](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail?hl=en) we have to load our page in 1000ms, this difference of 200ms represent 20% of this time in extra to display icons instead of border.

# The test

## Real word parameters

 - Worse case could be more than 700 events displayed in the grid. Our test will generate 700.
 - We already have a webfont for all our icons, so the impact of loading a webfont is not to considere in our test.
 - We have to support accessibility, so we have to make sure our HTML respect accessibility rules

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

Chrome 

| Element | Render time  |
| ------- | ------------ |
| Border  |     <50 ms    |
|   Icon  |     <70 ms    |

Border:

Loading: 2.6ms
Rendering: 35.5ms
Painting: 8ms

Icon:

Loading: 4.5ms
Rendering: 45ms
Painting: 8ms

IE 11

| Element | Render time  |
| ------- | ------------ |
| Border  |     <130 ms  |
|   Icon  |     <170 ms  |

Border:

Timer: <20ms
Layout: <75ms
Paint <35ms

Icon:

Timer: <25ms
Layout: <110ms
Paint <35ms

Chrome Mobile

| Element | Render time  |
| ------- | ------------ |
| Border  |     <800 ms  |
|   Icon  |    <1000 ms  |

Border:

Loading: <200ms
Rendering: <450ms
Painting: <60ms

Icon:

Loading: <210ms
Rendering: <600ms
Painting: <80ms
