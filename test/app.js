var Select = require('../lib/select.js');

document.addEventListener('DOMContentLoaded', function () {
  new Select({
    containerSelector: ".js-mySelect-Container",
    listSelector: ".js-mySelect-List",
    listItemSelector: ".js-mySelect-List-Item",
    selectToBind: "#custom"
  });
}, false);
