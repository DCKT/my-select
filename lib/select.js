'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Select = function Select(params) {
  var _this2 = this;

  _classCallCheck(this, Select);

  var _this = this;

  this.containerSelector = params.containerSelector;
  this.listItemSelector = params.listItemSelector;

  this.container = document.querySelector(params.containerSelector);
  this.list = document.querySelector(params.listSelector);
  this.listItems = document.querySelectorAll(params.listItemSelector);
  this.select = document.querySelector(params.selectToBind);

  document.addEventListener('click', function (e) {
    var targetClassName = e.target.className;
    if (targetClassName != _this2.containerSelector.slice(1) && targetClassName != _this2.listItemSelector.slice(1)) {

      _this2.list.classList.remove('js-mySelect-List--visible');
    }
  }, false);

  for (var i = 0; i < this.listItems.length; i++) {
    this.listItems[i].addEventListener('click', function () {
      _this.container.innerHTML = this.innerHTML;
      _this.select.innerHTML = '<option selected value=\'' + this.innerHTML + '\'>' + this.innerHTML + '</option>';
      _this.list.classList.remove('js-mySelect-List--visible');
    }, false);
  };

  this.container.onclick = function () {
    _this2.list.classList.add('js-mySelect-List--visible');
  };
};

exports['default'] = Select;
;
module.exports = exports['default'];