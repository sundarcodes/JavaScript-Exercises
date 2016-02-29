'use strict';

class Car{
	constructor(inputDomElement){
		this.domElement=inputDomElement;
		this.domElement.css('left','10px');
		this.domElement.css('top','10px');
		this.newDirection='left';
		this.increment=true;
	}
	move(){
		this.setIntervalId=setInterval(moveCar,5);
		console.log(this.newDirection);
		console.log(this.increment);
		var currentPos = parseInt(this.domElement.css(this.newDirection));
		console.log(this.newDirection);
		var domElement=this.domElement;
		var carObj=this;
		function moveCar(){
			if (carObj.increment){
				currentPos++;
			}else{
				currentPos--;
			}
			domElement.css(carObj.newDirection,currentPos+'px');
		}

	}
	stop(){
		if (this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}
	changeDirection(direction){
		switch(direction){
			case "left":
				this.increment=false;
				this.newDirection="left";
				break;
			case "right":
				this.increment=true;
				this.newDirection="left";			
				break;
			case "up":
				this.increment=false;
				this.newDirection="top";			
				break;
			case "down":
				this.increment=true;
				this.newDirection="top";			
				break;
		}

	}
	increaseSpeed(){

	}
}

class ControlSystem{
	constructor(car){
		this.car=car;
	}
	turnRight(){
		this.car.stop();
		this.car.changeDirection("right");
		this.car.move();
	}
	turnLeft(){
		this.car.stop();
		this.car.changeDirection("left");
		this.car.move();
	}
	turnUp(){
		this.car.stop();
		this.car.changeDirection("up");
		this.car.move();
	}
	turnDown(){
		this.car.stop();
		this.car.changeDirection("down");
		this.car.move();
	}	
	start(){
		this.car.move();
	}
	stop(){
		this.car.stop();
	}
	accelerate(){

	}
}

$(document).ready(function(){
	var carDomElement=$('#car');
	var carObject = new Car(carDomElement);
	var objControlSystem = new ControlSystem(carObject);

	$(document).keydown(function(key){
		console.log(key.keyCode);
		switch(key.keyCode){
			case 37://Left Arrow
			objControlSystem.turnLeft();
			break;
			case 39:// Right arrow
			objControlSystem.turnRight();
			break;
			case 38:// Up arrow
			objControlSystem.turnUp();
			break;	
			case 40:// Down arrow
			objControlSystem.turnDown();
			break;						
			case 32://When space, stop the car
			objControlSystem.stop();
		}

	});
});





