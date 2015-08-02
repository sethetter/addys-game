'use strict';

module.exports = {
  rand: function(high, low) {
    if (typeof low === 'undefined') low = 0;
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }
};
