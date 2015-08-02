'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var _player;

var Player = {
  preload: function() {
    game.load.image('player', '../assets/char_02_sized.png');
  },
  create: function(opts) {
    if (!(typeof _player === 'undefined') && _player) _player.destroy();
    _player = null;
    _player = new _Player(opts.level);
  },
  update: function() { _player.update() };
};

function _Player(level) {
  this._obj = game.add.sprite(game.world.width / 2, (game.world.height / 2) + 300, 'player');
  this._obj.anchor.setTo(0.5, 0.5);
  this.level = level;
}

/**
 * This player is bound to the moust position, we are also doing a check that
 * the player doesn't go off stage at all, and if so, we lock them at the edge
 */
_Player.prototype.update = function() {
  // bind to mouse position
  this._obj.x = game.input.mousePointer.x;
  this._obj.y = game.input.mousePointer.y;

  // keep the player from going off stage
  if (this._obj.x < (0 + (this._obj.width / 2))) {
    this._obj.x = 0 + (this._obj.width / 2);
  } else if (this._obj.x > (game.world.width - (this._obj.width / 2))) {
    this._obj.x = game.world.width - (this._obj.width / 2);
  }

};

_Player.prototype.isDestroyed = function() {
  return !this._obj.exists;
};

module.exports = Player;
