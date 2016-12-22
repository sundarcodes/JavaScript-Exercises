// 1. Handle left and right arrow keys
// If  left arrow is pressed, keep moving the car to left and vice
// versa for right
// If spacebar, stop the car


// Variables
// Position of the car
// Speed of the car

// Actions
// moveLeft()
// moveRight()
// stop()


$(document).ready(function() {

// car.initialize();

$(document).on('keydown', function(e) {
  if (e.keyCode == 37) {
    console.log('left arrow pressed');
    car.stop();
    car.moveLeft();
  } else if(e.keyCode == 39) {
    console.log('right arrow pressed');
    car.stop();
    car.moveRight();
  }
  return;
});
});


var car = {
  initialize: function() {
    this.setIntervalId = 0;
    console.log(this);
  },
  moveRight: function() {
    this.move('right');
  },
  moveLeft: function() {
    this.move('left');
  },

  move: function(direction) {
    var carElement = $('#car');
    var pos = parseInt(carElement.css('left'));
    this.setIntervalId = setInterval(moveCar, 5);
    var intervalID = this.setIntervalId;
    function moveCar() {
      if (direction == 'left') {
        if (pos <= 0) {
          clearInterval(intervalID);
        }
        pos = pos - 3;
      } else {
        if (pos >= 750) {
          clearInterval(intervalID);
        }
        pos = pos + 3;
      }
      carElement.css('left', pos);
    }
  },
  stop: function() {
    console.log('in stop set interval id is ' + this.setIntervalId);
      clearInterval(this.setIntervalId);
  }
};
