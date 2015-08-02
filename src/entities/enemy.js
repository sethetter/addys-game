'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var Enemy = {
  preload: function() {
    game.load.image('enemy', '../assets/char_01_sized.png');
  },
  createEnemy: function(level) {
    return new _Enemy(level);
  }
};

function _Enemy(level) {
  this._obj = game.add.sprite(util.rand(30, game.world.width - 30), -50, 'enemy');
  this.level = level;
  this.velocity = _getVelocity(this.level);
}

_Enemy.prototype.move = function() {
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
