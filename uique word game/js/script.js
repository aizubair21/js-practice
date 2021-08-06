//blank aray 
	
var saveItem = ["save item",];

const selectedItem = ["a","b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var len = selectedItem.length;

var randomlySelect =  selectedItem[Math.floor(Math.random() * 26+1)];

var is_started = false; 



function gameStart(){
	//alert("connent !");
	let player_name = document.getElementById('start-command').value;

	if (player_name != ""){

		document.getElementById('show-output').innerHTML = "Your first word is:<br> " + randomlySelect.toUpperCase(); 
		// is_started = true; 

	}else{
		document.getElementById('notify').innerHTML = "type your name to start.";
		
	}
}

	


function checkItem(){

	let  input = document.getElementById('game-input').value;
	//let uniquesaveItem = saveItem.includes(input)
	if (is_started === true){
		if (input == 0 || input == "" ){
			//input field check
			alert("plz, You have to input one item");
		}else {
		
		//input else
			if ( saveItem.includes(input) == true ){
				document.getElementById('show-error').innerHTML = "Sorry, You chose this once time !";
						
			}else{
				//if slese block
				saveItem.push(input);
				document.getElementById('notify').innerHTML = "Success !";
						
						
					
			}
			
		}
		
		}else{
				//if game is not started ........
				alert("At first you have to start the game !");
			}
		
	//function block....

}

function showItem(){
	document.getElementById('show-all').innerHTML = saveItem;
}








// var is_started = false;
// function gameStart(){
// 	let cmd = document.getElementById('start-command').value;
// 		if (cmd != 0){
// 			document.getElementById('show-output').innerHTML = "Your first word is:<br> " + randomlySelect.toUpperCase(); 
// 			is_started = true; 
// 		}else{
// 			document.getElementById('show-error').innerHTML = "type your name to start.";
		
// 		}
// 	}
