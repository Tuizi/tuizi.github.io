# a11cqc 30-Septembre-2015

## aria

- **Don't overuse ARIA labels**, use them smartly, don't put them everywhere
- ARIA attributes should be used **only** on `<div>` (except for `aria-label` and `aria-describe`)
- Use HTML5 native tags as much as possible

## aria-busy

- Use `aria-busy` on element showing a loading state or...
- One `aria-busy` per page is enough, put it on the body

## aria-controls

- Useless? Most of the time, can be replaced by `aria-live` (no SR actually uses it)
- <div> expanded/collapsed by a button should have this attribute

## aria-live

- One of the most useful ARIA attribute
- The SR will automatically read the change inside the region (div, etc.)
- `ng-view` is a good candidate for `aria-live`: `<div ng-view aria-live="polite"></div>`

## aria-label(by) & aria-described(by)

- `aria-label` replaces title or text
- `aria-describe` completes title or text

```HTML
<span>Toto</span> //SR will say: Toto
<span aria-label="tutu">Toto</span> //SR will say: tutu
<span aria-describe="My name is">Toto</span> //SR will say: Toto. My name is. 
``` 

### Use cases

-  Filtering a list, `aria-live` will automatically read the change to this list (will say automatically: "2 items: blabla, 3 items blabla")
- Notification area: when a text display 1 then 2, thanks to  `aria-live`, the text will be automatically said

## :focus

- Information shown on `:hover` should be also displayed on `:focus` *1 line of CSS code and you are accessible*
- **Never do** `:focus { outline:none; }` in CSS 

## Table

- Some SR understand `th` instead of `td` for a row header
- Use `<th scope="col">` for table headers and `<th scrope="row">` for a row header

## Use cases

### Button with icons

- **Be careful**, some SRs are trying to read the text set in CSS content attribute

Examples:

**Not accessible**

```HTML
<button class="filter"><button>
```

```CSS
.filter::before {
	content: '\u3ae'; //SR will try to read this!!!
}
```

**Accessible**

```HTML
<button>
	<i class="filter" aria-hidden="true"></i>
        <span class="sr-only">Filter</span> //SR will read that, sr-only is a class of bootstrap to not show this span
</button>
```

```CSS
.filter::before {
	content: '\u3ae'; //SR will not read this thank to aria-hidden
}
```

### Input with placeholder only

Use title if your design doesn't use only a placeholder and no labels

`<input title="Your name" placeholder="Your name" type="text"></input>`
    
### Input with error message

Use `aria-describedby` on your input to complete the title:

```HTML
<input type="text" aria-describedby="searchResult" title="Your name" placeholder="Your name"></input>
<span id="searchResult">Name not found</span>
```

**SR will say:** "Your name *value*. Name not found. input text" 

### Burger menu

- Use `aria-expanded` on burger menu button
- Use `title="Menu"` on the burger menu button
- Sub menu code **must** be next to the menu button code, not at the end of the page

### Modal window

- Close button has the last tabindex order
