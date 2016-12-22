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

$(document).on('keydown', function(e) {
  if (e.keyCode == 37) {
    console.log('left arrow pressed');
    stop();
    moveLeft();
  } else if(e.keyCode == 39) {
    console.log('right arrow pressed');
    stop();
    moveRight();
  }
  return;
});
});

var setIntervalId;
function moveRight() {
  var carElement = $('#car');
  var pos = parseInt(carElement.css('left'));
  setIntervalId = setInterval(move, 5);
  function move() {
    if (pos >= 750) {
      clearInterval(setIntervalId);
    }
    pos = pos + 3;
    carElement.css('left', pos);
  }
}

function stop() {
  clearInterval(setIntervalId);
}

function moveLeft() {
  var carElement = $('#car');
  var pos = parseInt(carElement.css('left'));
  setIntervalId = setInterval(move, 5);
  function move() {
    if (pos <= 0) {
      clearInterval(setIntervalId);
    }
    pos = pos - 3;
    carElement.css('left', pos);
  }
}
