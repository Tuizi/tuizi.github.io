With border:

    <div class="event has-comment">
        <span>Event 1</span>
        <span class="sr-only">Has comments</span>
    </div>
    
With icon:

    <div class="event has-comment">
        <i aria-hidden="true"></i>
        <span>Event 1</span>
        <span class="sr-only">Has comments</span>
    </div>

Chrome 

| Element | Render time  |
| ------- | ------------ |
| Border  |     48 ms    |
|   Icon  |     60 ms    |

Icon:

Loading: 4.5ms
Rendering: 45ms
Painting: 8ms

Border:

Loading: 2.6ms
Rendering: 35.5ms
Painting: 8ms

Chrome Mobile

| Element | Render time  |
| ------- | ------------ |
| Border  |     <800 ms  |
|   Icon  |     <950 ms  |

Border:

Loading: <200ms
Rendering: <450ms
Painting: <60ms

Icon:

Loading: <200ms
Rendering: <550ms
Painting: <80ms



