'use strict';

var should = require('should');
var _ = require('../index');

describe('lodash-array-mixins', function () {
  describe('_.randElem', function () {
    it('should return a random element from a given array', function () {
      var arr = [1, 2, 3, 4, 5];

      var result = _.randElem(arr);
      result.should.be.within(1, 5);
    });
  });

  describe('_.largestElem', function () {
    it('should return the size of the larget element in an array', function () {
      var words = ['Welcome', 'Hello', 'The', 'Engineering', 'Antidisestablishmentarianism'];

      var result = _.largestElem(words);
      result.should.be.equal(28);
    });
  });
});
