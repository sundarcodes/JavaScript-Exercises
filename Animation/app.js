
$(document).ready(function(){

// Create a game object


var game={
	init: function(domElement){
		this.domElement = domElement;
		$(this.domElement).css('left','0px');
		this.initPosistion=0;
	},
	move:function(){
		this.setIntervalId = setInterval(frame, 5);
		var pos=parseInt($(this.domElement).css('left'));
		//this.init(this.domElement);
		var domElement = this.domElement;
		console.log("Inside move");
		console.log(this);
	  	function frame() {
	  		  pos++;
	  		  console.log("Inside frame");
	  		  console.log(this);
	  		  $(domElement).css('left',pos + 'px');
		      // domElement.style.left = pos + 'px'; 
		    }
	},
	stop:function(){
		if(this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}
};

var car=$('#car');
game.init(car);
console.log(game.init);

// Add the click listener
$('#start').click(function(){
	game.move();
});
$('#stop').click(function(){
	game.stop();
});

});




