'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var _enemies = [];

var Enemy = {
  preload: function() {
    game.load.image('enemy', '../assets/char_01_sized.png');
  },
  create: function(opts) {
    var enemy = new _Enemy(opts.level);
    _enemies.push(enemy);
    return enemy;
  },
  maybeCreate: function(opts) {
    var check = (util.rand(80 / (opts.level * .6)) === 1)
    return check ? Enemy.create(opts) : false;
  },
  updateAll: function() {
    _enemies.forEach(function(enemy, idx) {
      //if (enemy.isDestroyed()) enemies.splice(idx, 1);
      enemy.update();
    });
  }
};

function _Enemy(level) {
  this._obj = game.add.sprite(util.rand(30, game.world.width - 30), -50, 'enemy');
  this.level = level;
  this.velocity = _getVelocity(this.level);
}

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
