$(document).ready(function(){
	// Add event Listener
	$('.box').on("click",function(){
		id=$(this).attr('id');
		rowIndex=id.slice(0,1);
		switch(rowIndex){
			case '1':
			if ($(this).hasClass('green')){
				$(this).removeClass('green');
			}else{
				$(this).addClass('green');
			}
			// $(this).toggleClass('green');
			break;
			case '2':
			$(this).toggleClass('yellow');
			break;
			case '3':
			$(this).toggleClass('orange');
			break;
			default:
			break;
		}
	});
});