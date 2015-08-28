# my-select
Create your custom select.

### How it works
This plugin use class pattern for manage each select as a singleton.
The plugin create 2 div in the container you specified during the instantiation.
The first one is the label who contains the selected value and the last one hold
 all the values.

### Installation
You can use the minified file in **lib/select.js** for production or if you use
Browserify, you just have to `require('my-select')` and `npm i`

### Setup
Simply create a new instance of the **Select** object with 2 mandatory arguments :

- select : selector of the select you want to fake
- container : selector of the container who the fakeselect will be append

```js
var Select = require('my-select');

document.addEventListener('DOMContentLoaded', function () {
  new Select({
    select: '#custom',
    container: '.someWhereToAppend'
  });
}, false);

```

Obviously, each time you click on a list item, the select binded will have his
selected value changed.


### Events

You can add a **change** event who will be triggered each time the value change.
You need to pass a callback with the selected value as arguments.

Ex:
```js
var custom = new Select({
  select: '#custom',
  container: '.someWhereToAppend'
});

custom.on('change', function(selectedValue) {
  console.log(selectedValue);
});
```

## What about device ?
By default, when the user will click on your fake select it will trigger the
native select for a better UX.
If you don't want this behavior you can disabled him in the constructor :
```js
var selects = new Select({
  nativeOnDevice: false
});
```

## Support
This module uses classList who isn't available on IE9 and below, so if you need
the polyfill, you can use [classList.js](https://github.com/eligrey/classList.js/)
at the top of your file.
