'use strict';

class MovingObject{
	constructor(movingObj){
		this.movingObject=movingObj;
		// The followig is for deducing the direction change parameters
		this.directionMapper={
			"left":{newDirection:"left",increment:false},
			"right":{newDirection:"left",increment:true},
			"up":{newDirection:"top",increment:false},
			"down":{newDirection:"top",increment:true}
		};
		this.currentSpeed=1; // You start with 1st gear and can move up till 5
	}
	move(){
		this.setIntervalId=setIntervalId(keepMoving,5);
		var currentMovingObject=this;
		var posToChange=parseInt(this.movingObj.css(this.currentDirectionGuide.newDirection));
		function keepMoving(){
			if (currentMovingObject.increment){
				posToChange=posToChange+currentMovingObject.currentSpeed;
			}else{
				posToChange=posToChange-currentMovingObject.currentSpeed;
			}
			// Apply the new posistion to the moving object
			currentMovingObject.movingObj.css(currentMovingObject.currentDirectionGuide.newDirection,posToChange+'px');						
		}
	}
	changeDirection(directionToChange){
		this.currentDirectionGuide=this.directionMapper[directionToChange];
	}
	stop(){
		if (this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}
	increaseSpeed(){
		if(this.currentSpeed<=5)
		{
			this.currentSpeed++;
		}
	}
	decreaseSpeed(){
		if(this.currentSpeed>=1)
		{
			this.currentSpeed--;
		}
	}

}

class Minion extends MovingObject{
	constructor(minon){
		super(minion);
	}
}

class Monster extends MovingObject{
	constructor(monster){
		super(monster);
	}
}

class Candy{
	constructor(){
		
	}
}

class GameController{
	constructor(minionObj){
		this.minion=minionObj;
	}
	createMonster(){

	}
	checkBorderDash(){

	}
	turn(movingObject,direction){

	}
}

class GamePlayArea{
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
}


$(document).ready(function(){
	// Create Objects
	// Get reference to minion DOM Element
	var minionDomElement=$('#minion');
	var minionObj=new Minion(minionDomElement);

});

