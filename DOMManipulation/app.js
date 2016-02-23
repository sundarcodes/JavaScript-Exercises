// Add event Listeners to DOM elements

// element = document.getElementById('1');
// console.log(element.childNodes);


elements = document.getElementsByClassName('box');
for(i=0;i<elements.length;i++){
	element=elements[i];
	element.addEventListener('click',function(){
	// Get the ID of the clicked element
	id=this.id;
	rowIndex=id.slice(0,1);
	console.log(rowIndex);
	console.log(this.className);
	switch(rowIndex){
		case '1':
			if (this.className.indexOf('green') ===-1){
				this.className+=' green';

			}else{
				this.className=this.className.replace('green','');
			}
			break;
		case '2':
			if (this.className.indexOf('yellow') ===-1){
				this.className+=' yellow';
			}else{
				this.className=this.className.replace('yellow','');
			}
			break;
		case '3':
			if (this.className.indexOf('orange') ===-1){
				this.className+=' orange';
			}else{
				this.className=this.className.replace('orange','');
			}
			break;
		default:

		break;
	}

	});
}


