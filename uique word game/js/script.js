//blank aray 
	
var saveItem = ["save item",];

const selectedItem = ["a","b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var len = selectedItem.length;

var randomlySelect =  selectedItem[Math.floor(Math.random() * 26+1)];

var is_started = false; 

var ntify = $("#notify");
var showOutput = $("#show-output");
var showAll = $("#show-all");
var showError = $("#show-error");; 

function gameStart(){
	//alert("connent !");
	let player_name = document.getElementById('start-command').value;
	document.getElementById('show-error').innerHTML = " ";
	document.getElementById("notify").innerHTML = "";
	document.getElementById('show-all').innerHTML = " ";
	showOutput.text(" ");
	$("#game-input").val('');

	if (player_name != ""){
		
		document.getElementById('show-output').innerHTML = "Your first letter is:<br> " + randomlySelect.toUpperCase(); 
		is_started = true; 

	}else{
		alert("type your name to start.");
		let start = document.getElementById("start-command");
		$("#start-command").focus();
		console.log(start);
		
	}
}


	

for (let index = 0; index < 4; index++) {

	let error_count = [];
	const element =index;
	if (error_count == 3) {
		document.getElementById('show-error').innerHTML = " ";
		document.getElementById("notify").innerHTML = "";
		document.getElementById('show-all').innerHTML = " ";
		showOutput.text(" ");
		$("#game-input").val('');
		alert("You lose !");
	}

	var last_index ;
	function again (item) {
		last_index = item[item.length - 1].toUpperCase();
		$("#show-output").html("Now, Your letter is: " +last_index);
	}


	function checkItem(){

		let  input = document.getElementById('game-input').value.toUpperCase();
		//let uniquesaveItem = saveItem.includes(input)
		if (is_started === true){
			if (input[0] == randomlySelect || input[0] == last_index) {
					if (saveItem.includes(input)) {
						alert(input+ ",this may use one time.");
						error_count += 1;
					} else {
	
						document.getElementById('show-error').innerHTML = " ";
						document.getElementById("notify").innerHTML = "";
						document.getElementById('show-all').innerHTML = " ";
						showOutput.text(" ");
						$("#game-input").val('');
	
						saveItem.push(input);
						$("#notify").text("congrus ! Carry on.");
						again(input);
					}
			} else {
				alert ("Your input not correct. Accroding to given letter. ");
				error_count += 1;
			}
			
			}else{
					//if game is not started ........
					alert("At first you have to start the game !");
					var btn = $("#gameStart").css({"background":"red", "color":"white", "border":"2px solid red"}).fade("slow");
					console.log(btn);
				}
			
		//function block....
	
	}
	
}

function showItem(){
	document.getElementById('show-all').innerHTML = saveItem;
}

document.onload(() => {
	alert("connect");
});






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
