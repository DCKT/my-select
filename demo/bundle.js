(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Select = require('my-select');

document.addEventListener('DOMContentLoaded', function () {
  new Select({
    containerSelector: '.js-mySelect-Container',
    listSelector: '.js-mySelect-List',
    listItemSelector: '.js-mySelect-List-Item',
    selectToBind: '#custom'
  });
}, false);

},{"my-select":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvRENLL0NvZGUvbXktc2VsZWN0L3Rlc3QvYXBwLmpzIiwibm9kZV9tb2R1bGVzL215LXNlbGVjdC9saWIvc2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRWxDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0FBQ3hELE1BQUksTUFBTSxDQUFDO0FBQ1QscUJBQWlCLEVBQUUsd0JBQXdCO0FBQzNDLGdCQUFZLEVBQUUsbUJBQW1CO0FBQ2pDLG9CQUFnQixFQUFFLHdCQUF3QjtBQUMxQyxnQkFBWSxFQUFFLFNBQVM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0osRUFBRSxLQUFLLENBQUMsQ0FBQzs7O0FDVFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgU2VsZWN0ID0gcmVxdWlyZSgnbXktc2VsZWN0Jyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIG5ldyBTZWxlY3Qoe1xuICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIi5qcy1teVNlbGVjdC1Db250YWluZXJcIixcbiAgICBsaXN0U2VsZWN0b3I6IFwiLmpzLW15U2VsZWN0LUxpc3RcIixcbiAgICBsaXN0SXRlbVNlbGVjdG9yOiBcIi5qcy1teVNlbGVjdC1MaXN0LUl0ZW1cIixcbiAgICBzZWxlY3RUb0JpbmQ6IFwiI2N1c3RvbVwiXG4gIH0pO1xufSwgZmFsc2UpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIFNlbGVjdChwYXJhbXMpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gcGFyYW1zLmNvbnRhaW5lclNlbGVjdG9yO1xuICB0aGlzLmxpc3RJdGVtU2VsZWN0b3IgPSBwYXJhbXMubGlzdEl0ZW1TZWxlY3RvcjtcblxuICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLmNvbnRhaW5lclNlbGVjdG9yKTtcbiAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMubGlzdFNlbGVjdG9yKTtcbiAgdGhpcy5saXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5saXN0SXRlbVNlbGVjdG9yKTtcbiAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5zZWxlY3RUb0JpbmQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdGFyZ2V0Q2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGlmICh0YXJnZXRDbGFzc05hbWUgIT0gX3RoaXMyLmNvbnRhaW5lclNlbGVjdG9yLnNsaWNlKDEpICYmIHRhcmdldENsYXNzTmFtZSAhPSBfdGhpczIubGlzdEl0ZW1TZWxlY3Rvci5zbGljZSgxKSkge1xuXG4gICAgICBfdGhpczIubGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1teVNlbGVjdC1MaXN0LS12aXNpYmxlJyk7XG4gICAgfVxuICB9LCBmYWxzZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMubGlzdEl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xuICAgICAgX3RoaXMuc2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVxcJycgKyB0aGlzLmlubmVySFRNTCArICdcXCc+JyArIHRoaXMuaW5uZXJIVE1MICsgJzwvb3B0aW9uPic7XG4gICAgICBfdGhpcy5saXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLW15U2VsZWN0LUxpc3QtLXZpc2libGUnKTtcbiAgICB9LCBmYWxzZSk7XG4gIH07XG5cbiAgdGhpcy5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIubGlzdC5jbGFzc0xpc3QuYWRkKCdqcy1teVNlbGVjdC1MaXN0LS12aXNpYmxlJyk7XG4gIH07XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTZWxlY3Q7XG47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiXX0=
