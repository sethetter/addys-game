'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

/**
 * Holds a reference to the player on stage
 */
var _player;

var Player = {

  // access reference to _player object
  obj: function() { return _player._obj },

  // Preload player sprite
  preload: function() {
    game.load.image('player', '../assets/char_02_sized.png');
  },

  /**
   * Check if we have an existing player, if so, destroy it and then create and
   * return a new one.
   */
  create: function(opts) {
    if (!(typeof _player === 'undefined') && _player) _player._obj.destroy();
    _player = null;
    _player = new _Player(opts.level);
  },

  /**
   * Runs the player's update function
   */
  update: function() {
    _player.update();
  }
};

function _Player(level) {
  // Spawn in the middle of the stage
  this._obj = game.add.sprite(game.world.width / 2, game.world.height - 80, 'player');

  /**
   * Assign health points
   */
  this._obj.health = 3;

  game.physics.arcade.enable(this._obj);
  this._obj.hitArea = 'circle';

  this._obj.anchor.setTo(0.5, 0.5);
  this.level = level;

  return this;
}

/**
 * This player is bound to the moust position, we are also doing a check that
 * the player doesn't go off stage at all, and if so, we lock them at the edge
 */
_Player.prototype.update = function() {
  // bind to mouse position
  this._obj.x = game.input.mousePointer.x;

  // keep the player from going off stage
  if (this._obj.x < (0 + (this._obj.width / 2))) {
    this._obj.x = 0 + (this._obj.width / 2);
  } else if (this._obj.x > (game.world.width - (this._obj.width / 2))) {
    this._obj.x = game.world.width - (this._obj.width / 2);
  }

  // Check if health is 0
  if (this._obj.health <= 0) {
    game.state.start('gameOver');
    this._obj.kill();
    this._obj.health = 1;
  }

};

_Player.prototype.isDestroyed = function() {
  return !this._obj.exists;
};

module.exports = Player;
