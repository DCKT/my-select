document.addEventListener('DOMContentLoaded', function () {
  var selectOption = document.querySelector('#custom'),
  selectContainer  = document.querySelector('.js-mySelect-Container'),
  selectList       = document.querySelector('.js-mySelect-List'),
  listItems        = document.querySelectorAll('.js-mySelect-List-Item');

  document.addEventListener('click', function (e) {
    var targetClassName = e.target.className;
    if (targetClassName != "js-mySelect-Container" && targetClassName != "js-mySelect-List-Item") {
      selectList.classList.remove('js-mySelect-List--visible');
    }
  }, false);

  selectContainer.onclick = function() {
    selectList.classList.add('js-mySelect-List--visible');
  }

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
      selectContainer.innerHTML = this.innerHTML;
      selectOption.innerHTML = "<option value='"+ this.innerHTML +"'>"+ this.innerHTML +"</option>";
      selectList.classList.remove('js-mySelect-List--visible');
    }, false);
  }

}, false);