# The use case

![Border VS Icons](img.png)

*When you have to choose between 2 visuals: border color or an icon, which one impacts performance the most?*

**tl;dr** Yes there is a minor impact on the rendering time. Using a border color will be faster than an icon.

[RAIL](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail) performance impact:

R: No impact on responsive time
A: Minor impact if you render elements during an animation
I: N/A
L: No impact on the load time (we exclude the impact of loading the webfont)

## The Question

Today we were offered two visual designs to render events in a grid, and let the user know what he's dealing with.
The event type could be defined with:

 1. An icon
 2. A border color

## The answer

There's only a little performance difference between the two options. Border is faster than icon by 20ms in average.
Following the [RAIL performance model](https://developers.google.com/web/tools/profile-performance/evaluate-performance/rail#animation-render-frames-every-16ms) we have a budget of 16 ms for animation.
In our case, dynamically generate these events during an animation or a user input (e.g. scroll) would already use up all our budget for a fluid animation (16ms).

# The test

## Real word parameters

 - Worse case could be more than 700 events displayed on desktop and 31 events on mobile
 - We already have a webfont for all our icons, so the impact of loading a webfont is ignored in our test
 - We have to make sure our HTML complies to accessibility rules
 - Support for mobile and IE11

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

Keep in mind that **in order to support accessibility** we can't use a CSS pseudo-element `::before` to display the icon. 
Some screen readers will try to read the `content` property, so we have to use a `<i>` tag and a `span` containing text for screen-reader with the Bootstrap class `sr-only` or equivalent.

## Result

Frame render time:

|  Browser    |	 Border  | 	Icon  |
|-------------|----------|--------|
|      IE     |  <130ms  | <170ms |
|     Chome   |  <50ms   |  <70ms |
|Chrome Mobile|  <90ms   | <130ms |


The performance difference is mainly in the rendering process.
Here is a more detailed version of these results on Chrome mobile: 

|   Visual   | Loading | Rendering | Painting |
|------------|---------|-----------|----------|
| **Border** | <7 ms   | <25ms     | <8ms     | 
| **Icon**   | <10ms   | <45ms     | <9ms     |

