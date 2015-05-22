# my-select
Create your custom select.
You can use this module with `browserify` and `require('my-select')`.

### How it works
The plugin will look for all select who have the *js-mySelect* class and create a fake select based on him.
After the creation, the fake select will be append to the div who has the **js-mySelect-Wrapper** class.
**The ordering is important !**

### Example :
```html
<select id="custom js-mySelect">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<div class="someWhereToAppend js-mySelect-Wrapper">
  <!-- fakeSelect will be added here -->
</div>
```

### Installation
You can use the minified file in **lib/select.js** for production or if you use Browserify, you just have to `require('my-select')` and `npm i`



### Setup
Simply create a new instance of the **Select** object.

```js
var Select = require('my-select');

document.addEventListener('DOMContentLoaded', function () {
  new Select();
}, false);

```

Each time you click on a list item, the select binded will have his selected value changed.

#### Use a custom class
You can use a custom class to trigger your select, in the contstructor you just need to pass an object like this :

```js
new Select({
  select: '.anotherSelect'
});
```

### Events

You can add a **change** event who will be triggered each time a fake select option has been clicked. 
The `this` context able you to access all of the properties :
- selects: NodeList, contains all of the initial select
- wrappers:  NodeList, contains all the wrappers
- lists: Array, fake select list
- events: Array, all events added by the on method

Ex:
```js
var selects = new Select();

selects.on('change', function(index) {
  // some code
});
```

## Support 
This module uses classList who isn't available on IE9 and below, if you have to play around just use a polyfill :smile:
