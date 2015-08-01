'use strict';

var game = require('../game'),
  Phaser = require('phaser').Phaser;

function Enemy() {
  this._obj = game.add.sprite(game.world.width / 2, game.world.height / 2, 'enemy');
}

Enemy.prototype.move = function() {
};

module.exports = Enemy;
