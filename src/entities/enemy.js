'use strict';

var game = require('../game'),
  Phaser = require('phaser').Phaser;

function Enemy() {
  this._obj = game.add.sprite('enemy');
  this._obj.x = game.world.width / 2;
  this._obj.y = game.world.height / 2;
};

module.exports = Enemy;
