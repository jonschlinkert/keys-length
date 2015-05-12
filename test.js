/*!
 * keys-length <https://github.com/jonschlinkert/keys-length>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var keysLength = require('./');

describe('keysLength', function () {
  it('should:', function () {
    keysLength({a: 'b'}).should.equal(1);
    keysLength({a: 'b', c: 'd'}).should.equal(2);
    keysLength({a: 'b', c: 'd', e: 'f'}).should.equal(3);
  });

  it('should throw an error:', function () {
    (function () {
      keysLength();
    }).should.throw('keys-length expects an object.');
  });
});
