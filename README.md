# Move away from jQuery

Don't get me wrong, jQuery is awesome but sometimes Vanilla JS is simply good enough:

```javascript
// mafj.js
'use strict';

export default {
  $(selector, context = document) {
    return context[/^#/.test(selector) ? 'querySelector' : 'querySelectorAll'](selector);
  },
  each(nodes, callback) {
    [].forEach.call(nodes, function (element, index) {
      callback.call(element, index, element);
    });
  }
}
```

## List of resources

The order is random... so actually there isn't any order.

* [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/)
* [How to forget about jQuery and start using native JavaScript APIs](http://blog.romanliutikov.com/post/63383858003/how-to-forget-about-jquery-and-start-using-native)
* [Ditching jQuery](http://gomakethings.com/ditching-jquery/)
* [A Dive Into Plain JavaScript](http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript/)
