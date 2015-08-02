'use strict';

var game = require('../game'),
  Phaser = require('phaser').Phaser;

var ScoreDisplay = {

  _obj: null,

  _label: 'Score: ',

  _styles: {
    font: '22pt Helvetica',
    fill: '#fff',
    align: 'center'
  },
  
  /**
   * Create score display object
   */
  create: function() {
    this._obj = game.add.text(50, 50, this._label + game.score, this._styles);
  },

  /**
   * Update score display
   */
  update: function() {
    this._obj.setText(this._label + game.score);
  }

};

module.exports = ScoreDisplay;
