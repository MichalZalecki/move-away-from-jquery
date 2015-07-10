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
