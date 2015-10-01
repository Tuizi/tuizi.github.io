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
    
| Element | Render time  |
| ------- | ------------ |
| Border  |     80 ms    |
|   Icon  |    100 ms    |

Icon:

Loading: 8ms
Rendering: 55ms
Painting: 8ms

Border:

Loading: 8ms
Renderig: 40ms
Painting: 8ms
