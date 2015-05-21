'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Select = function Select(params) {
  _classCallCheck(this, Select);

  var selects = document.querySelectorAll(params && params.select || '.js-mySelect');
  var wrappers = document.querySelectorAll('.js-mySelect-Wrapper');
  var lists = [];

  [].forEach.call(selects, function (select, i) {
    var wrapper = document.createElement('div');
    var container = document.createElement('div');
    var list = document.createElement('div');

    wrapper.className = 'js-mySelect js-mySelect-' + i;
    container.className = 'js-mySelect-Container js-mySelect-Container-' + i;
    container.innerHTML = select.selectedOptions[0].innerHTML;
    list.className = 'js-mySelect-List js-mySelect-List-' + i;

    container.addEventListener('click', function () {
      this.classList.add('js-mySelect-Container--open');
      this.nextSibling.classList.add('js-mySelect-List--visible');
    }, false);

    [].forEach.call(select.children, function (selectOption, optionIndex) {
      var option = document.createElement('div');
      option.className = 'js-mySelect-Item';
      option.innerHTML = selectOption.innerHTML;
      option.setAttribute('data-value', selectOption.getAttribute('value'));
      option.setAttribute('data-select-id', i);
      list.appendChild(option);

      option.addEventListener('click', function () {
        var id = this.getAttribute('data-select-id');
        document.querySelector('.js-mySelect-Container-' + id).innerHTML = this.innerHTML;
        selects[id].value = this.getAttribute('data-value');
        hideLists();
      }, false);
    });

    wrapper.appendChild(container);
    wrapper.appendChild(list);
    wrappers[i].appendChild(wrapper);
    lists.push(list);
  });

  /**
   * Disable select when click out
   */
  document.addEventListener('click', function (e) {
    var targetClass = e.target.classList;

    if (!targetClass.contains('js-mySelect-Container') && !targetClass.contains('js-mySelect-Item')) {
      hideLists();
    };
  }, false);

  function hideLists() {
    lists.forEach(function (select) {
      select.previousSibling.classList.remove('js-mySelect-Container--open');
      select.classList.remove('js-mySelect-List--visible');
    });
  }
};

exports['default'] = Select;
;
module.exports = exports['default'];