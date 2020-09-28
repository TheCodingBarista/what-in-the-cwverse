document.addEventListener('DOMContentLoaded', function() {
  alert('This is a test');
  console.log('Test');
});

import gideonapi from 'gideon-api';

//fetch a random Arrowverse quote:
const quote = await gideonapi.quote();
console.log(quote);