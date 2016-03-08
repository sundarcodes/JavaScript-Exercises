'use strict';

class MovingObject{
	constructor(movingObj){
		this.movingObj=$(movingObj);
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
		this.setIntervalId=setInterval(keepMoving,5);
		var currentMovingObject=this;
		var posToChange=parseInt(this.movingObj.css(this.currentDirectionGuide.newDirection));
		function keepMoving(){
			if (currentMovingObject.currentDirectionGuide.increment){
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
	moveLeft(){
		this.stop();
		this.changeDirection("left");
		this.move();
	}
	moveRight(){
		this.stop();
		this.changeDirection("right");
		this.move();
	}
	moveUp(){
		this.stop();
		this.changeDirection("up");
		this.move();
	}
	moveDown(){
		this.stop();
		this.changeDirection("down");
		this.move();
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
	constructor(minionObj,monsterCreationTimeInterval){
		this.minion=minionObj;
		this.monsterCreationTimeInterval=monsterCreationTimeInterval*1000;
		this.setIntervalIdList=[];
		this.movingObjectList=[];
		this.movingObjectList.push(this.minion);
		var gameCtrlObj=this;
	    $(document).keydown(function(e){
			switch(e.keyCode){
			// Left arrow
			case 37:
				minionObj.moveLeft();
				break;		
			// Up Arrow
			case 38:
				minionObj.moveUp();
				break;
			// Right Arrow
			case 39:
				minionObj.moveRight();
	      		break;
			// Down Arrow
			case 40:
				minionObj.moveDown();
				break;
			case 32:
				minionObj.stop();
				break;
			case 13:
				gameCtrlObj.stopGame();
				break;	
			}
		});

	}
	startGame(){
		this.startMonsterCreation();
		this.startBorderChecking();
	}
	startMonsterCreation(){
		var controllerObj=this;
	    var dropMonsterFunctionId=setInterval(function(){
	  	 	controllerObj.createMonster();	
	     },this.monsterCreationTimeInterval);
        this.setIntervalIdList.push(dropMonsterFunctionId);
	}
	createMonster(){
      console.log('monster is going to come now');
      // Create a monster
      this.monster=$("<div/>");
      this.monster.addClass('monster wow tada');
      this.monsterIdTracker++;
      var monsterId='monster'+this.monsterIdTracker;
      this.monster.attr('id',monsterId)
      this.monster.appendTo($('#playarea'));
      this.monsterObj = new Monster(this.monster);
      this.movingObjectList.push(this.monsterObj);
      var controllerObj=this;
      var monsterMovementSetIntervalId=setInterval(function(){
      	controllerObj.makeMonsterMoveRandomly();},2000);
      this.setIntervalIdList.push(monsterMovementSetIntervalId);
  	}
  	makeMonsterMoveRandomly(){
	    // Make it move randomly
	    var randomDirection=Math.ceil(Math.random()*4);
	    switch(randomDirection){
	      case 1:
	        this.monsterObj.moveRight();
	        break;
	      case 2:
	      	this.monsterObj.moveLeft();
	        break;
	      case 3:
			this.monsterObj.moveUp();
	        break;
	      case 4:
			this.monsterObj.moveDown();	      
	        break;
          }
  	}
	checkBorderDash(){

	}
	stopGame(){
	  this.setIntervalIdList.forEach(function(id){
        clearInterval(id);
      });
      // Stop all the moving Objects
      this.movingObjectList.forEach(function(movingObj){
      	movingObj.stop();
      });
	}
	startBorderChecking(){

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
	var minionObj=new Minion($(minionDomElement));
	var gameCtrl=new GameController(minionObj,10);
	$('#start').click(function(){
	  gameCtrl.startGame();
	});
	$('#stop').click(function(){
	  gameCtrl.stopGame();
	});

});

