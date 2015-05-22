export default class Select {
  constructor(params) {
    this.selects  = document.querySelectorAll((params && params.select) || '.js-mySelect');
    this.wrappers = document.querySelectorAll('.js-mySelect-Wrapper');
    this.lists    = [];
    this.events   = [];

    if (this.selects.length != this.wrappers.length) {
      this.error = 'mySelect Error : selects and wrappers length not equal';
    }

    /**
     * Disable select when click out
     */
    document.addEventListener('click', (e) => {
      var targetClass = e.target.classList;

      if (!targetClass.contains('js-mySelect-Container') &&
          !targetClass.contains('js-mySelect-Item')) {
        this.hideLists();
      };

    }, false);
  }

  init() {
    if (this.error) {
      console.error(this.error);
      return;
    };

    [].forEach.call(this.selects, (select, i) => {
      var _this     = this;
      var wrapper   = document.createElement('div');
      var container = document.createElement('div');
      var list      = document.createElement('div');

      wrapper.className   = `js-mySelect js-mySelect-${i}`;
      container.className = `js-mySelect-Container js-mySelect-Container-${i}`;
      container.innerHTML = select.selectedOptions[0].innerHTML;
      list.className      = `js-mySelect-List js-mySelect-List-${i}`;

      container.addEventListener('click', function() {
        this.classList.add('js-mySelect-Container--open');
        this.nextSibling.classList.add('js-mySelect-List--visible')
      }, false);

      [].forEach.call(select.children, (selectOption, optionIndex) => {
        var option       = document.createElement('div');
        option.className = 'js-mySelect-Item';
        option.innerHTML = selectOption.innerHTML;
        option.setAttribute('data-value', selectOption.getAttribute('value'));
        option.setAttribute('data-select-id', i);
        list.appendChild(option);

        option.addEventListener('click', function() {
          var id = this.getAttribute('data-select-id');
          document.querySelector(`.js-mySelect-Container-${id}`).innerHTML = this.innerHTML;
          _this.selects[id].value = this.getAttribute('data-value');
          _this.hideLists();
          _this.events.change ? _this.events.change(id) : null;
        }, false);
      });

      wrapper.appendChild(container);
      wrapper.appendChild(list);
      this.wrappers[i].appendChild(wrapper);
      this.lists.push(list);
    });
  }

  hideLists() {
    this.lists.forEach((select) => {
      select.previousSibling.classList.remove('js-mySelect-Container--open');
      select.classList.remove('js-mySelect-List--visible');
    });
  }

  on(event, callback) {
    this.events[event] = callback.bind(this);
  }
};
