const chalk = require('chalk');

const Letter = function(letter) {
  this.letter = letter;
  this.hasBeenGuessed = false;
  this.checkGuess = function(guess) {
    if (guess === this.letter.toLowerCase()) {
      this.hasBeenGuessed = true;
    }
  };
  this.returnCharacter = function() {
    if (this.letter === ' ') {
      return ' ';
    }
    if (this.hasBeenGuessed) {
      return chalk.bold.white(this.letter);
    }
    return chalk.blue.bold('_');
  };
};

module.exports = Letter;
