

	//my selected item
	const myArray = ["mango", "carrot", "water", "soil", "papiya" , "rice" , "sugar" , "salt" , "egg", "fish" , "milk" , "candy" , "cake"];
	let len = myArray.length;
	let selectFromItem;

	//boolean. it means game is not started.
	let is_started = false; 

	function autoStart(){
		startGame();
	}

	function startGame(){
		//when click it cahnge to true
		is_started = true;

		document.getElementById('demo2').innerHTML = "";
        document.getElementById("playerItem").value = "" ;

		var selectitem = Math.floor(Math.random() * 14+1);

		//select an item from arry, arrcoding to random integer
		selectFromItem = myArray[selectitem];

		//take length which is selected from arry
		var selectItemLen = selectFromItem.length;

		//take first[0] index of selected item
		var firstIndex = selectFromItem[0];

		//make first index to uppercase
		var firstIndexUpper = firstIndex.toUpperCase();

		//then take last index
		var lastIndex = selectFromItem[selectFromItem.length-1];

		//make last index to uppercae
		var lastIndexUpper = lastIndex.toUpperCase();	

		document.getElementById('demo').innerHTML = "<strong>" + selectItemLen + "<strong>" + " <br></br> charecter integer";
		document.getElementById('showIndex').innerHTML =
		"First index is: " + firstIndexUpper + "<br>" + "last index is: " + lastIndexUpper + "<br>"
		;
			
			
	}





	function testInput(){


		try {
			if (is_started !== true){
				/*if game isn't start*/
				alert("Game isn't started yet!, please start the game");
				
			} else {
				/*if game is started..*/
				let catchItem = document.getElementById('playerItem').value;

				if ( catchItem == 0 ){
					/*if input item is black*/
					alert("input in not valid !");
				} else {
	
					if (selectFromItem == catchItem){
						// document.getElementById('demo2').innerHTML = "You win !";//
						alert("you won ");
                        document.getElementById("playerItem").value = "" ;
						startGame();
				
					} else {
						// for (let index = 0; index = 3; index+1) {
						// 	const element = index;
						// }

						alert(" Not Correct !");
						// document.getElementById("playerItem").value = "" ;

                        

                        // const testIfError = function (catchItem, selectItem) {

                        //     if (catchItem == "") {
                        //         document.getElementById("demo2").innerHTML = "gime input ";
                        //     }

                        //     for (let index = 0; index < 4; index++) {
                        //         // const element = selectFromItem[index];
                                
                        //         if (catchItem == selectItem ) {
                        //             alert(" congrus !");
                        //         } else {
                        //             testIfError();
                        //         }
                        //     }

    
                               
                        //     // document.getElementById("playerItem").value = "" ;
                            
                                
                        // }

                        // testIfError(catchItem, selectFromItem);   
                        startGame();
                            

					}

				}
					
			}
		}
		catch(err){
			alert(err.message);
		}	
		
	}






//     let data = '';
//    function makeIndexbox (items) {
    //    alert(items);

    //    for (let index = 0; index <= items.length; index++) {
    //         const element = items[index];
    //         data += `<td class="list-item">${element}</td>`;     
    //    }
    //    alert(data.length);
    //    document.getElementById('indexBox').innerHTML = data;

    // console.log(items - 2);
      

//    }


	// for(var i = 0; i < 200; i ++){
	// 	var total += i;
	// 	document.getElementById('demo2').innerHTML = total;
	// }
