var Select = require('../lib/select');

document.addEventListener('DOMContentLoaded', function() {
  var select = new Select({
    select: '.test',
    container: '#bloc',
  });

  select.on('change', function(value) {
    console.log(value);
  });
}, false);
