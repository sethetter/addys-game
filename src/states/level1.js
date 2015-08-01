'use strict';

var game = require('../game'),
  Phaser = require('phaser').Phaser;

var Enemy = require('../entities/enemy'); 

var player,
  enemies;

function preload() {
  game.load.image('player', '../assets/char_02_sized.png');
  game.load.image('enemy', '../assets/char_01_sized.png');
}

function create() {
  // set stage background

  // create player object
  player = game.add.sprite(game.world.width / 2, game.world.height - 200, 'player');

  // set the x, y anchor to be in the middle of the player sprite
  player.anchor.setTo(0.5, 0.5);

  // set up enemy object prototype?
  //enemies = game.add.group();

  //enemies.add(new Enemy());
  new Enemy();

  // assign collision behavior
}

function update() {
  // bind mouse x to player x
  player.x = game.input.mousePointer.x;

  // keep the player from going off stage
  if (player.x < (0 + (player.width / 2))) {
    player.x = 0 + (player.width / 2);
  } else if (player.x > (game.world.width - (player.width / 2))) {
    player.x = game.world.width - (player.width / 2);
  }

  // timer for enemy creation, or rand number check <-- this
  // - add to enemy group
  // - set rand parameters
  // -- write helper functions for these
  // -- helper function for this whole create process? yeah

}

function paused() {

}

function render() {

}

function shutdown() {

}

var level1State = {
  preload: preload,
  create: create,
  update: update,
  paused: paused,
  render: render,
  shutdown: shutdown
};


module.exports = level1State;
