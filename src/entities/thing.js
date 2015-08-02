'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

/**
 * Holds a reference all things on the stge
 */
var _things = [];

var Thing = {

  /**
   * Used to know if we wait longer to spawn another thing
   */
  _waitFlag: false,

  // Preload thing sprite
  preload: function() {
    game.load.image('thing', '../assets/char_02_sized.png');
  },

  /**
   * Create and return a new thing object
   */
  create: function(opts) {
    var thing = new _Thing(opts.level);
    _things.push(thing);
    return thing;
  },

  /**
   * Only create a new thing if the waitFlag is false. Once one is created, the
   * flag is flipped, and will be turned back off after 2 seconds
   */
  maybeCreate: function(opts) {
    if (Thing._waitFlag) return false;

    // TODO: Do I want spawn time to be affected by level?
    Thing._waitFlag = true;
    setTimeout(function() { Thing._waitFlag = false; }, 2000);

    return Thing.create(opts);
  },

  /**
   * Run the update function for each thing on the screen
   */
  updateAll: function() {
    _things.forEach(function(thing, idx) {
      if (thing.isDestroyed()) _things.splice(idx, 1);
      thing.update();
    });
  }
};

/**
 * Create a new thing just above the top of the stage, and a random spot along
 * the x axis. Set the level and the velocity which is based on level
 */
function _Thing(level) {
  this._obj = game.add.sprite(util.rand(30, game.world.width - 30), -50, 'thing');
  this.level = level;
  this.velocity = _getVelocity(this.level);
}

/**
 * If it goes off the stage, destroy it, otherwise advanced it downwards at the
 * velocity determined by level
 */
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
