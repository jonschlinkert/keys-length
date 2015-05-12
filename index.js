/*!
 * keys-length <https://github.com/jonschlinkert/keys-length>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

module.exports = function keys(o) {
  if (isObject(o) === false) {
    throw new TypeError('keys-length expects an object.');
  }
  var n = 0, key;
  for (key in o) {
    n++;
  }
  return n;
};
