'use strict';

import $ from './mafj';

console.log($.$('li'));                    // list of elements
console.log($.$('#list'));                 // single element (starts with "#")
console.log($.$('body #list'));            // list of elements
console.log($.$('#list', document.body));  // single element (starts with "#")

$.each($.$('li'), function (index, element) {
  // this === element
  element.addEventListener('click', function () {
    console.log(element.innerText);
  });
});
