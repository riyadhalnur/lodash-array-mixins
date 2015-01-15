'use strict';

var _ = require('lodash');

var arrayMethods = {
  /**
   * @param {Array} array from which to extract and return a random element
   */
  randElem: function (arr) {
    if (_.isArray(arr)) {
      var randomElement = arr[Math.floor(Math.random() * arr.length)];
      return randomElement;
    }
  },

  /**
   * @param {Array} array from which to return the size of the largest element
   *                works best with string arrays
   */
  largestElem: function (arr) {
    if (!_.isArray(arr)) { throw new Error('Parameter needs to be an array!'); }

    var list = [];

    for (var i=0; i<arr.length; i++) {
      list.push(arr[i].length);
    }

    return getMaxOfArray(list);
  }
};

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

_.mixin(arrayMethods);

module.exports = _;
