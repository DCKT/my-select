'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _CLASSNAME = require('./constants.js');

var _createDOMElements = require('./createDOMElements.js');

var _createDOMElements2 = _interopRequireWildcard(_createDOMElements);

var i = 0;

var Select = (function () {
  function Select(params) {
    _classCallCheck(this, Select);

    if (!params || !params.select || !params.container) {
      console.error('my-select error : Missing options');
      return;
    }

    var select = params.select;
    var container = params.container;

    this.select = document.querySelector(select);
    this.container = document.querySelector(container);
    this.selectedValue = null;
    this.fakeSelect = null;
    this.events = {};
    this.id = i;
    this.nativeOnDevice = !!params.nativeOnDevice;
    this.isDevice = 'ontouchstart' in document.documentElement;

    if (!this.select) {
      console.error('my-select error : select Node not found');
      return;
    };

    if (!this.container) {
      console.error('my-select error : container Node not found');
      return;
    };

    _createDOMElements2['default'].call(this, this.select, this.container, this.id);
    bindClickOut.call(this);
  }

  _createClass(Select, [{
    key: 'hideLists',
    value: function hideLists() {
      this.fakeSelect.classList.remove(_CLASSNAME.CLASSNAME.LABEL_FOCUS);
      this.fakeSelect.nextSibling.classList.remove(_CLASSNAME.CLASSNAME.LIST_VALUES_VISIBLE);
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      this.events[event] = callback.bind(this);
    }
  }]);

  return Select;
})();

exports['default'] = Select;
;

function bindClickOut() {
  var _this = this;

  document.addEventListener('click', function (e) {
    var targetClass = e.target.classList;

    if (!targetClass.contains(_CLASSNAME.CLASSNAME.LABEL) && !targetClass.contains(_CLASSNAME.CLASSNAME.ITEM)) {
      _this.hideLists();
    };
  }, false);
};
module.exports = exports['default'];