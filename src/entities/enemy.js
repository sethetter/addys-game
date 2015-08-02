'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

/**
 * Holds a reference all enemies on the stge
 */
var _enemies = [];

var Enemy = {

  // Preload enemy sprite
  preload: function() {
    game.load.image('enemy', '../assets/char_01_sized.png');
  },

  /**
   * Create and return new enemy instance
   */
  create: function(opts) {
    var enemy = new _Enemy(opts.level);
    _enemies.push(enemy);
    return enemy;
  },

  /**
   * Perform a random check to see if we want to create a new enemy on the
   * stage, with increasing chances based on level
   */
  maybeCreate: function(opts) {
    var check = (util.rand(80 / (opts.level * .6)) === 1)
    return check ? Enemy.create(opts) : false;
  },

  /**
   * Run update function for each enemy on the stage
   */
  updateAll: function() {
    _enemies.forEach(function(enemy, idx) {
      if (enemy.isDestroyed()) _enemies.splice(idx, 1);
      enemy.update();
    });
  }
};

/**
 * Create a new enemy just above the top of the stage, and a random spot along
 * the x axis. Set the level and the velocity which is based on level
 */
function _Enemy(level) {
  this._obj = game.add.sprite(util.rand(30, game.world.width - 30), -50, 'enemy');
  this.level = level;
  this.velocity = _getVelocity(this.level);
}

/**
 * If it goes off the stage, destroy it, otherwise advanced it downwards at the
 * velocity determined by level
 */
_Enemy.prototype.update = function() {
  if (_checkOutOfBounds(this._obj.y)) this._obj.destroy();
  this._obj.y += this.velocity;
};

_Enemy.prototype.isDestroyed = function() {
  return !this._obj.exists;
};

function _getVelocity(level) {
  // determine based on level
  return 5 + (level * 2);
};

function _checkOutOfBounds(y) {
  return (y > game.world.height + 50);
}

module.exports = Enemy;
