import { CLASSNAME } from './constants.js';
import createDOMElements from './createDOMElements.js';
let i = 0;

export default class Select {
  constructor(params) {
    if (!params || !params.select || !params.container) {
      console.error('my-select error : Missing options');
      return;
    }

    let { select, container } = params;

    this.select         = document.querySelector(select);
    this.container      = document.querySelector(container);
    this.selectedValue  = null;
    this.fakeSelect     = null;
    this.events         = {};
    this.id             = i;
    this.nativeOnDevice = !!params.nativeOnDevice;
    this.isDevice       = 'ontouchstart' in document.documentElement;

    if (!this.select) {
      console.error('my-select error : select Node not found');
      return;
    };

    if (!this.container) {
      console.error('my-select error : container Node not found');
      return;
    };

    createDOMElements.call(this, this.select, this.container, this.id);
    bindClickOut.call(this);
  }

  hideLists() {
    this.fakeSelect.classList.remove(CLASSNAME.LABEL_FOCUS);
    this.fakeSelect.nextSibling.classList.remove(CLASSNAME.LIST_VALUES_VISIBLE);
  }

  on(event, callback) {
    this.events[event] = callback.bind(this);
  }
};

function bindClickOut() {
  document.addEventListener('click', (e) => {
    var targetClass = e.target.classList;

    if (!targetClass.contains(CLASSNAME.LABEL) &&
        !targetClass.contains(CLASSNAME.ITEM)) {
      this.hideLists();
    };

  }, false);
};
