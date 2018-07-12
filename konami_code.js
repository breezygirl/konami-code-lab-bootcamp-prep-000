const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a" 
]; 

function init() { 
  // your code here
 
	document.body.addEventListener('keydown', (e) => {
		var key = e.key;
		
		var index = 0;
		if (codes[index] === key) {
			++index;

			if (index === codes.length) {
		    alert("Hurray!");
				index = 0;
			} 
		} else {
		  index = 0;
		}
	});
}
 
	
	 
		
	




  

