# my-select
Create your custom select.
You can use this module with `browserify` and `require('my-select')`.

## Structure

You need to have 2 principals HTML elements :
- **the container** : contain the selected value
- **the list**: contain all the values

Each item in the list must have a class for binding a click event on him.

### Example :
```html
<select id="custom"></select>
<div class="js-mySelect-Container">1</div> 
<div class="js-mySelect-List">
  <div class="js-mySelect-List-Item">1</div>
  <div class="js-mySelect-List-Item">2</div>
  <div class="js-mySelect-List-Item">3</div>
  <div class="js-mySelect-List-Item">4</div>
</div> 
```

### Setup
In your JavaScript, you just need to require the module and create a new instance of the **Select** object with the selectors :
```js
var Select = require('my-select');

document.addEventListener('DOMContentLoaded', function () {
  new Select({
    containerSelector: ".js-mySelect-Container",
    listSelector: ".js-mySelect-List",
    listItemSelector: ".js-mySelect-List-Item",
    selectToBind: "#custom"
  });
}, false);

```

Each time you click on a list item, the select to bind will have his option rewritten.


## Support 
This module uses classList who isn't available on IE9 and below, if you have to play around just use a polyfill :smile:
