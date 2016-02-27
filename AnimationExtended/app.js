$(document).ready(function(){
    new WOW().init();
  var game = {
    init: function(vehicle){
      this.vehicle=vehicle;
      this.setIntervalIdList=[];
      this.monsterList=[];
      this.monsterIdTracker=0;
      this.monsterMoveIntervalIds={};
      this.monsterHeight=50;
      this.monsterWidth=50;
      this.minionHeight=50;
      this.minionWidth=50;      
      //$(this.vehicle).css('left','20px');
      //$(this.vehicle).css('top','20px');
      this.args = {
              right: {angle: "360deg", position: "left", increment: true},
              down:  {angle: "90deg",  position: "top", increment: true},
              left:  {angle: "360deg", position: "left", increment: false},
              up:    {angle: "90deg",  position: "top", increment: false}
            };

    },
    move: function(direction) {
      var thisArgs = this.args[direction];
      this.carStop();
      // $(this.vehicle).css('transform','rotateZ(' + thisArgs.angle + ')');
      this.vehicleSetIntervalId= setInterval(frame,10);
      this.setIntervalIdList.push(this.vehicleSetIntervalId);
      var pos = parseInt($(this.vehicle).css(thisArgs.position));
      var vehicle = this.vehicle;
      function frame(){
        if (thisArgs.increment){
          pos++;
        }else{
          pos--;
        }
        // Check if the object has hit the monsters or the border
        $('.monster').each(function()){
          monster=$(this);
          

        }
        $(vehicle).css(thisArgs.position,pos + 'px');
      }        
    },
    carStop: function(){
      if (this.vehicleSetIntervalId){
        clearInterval(this.vehicleSetIntervalId);
      }
    },
    right: function(){this.move("right")},
    left:  function(){this.move("left")},
    up:    function(){this.move("up")},
    down:  function(){this.move("down")},
    stop: function(){
      this.setIntervalIdList.forEach(function(id){
        clearInterval(id);
      });
    },
    startMonsterCreation: function(){
      dropMonsterFunctionId=setInterval(dropMonster,5000);
      this.setIntervalIdList.push(dropMonsterFunctionId);
      //this.monsterIdTracker++;
      var gameObj=this;
      function dropMonster(){
      console.log('monster is going to come now');
      // Create a monster
      var monster=$("<div/>");
      monster.addClass('monster wow tada');
      gameObj.monsterIdTracker++;
      var monsterId='monster'+gameObj.monsterIdTracker;
      monster.attr('id',monsterId)
      monster.appendTo($('#playarea'));
      gameObj.monsterList.push(monster);
      
      monsterMovementSetIntervalId=setInterval(makeMonsterMove,1000);
      gameObj.setIntervalIdList.push(monsterMovementSetIntervalId);
      //var gameObj=this;
      function makeMonsterMove(){
        // Make it move randomly
        randomDirection=Math.ceil(Math.random()*4);
        switch(randomDirection){
          case 1:
            gameObj.moveMonster("right",monster);
            break;
          case 2:
            gameObj.moveMonster("left",monster);
            break;
          case 3:
            gameObj.moveMonster("up",monster);
            break;
          case 4:
            gameObj.moveMonster("down",monster);
            break;
    
          }
        }
      }
    },
    moveMonster: function(direction,monster){
      var thisArgs = this.args[direction];
      monsterId=monster.attr('id');
      this.monsterStop(monsterId);
      // monster.css('transform','rotateZ(' + thisArgs.angle + ')');
      this.monsterMoveIntervalIds[monsterId]=setInterval(frame,10)
      this.setIntervalIdList.push(this.monsterMoveIntervalIds[monsterId]);
      var pos = parseInt(monster.css(thisArgs.position));
      function frame(){
        if (thisArgs.increment){
          pos++;
        }else{
          pos--;
        }
        monster.css(thisArgs.position,pos + 'px');
      }       

    },
    monsterStop: function(monsterId){
      if (this.monsterMoveIntervalIds[monsterId]){
        clearInterval(this.monsterMoveIntervalIds[monsterId]);
      }
    },
    start: function(){
      this.startMonsterCreation();
      this.checkBorderClash();
    },
    pause: function(){

    },
    checkBorderClash:function(){
      // Check if any of the monster has touched the border every 10 ms
      this.checkBorderClashIntervalId=setInterval(monsterCheck,10);
      this.setIntervalIdList.push(this.checkBorderClashIntervalId);
      var gameObj=this;
      // Grab all monsters
      function monsterCheck(){
        if ($('.monster').length == 0){
          return;
        }
        $('.monster').each(function(){
          // Get the top position of monster
          monster=$(this);
          positionTop=parseInt(monster.css('top'));
          positionLeft=parseInt(monster.css('left'));
          playAreaHeight=parseInt($('#playarea').css('height'));
          playAreaWidth=parseInt($('#playarea').css('width'));
          if (positionTop<=0 || positionLeft<=0 || positionLeft >= playAreaWidth
            || (positionTop+50)>=playAreaHeight){
            gameObj.monsterStop(monster.attr('id'));
            monster.addClass('shake');
            monster.attr("wow-duration","1s");
            monster.fadeIn(1200);
            monster.remove();
          }
        });
      }
    }
  };


var car = $('#car');
game.init(car);
// Register mouse clicks
$('#start').click(function(){
  game.start();
});
$('#stop').click(function(){
  game.stop();
});
// Handle Key press event
$(document).keydown(function(e){
	switch(e.keyCode){
		// Left arrow
		case 37:
			game.left();
			e.preventDefault();
			break;		
		// Up Arrow
		case 38:
			game.up();
			e.preventDefault();
			break;
		// Right Arrow
		case 39:
			game.right();
      e.preventDefault();
			break;
		// Down Arrow
		case 40:			game.down();
			e.preventDefault();
			break;
		case 13:
			game.stop();
			e.preventDefault();
			break;		
	}
});

});
