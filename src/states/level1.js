'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var Player = require('../entities/player'),
  Enemy = require('../entities/enemy'),
  Thing = require('../entities/thing');

function preload() {
  // TODO: Make player entitity
  Player.preload();
  Enemy.preload();
  Thing.preload();
}

function create() {
  // TODO: set stage background

  // create player object
  Player.create({ level: 1 });
}

function update() {
  /**
   * Run a chance at creating variable spawn entities
   */
  Enemy.maybeCreate({ level: 1 });
  Thing.maybeCreate({ level: 1 });

  /**
   * Update all the entities!
   */
  Player.update();
  Enemy.updateAll();
  Thing.updateAll();

  /**
   * Check for collisions
   */
  Enemy.checkCollision({ player: Player.obj() });
  Thing.checkCollision({ player: Player.obj() });
}

function paused() {}
function render() {}
function shutdown() {}

var level1State = {
  preload: preload,
  create: create,
  update: update,
  paused: paused,
  render: render,
  shutdown: shutdown
};


module.exports = level1State;
