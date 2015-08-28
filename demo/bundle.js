(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Select = require('../lib/select');

document.addEventListener('DOMContentLoaded', function () {
  var select = new Select({
    select: '.test',
    container: '#bloc' });

  select.on('change', function (value) {
    console.log(value);
  });
}, false);

},{"../lib/select":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _CLASSNAME = require('./constants.js');

exports['default'] = function (option, select, _this) {
  option.addEventListener('click', function () {
    var id = this.getAttribute('data-select-id');
    select.value = this.getAttribute('data-value');
    _this.selectedValue = this.getAttribute('data-value');
    document.querySelector('.' + _CLASSNAME.CLASSNAME.LABEL + '-' + id).innerHTML = this.innerHTML;
    _this.hideLists();
    _this.events.change ? _this.events.change(_this.selectedValue) : null;
  }, false);
};

module.exports = exports['default'];

},{"./constants.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  CLASSNAME: {
    LABEL: 'js-myselect-label',
    LABEL_FOCUS: 'js-myselect-label--focus',
    LIST_VALUES: 'js-myselect-list-values',
    LIST_VALUES_VISIBLE: 'js-myselect-list-values--visible',
    ITEM: 'js-myselect-item' } };
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _CLASSNAME = require('./constants.js');

var _showDropdown = require('./showDropDown.js');

var _showDropdown2 = _interopRequireWildcard(_showDropdown);

var _bindClickOptions = require('./bindClickOptions.js');

var _bindClickOptions2 = _interopRequireWildcard(_bindClickOptions);

exports['default'] = function (select, container, id) {
  var _this2 = this;

  var label = document.createElement('div');
  var valuesList = document.createElement('div');
  var _this = this;

  label.className = '' + _CLASSNAME.CLASSNAME.LABEL + ' ' + _CLASSNAME.CLASSNAME.LABEL + '-' + id;
  valuesList.className = _CLASSNAME.CLASSNAME.LIST_VALUES;

  label.innerHTML = select.selectedOptions[0].innerHTML;

  label.addEventListener('click', function (e) {
    if (_this.isDevice && _this.nativeOnDevice) {
      _this.showDropdown(select);
    } else {
      this.classList.add(_CLASSNAME.CLASSNAME.LABEL_FOCUS);
      this.nextSibling.classList.add(_CLASSNAME.CLASSNAME.LIST_VALUES_VISIBLE);
    }
  });

  this.fakeSelect = label;

  [].forEach.call(select.children, function (option, index) {
    var divOption = document.createElement('div');

    divOption.className = _CLASSNAME.CLASSNAME.ITEM;
    divOption.innerHTML = option.innerHTML;
    divOption.setAttribute('data-value', option.getAttribute('value'));
    divOption.setAttribute('data-select-id', id);
    valuesList.appendChild(divOption);

    _bindClickOptions2['default'](divOption, select, _this2);
  });

  container.appendChild(label);
  container.appendChild(valuesList);
};

module.exports = exports['default'];

},{"./bindClickOptions.js":2,"./constants.js":3,"./showDropDown.js":6}],5:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
};

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

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

},{"./constants.js":3,"./createDOMElements.js":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (element) {
  var event;
  event = document.createEvent('MouseEvents');
  event.initMouseEvent('mousedown', true, true, window);
  element.dispatchEvent(event);
};

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvRENLL0NvZGUvR2l0aHViL215LXNlbGVjdC9kZW1vL2FwcC5qcyIsIi9Vc2Vycy9EQ0svQ29kZS9HaXRodWIvbXktc2VsZWN0L2xpYi9iaW5kQ2xpY2tPcHRpb25zLmpzIiwiL1VzZXJzL0RDSy9Db2RlL0dpdGh1Yi9teS1zZWxlY3QvbGliL2NvbnN0YW50cy5qcyIsIi9Vc2Vycy9EQ0svQ29kZS9HaXRodWIvbXktc2VsZWN0L2xpYi9jcmVhdGVET01FbGVtZW50cy5qcyIsIi9Vc2Vycy9EQ0svQ29kZS9HaXRodWIvbXktc2VsZWN0L2xpYi9zZWxlY3QuanMiLCIvVXNlcnMvRENLL0NvZGUvR2l0aHViL215LXNlbGVjdC9saWIvc2hvd0Ryb3BEb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRXRDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0FBQ3ZELE1BQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO0FBQ3RCLFVBQU0sRUFBRSxPQUFPO0FBQ2YsYUFBUyxFQUFFLE9BQU8sRUFDbkIsQ0FBQyxDQUFDOztBQUVILFFBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVMsS0FBSyxFQUFFO0FBQ2xDLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDcEIsQ0FBQyxDQUFDO0NBQ0osRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7O3lCQ1hnQixnQkFBZ0I7O3FCQUUzQixVQUFTLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzdDLFFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztBQUMxQyxRQUFJLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLFlB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Q0FDOUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFNlbGVjdCA9IHJlcXVpcmUoJy4uL2xpYi9zZWxlY3QnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZWN0ID0gbmV3IFNlbGVjdCh7XG4gICAgc2VsZWN0OiAnLnRlc3QnLFxuICAgIGNvbnRhaW5lcjogJyNibG9jJyxcbiAgfSk7XG5cbiAgc2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgfSk7XG59LCBmYWxzZSk7XG4iLCJpbXBvcnQgeyBDTEFTU05BTUUgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbiwgc2VsZWN0LCBfdGhpcykge1xuICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQgICAgICAgICAgICAgID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJyk7XG4gICAgc2VsZWN0LnZhbHVlICAgICAgICA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgX3RoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Q0xBU1NOQU1FLkxBQkVMfS0ke2lkfWApLmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xuICAgIF90aGlzLmhpZGVMaXN0cygpO1xuICAgIF90aGlzLmV2ZW50cy5jaGFuZ2UgPyBfdGhpcy5ldmVudHMuY2hhbmdlKF90aGlzLnNlbGVjdGVkVmFsdWUpIDogbnVsbDtcbiAgfSwgZmFsc2UpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBDTEFTU05BTUU6IHtcbiAgICBMQUJFTDogJ2pzLW15c2VsZWN0LWxhYmVsJyxcbiAgICBMQUJFTF9GT0NVUzogJ2pzLW15c2VsZWN0LWxhYmVsLS1mb2N1cycsXG4gICAgTElTVF9WQUxVRVM6ICdqcy1teXNlbGVjdC1saXN0LXZhbHVlcycsXG4gICAgTElTVF9WQUxVRVNfVklTSUJMRTogJ2pzLW15c2VsZWN0LWxpc3QtdmFsdWVzLS12aXNpYmxlJyxcbiAgICBJVEVNOiAnanMtbXlzZWxlY3QtaXRlbScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgQ0xBU1NOQU1FIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHNob3dEcm9wZG93biBmcm9tICcuL3Nob3dEcm9wRG93bi5qcyc7XG5pbXBvcnQgYmluZENsaWNrT3B0aW9ucyBmcm9tICcuL2JpbmRDbGlja09wdGlvbnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QsIGNvbnRhaW5lciwgaWQpIHtcbiAgdmFyIGxhYmVsICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHZhbHVlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIF90aGlzICAgICAgPSB0aGlzO1xuXG4gIGxhYmVsLmNsYXNzTmFtZSAgICAgID0gYCR7Q0xBU1NOQU1FLkxBQkVMfSAke0NMQVNTTkFNRS5MQUJFTH0tJHtpZH1gO1xuICB2YWx1ZXNMaXN0LmNsYXNzTmFtZSA9IENMQVNTTkFNRS5MSVNUX1ZBTFVFUztcblxuICBsYWJlbC5pbm5lckhUTUwgPSBzZWxlY3Quc2VsZWN0ZWRPcHRpb25zWzBdLmlubmVySFRNTDtcblxuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoX3RoaXMuaXNEZXZpY2UgJiYgX3RoaXMubmF0aXZlT25EZXZpY2UpIHtcbiAgICAgIF90aGlzLnNob3dEcm9wZG93bihzZWxlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FLkxBQkVMX0ZPQ1VTKTtcbiAgICAgIHRoaXMubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChDTEFTU05BTUUuTElTVF9WQUxVRVNfVklTSUJMRSk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmZha2VTZWxlY3QgPSBsYWJlbDtcblxuICBbXS5mb3JFYWNoLmNhbGwoc2VsZWN0LmNoaWxkcmVuLCAob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIHZhciBkaXZPcHRpb24gICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdk9wdGlvbi5jbGFzc05hbWUgPSBDTEFTU05BTUUuSVRFTTtcbiAgICBkaXZPcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uLmlubmVySFRNTDtcbiAgICBkaXZPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgZGl2T3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBpZCk7XG4gICAgdmFsdWVzTGlzdC5hcHBlbmRDaGlsZChkaXZPcHRpb24pO1xuXG4gICAgYmluZENsaWNrT3B0aW9ucyhkaXZPcHRpb24sIHNlbGVjdCwgdGhpcyk7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZXNMaXN0KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DTEFTU05BTUUgPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG52YXIgX2NyZWF0ZURPTUVsZW1lbnRzID0gcmVxdWlyZSgnLi9jcmVhdGVET01FbGVtZW50cy5qcycpO1xuXG52YXIgX2NyZWF0ZURPTUVsZW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jcmVhdGVET01FbGVtZW50cyk7XG5cbnZhciBpID0gMDtcblxudmFyIFNlbGVjdCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlbGVjdChwYXJhbXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMuc2VsZWN0IHx8ICFwYXJhbXMuY29udGFpbmVyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdteS1zZWxlY3QgZXJyb3IgOiBNaXNzaW5nIG9wdGlvbnMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0ID0gcGFyYW1zLnNlbGVjdDtcbiAgICB2YXIgY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lcjtcblxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3QpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5mYWtlU2VsZWN0ID0gbnVsbDtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMuaWQgPSBpO1xuICAgIHRoaXMubmF0aXZlT25EZXZpY2UgPSAhIXBhcmFtcy5uYXRpdmVPbkRldmljZTtcbiAgICB0aGlzLmlzRGV2aWNlID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignbXktc2VsZWN0IGVycm9yIDogc2VsZWN0IE5vZGUgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ215LXNlbGVjdCBlcnJvciA6IGNvbnRhaW5lciBOb2RlIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBfY3JlYXRlRE9NRWxlbWVudHMyWydkZWZhdWx0J10uY2FsbCh0aGlzLCB0aGlzLnNlbGVjdCwgdGhpcy5jb250YWluZXIsIHRoaXMuaWQpO1xuICAgIGJpbmRDbGlja091dC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6ICdoaWRlTGlzdHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlTGlzdHMoKSB7XG4gICAgICB0aGlzLmZha2VTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShfQ0xBU1NOQU1FLkNMQVNTTkFNRS5MQUJFTF9GT0NVUyk7XG4gICAgICB0aGlzLmZha2VTZWxlY3QubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShfQ0xBU1NOQU1FLkNMQVNTTkFNRS5MSVNUX1ZBTFVFU19WSVNJQkxFKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gY2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VsZWN0O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VsZWN0O1xuO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tPdXQoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0YXJnZXRDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcblxuICAgIGlmICghdGFyZ2V0Q2xhc3MuY29udGFpbnMoX0NMQVNTTkFNRS5DTEFTU05BTUUuTEFCRUwpICYmICF0YXJnZXRDbGFzcy5jb250YWlucyhfQ0xBU1NOQU1FLkNMQVNTTkFNRS5JVEVNKSkge1xuICAgICAgX3RoaXMuaGlkZUxpc3RzKCk7XG4gICAgfTtcbiAgfSwgZmFsc2UpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGV2ZW50O1xuICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICBldmVudC5pbml0TW91c2VFdmVudCgnbW91c2Vkb3duJywgdHJ1ZSwgdHJ1ZSwgd2luZG93KTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cbiJdfQ==
