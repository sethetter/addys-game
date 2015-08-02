'use strict';

var game = require('../game'),
  util = require('../util'),
  Phaser = require('phaser').Phaser;

var Player = require('../entities/player'),
  Enemy = require('../entities/enemy'),
  Thing = require('../entities/thing');

var player,
  thingSpawnTimer,
  enemies = [],
  things = [];

function preload() {
  // TODO: Make player entitity
  game.load.image('player', '../assets/char_02_sized.png');
  Enemy.preload();
  Thing.preload();
}

function create() {
  // set stage background

  // create player object
  player = Player.create({ level: 1 });

  // TODO: assign collision behavior
}

function update() {
  // Attempt making an enemy
  var enemy = Enemy.maybeCreate({ level: 1 });
  if (enemy) enemies.push(enemy);

  // Attempt to make a thing
  var thing = Thing.maybeCreate({ level: 1 });
  if (thing) things.push(thing);

  /**
   * Update all the entities!
   */
  player.update();
  Enemy.updateAll();
  Thing.updateAll();
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
