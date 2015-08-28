var CLASSNAME = require('./constants.js').CLASSNAME;

module.exports = function(option, select, _this) {
  option.addEventListener('click', function() {
    var id              = this.getAttribute('data-select-id');
    select.value        = this.getAttribute('data-value');
    _this.selectedValue = this.getAttribute('data-value');
    document.querySelector(`.${CLASSNAME.LABEL}-${id}`).innerHTML = this.innerHTML;
    _this.hideLists();
    _this.events.change ? _this.events.change(_this.selectedValue) : null;
  }, false);
};
