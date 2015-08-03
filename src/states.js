var boot = require('./states/boot');
var level1 = require('./states/level1');
var gameOver = require('./states/gameover');

game.state.add('boot', boot);
game.state.add('level1', level1);
game.state.add('gameOver', gameOver);
