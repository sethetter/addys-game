'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var _things = [];

var Thing = {
  _waitFlag: false,

  preload: function() {
    game.load.image('thing', '../assets/char_02_sized.png');
  },
  create: function(opts) {
    var thing = new _Thing(opts.level);
    _things.push(thing);
    return thing;
  },
  maybeCreate: function(opts) {
    if (Thing._waitFlag) return false;

    // TODO: Do I want spawn time to be affected by level?
    Thing._waitFlag = true;
    setTimeout(function() { Thing._waitFlag = false; }, 2000);

    return Thing.create(opts);
  },
  updateAll: function() {
    _things.forEach(function(thing, idx) {
      //if (thing.isDestroyed()) enemies.splice(idx, 1);
      thing.update();
    });
  }
};

function _Thing(level) {
  this._obj = game.add.sprite(util.rand(30, game.world.width - 30), -50, 'thing');
  this.level = level;
  this.velocity = _getVelocity(this.level);
}

_Thing.prototype.update = function() {
  if (_checkOutOfBounds(this._obj.y)) this._obj.destroy();
  this._obj.y += this.velocity;
};

_Thing.prototype.isDestroyed = function() {
  return !this._obj.exists;
};

function _getVelocity(level) {
  // determine based on level
  return 5 + (level * 1.7);
};

function _checkOutOfBounds(y) {
  return (y > game.world.height + 50);
}

module.exports = Thing;
