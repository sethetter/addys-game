global.PIXI = require('pixi.js');
global.p2 = require('p2');
global.Phaser = require('phaser')

var w = window.innerWidth * window.devicePixelRatio,
  h = window.innerHeight * window.devicePixelRatio;

game = new Phaser.Game(w, h, Phaser.AUTO, 'phaser_game');

game.score = 0;

module.exports = game;
