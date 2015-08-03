'use strict';
var game = require('../game'),
  Phaser = require('phaser').Phaser;

function create() {
  var headerText = 'Dude! You lost!';
  var headerTextStyle = {
    font: '26pt Helvetica',
    fill: '#fff',
    align: 'center'
  };

  var bodyText = 'Press space to start over.';
  var bodyTextStyle = {
    font: '14pt Helvetica',
    fill: '#fff',
    align: 'center'
  };

  var headerTextObj = game.add.text(game.world.centerX - 100, game.world.centerY - 50, headerText, headerTextStyle);
  var bodyTextObj = game.add.text(game.world.centerX - 100, game.world.centerY + 50, bodyText, bodyTextStyle);

  var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  spaceKey.onDown.add(function(e) {
    game.state.start('boot');
  });
}

function update() {}
function paused() {}
function render() {}
function shutdown() {}

var gameOverState = {
  create: create,
  update: update,
  paused: paused,
  render: render,
  shutdown: shutdown
};


module.exports = gameOverState;
