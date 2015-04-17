export default class Select {
  
  constructor(params) {
    var _this = this;

    this.containerSelector = params.containerSelector;
    this.listItemSelector  = params.listItemSelector;
    this.container         = document.querySelector(params.containerSelector);
    this.list              = document.querySelector(params.listSelector);
    this.listItems         = document.querySelectorAll(params.listItemSelector);
    this.select            = document.querySelector(params.selectToBind);

    document.addEventListener('click', (e) => {
      var targetClassName = e.target.className;

      if (targetClassName != this.containerSelector.slice(1) && 
          targetClassName != this.listItemSelector.slice(1)) {

        this.list.classList.remove('js-mySelect-List--visible');
      }
    }, false);

    for (var i = 0; i < this.listItems.length; i++) {
      this.listItems[i].addEventListener('click', function () {
        _this.container.innerHTML = this.innerHTML;
        _this.select.innerHTML    = '<option selected value=\'' + this.innerHTML + '\'>' + this.innerHTML + '</option>';
        _this.list.classList.remove('js-mySelect-List--visible');
      }, false);
    };

    this.container.onclick = () => {
      this.list.classList.add('js-mySelect-List--visible');
    };
  }
};