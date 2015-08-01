var game = require('../game'),
  Phaser = require('phaser').Phaser;

var sprite,
  spaceKey;

// Runs when the state starts
function createBootState() {

  var headerText = 'Addy\'s Game!';
  var headerTextStyle = {
    font: '26pt Helvetica',
    fill: '#fff',
    align: 'center'
  };

  var bodyText = 'Press space to get started!';
  var bodyTextStyle = {
    font: '14pt Helvetica',
    fill: '#fff',
    align: 'center'
  };

  sprite = game.add.sprite();
  sprite.width = 800;
  sprite.height = 800;
  //sprite.filters = [filter];

  var headerTextObj = game.add.text(game.world.centerX - 100, game.world.centerY - 50, headerText, headerTextStyle);
  var bodyTextObj = game.add.text(game.world.centerX - 100, game.world.centerY + 50, bodyText, bodyTextStyle);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  spaceKey.onDown.add(function(e) {
    game.state.start('level1');
  });
}

// Runs on each game loop tick
function updateBootState() {
}

var boot = {
  create: createBootState,
  update: updateBootState
};

module.exports = boot;
