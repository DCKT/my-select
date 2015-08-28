import { CLASSNAME } from './constants.js';
import showDropdown from './showDropDown.js';
import bindClickOptions from './bindClickOptions.js';

module.exports = function(select, container, id) {
  var label      = document.createElement('div');
  var valuesList = document.createElement('div');
  var _this      = this;

  label.className      = `${CLASSNAME.LABEL} ${CLASSNAME.LABEL}-${id}`;
  valuesList.className = CLASSNAME.LIST_VALUES;

  label.innerHTML = select.selectedOptions[0].innerHTML;

  label.addEventListener('click', function(e) {
    if (_this.isDevice && _this.nativeOnDevice) {
      _this.showDropdown(select);
    } else {
      this.classList.add(CLASSNAME.LABEL_FOCUS);
      this.nextSibling.classList.add(CLASSNAME.LIST_VALUES_VISIBLE);
    }
  });

  this.fakeSelect = label;

  [].forEach.call(select.children, (option, index) => {
    var divOption       = document.createElement('div');

    divOption.className = CLASSNAME.ITEM;
    divOption.innerHTML = option.innerHTML;
    divOption.setAttribute('data-value', option.getAttribute('value'));
    divOption.setAttribute('data-select-id', id);
    valuesList.appendChild(divOption);

    bindClickOptions(divOption, select, this);
  });

  container.appendChild(label);
  container.appendChild(valuesList);
};
