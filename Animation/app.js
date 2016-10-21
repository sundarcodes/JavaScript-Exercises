
$(document).ready(function(){

// Create a game object


var game={
	init: function(domElement){
		this.domElement = domElement;
		console.log(this);
		$(this.domElement).css('left','0px');
	},
	move:function(){
		this.setIntervalId = setInterval(frame, 5);
		var pos=parseInt($(this.domElement).css('left'));
		var domElement = this.domElement;
		console.log("Inside move");
		console.log(this);
	  	function frame() {
	  		  pos++;
	  		  console.log("Inside frame");
	  		  console.log(this);
	  		  // $(this.domElement).css('left',pos + 'px');
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
console.log(game);
console.log('Before calling init');
game.init(car);
// console.log(game.init);

// Add the click listener
$('#start').click(function(){
	game.move();
});
$('#stop').click(function(){
	game.stop();
});

});




