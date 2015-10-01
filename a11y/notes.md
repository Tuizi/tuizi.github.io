# a11cqc 30-Septembre-2015

## aria

- **DON'T OVERUSE ARIA**, use it smartly, don't put them everywhere
- aria attributs should be used **ONLY** on div (except for aria-label and aria-describe)
- use HTML5 native tag as much as possible!

## aria-busy

- Use ```aria-busy``` on element showing a loading state or...
- Only one ```aria-busy``` is enought in a page, put it on the body

## aria-controls

- Useless? Most of the time, can be replaced by aria-live (no SR actually use it)
- div expanded/collapsed by a button should have this attribut.

## aria-live

- One of the most use full aria attribut
- The SR will automatically read the change inside the region (div, etc)
- ng-view is a good candidate for aria-live: ```<div ng-view aria-live="polite"></div>```

## aria-label(by) & aria-described(by)

- aria-label replace title or text
- aria-describe complete title or text


		<span>Toto</span> //SR will say: Toto
	    <span aria-label="tutu">Toto</span> //SR will say: tutu
	    <span aria-describe="My name is">Toto</span> //SR will say: Toto. My name is. 
    
### Use cases

* Fitlering a list, aria-live will automatically read the change to this list (will say automatically: "2 items: blabla, 3 items blabla")
* Notification area: when a text display 1 then 2, thanks to  aria-live, the text will be automatically said

## :focus

- Information show on :hover should be also displayed on :focus _1 line of CSS code and you are accessible_
- **NEVER DO** in CSS: ```:focus { outline:none; }```

## Table

- Some SR understand th instead of td for a row header
- Use ```<th scope="col">``` for table headers and ```<th scrope="row">``` for a row header

## Use cases

### Button with icons
- **BE CAREFUL** some SRs are trying to read text set in CSS content attribut

Examples:

**Not accessible**

    //HTML
    <button class="filter"><button>
    
    //CSS
    .filter::before {
        content: '\u3ae'; //SR will try to read this!!!
    }

**Accessibly**

    //HTML
    <button>
        <i class="filter" aria-hidden="true"></i>
        <span class="sr-only">Filter</span> //SR will read that, sr-only is a class of bootstrap to not show this span
    </button>
    
    //CSS
    .filter::before {
        content: '\u3ae'; //SR will not read this thank to aria-hidden
    }

### Input with placeholder only

Use title if your design doesn't use only a placeholder and no labels

    <input title="Your name" placeholder="Your name" type="text"></input>
    
### Input with error message

Use aria-describedby on your input to complete the title

    <input type="text" aria-describedby="searchResult" title="Your name" placeholder="Your name"></input>
    <span id="searchResult">Name not found</span>
    
**SR will say:** "Your name _value_. Name not found. input text" 

### Burger menu

- Use ```aria-expanded``` on burger menu button
- Use ```title="Menu"``` on the burger menu button
- Sub menu code **must** be next to the menu button code, not at the end of the page

### Modal window

- Close button has the last tabindex order