
// alert("hello, i'm connected !");


// let car = {};
//  car["name"] = "nova";
//  car["age"] = 50;
//  car["address"] = "lalmohan";

// let number = [1,5,3,8,52,2,87,52,48,52,12,545,123,45, 17, 110];
// let number2 = [9, 110, 11, 12, 14, 15, 17, 20];
// let sortedNumber = number.sort(function(a, b){return a-b } );

// let maxValue = number[number.length-1];
// let minValue = number[0];
// let other = number.findIndex(function(num){
// 	return num > 5;
// });

// // let reverseAray = number.reverse();
// console.log("main array: \n" +number);



//  console.log(typeof car);
//  console.log(car);
// //  console.log("reverse \n " +reverseAray);
//  console.log("the sorted aray are: \n" +sortedNumber);
//  console.log("maximum value are: " +maxValue);
//  console.log("minumum value are: " +minValue);
// //  console.log(jsonData);
// //  console.log(car.myAge("zubair", 1998, 12, 20));
 
 
 
//  //conta with two array 
//  let concated = number.concat(number2);
//  let sortWithConcat = concated.sort(function(a, b){  return a-b});
//  let sortedArrayLength = sortWithConcat.length;

//  //console.log(sortWithConcat);
//  console.log(sortedArrayLength);
 

let rolls = [4, 8, 2, 5, 10, 15, 20];
let roll2 = [1, 5, 7, 11, 13];
// let roll = {
// 	name: "rahim",
// 	roll: 2,
// 	dipt: "history"
// };
//  console.log(rolls.sort(function(a, b) { return a-b})[0]);
//  console.log(rolls.includes(11));
// //  let array_concate = rolls.concat(roll2);
//  array_concate = [...rolls, ...roll2];

// 	rolls.push(roll2);
// 	console.log(rolls);



// let element = [];
// let local = localStorage.setItem('first', JSON.stringify(rolls));
// let seeLoacl = JSON.parse(localStorage.getItem('first'));
// // document.getElementById("result").innerHTML = seeLoacl ;
// let list = [ ];
// for (let index = 0; index < seeLoacl.length; index++) {
// 	element = seeLoacl[index];
// 	list += ` ${element} `;
// 	document.getElementById("list").innerHTML = list ;
// }

// console.log(list);


let dates = [];
let names = [];

document.getElementById("submit")
	.addEventListener("click", function () {
		let date = data_form.date.value;
		let name = data_form.name.value;
		let roll = data_form.roll.value;
		console.log(roll);

		let upName = name.toUpperCase();
		let strName = parseInt(name);

		// localStorage.setItem(date, " " );
 
		if (name == "" || name == "0" || date == "0" || date == "") {
			alert("Date not defined !");
			document.getElementById()
		}

		if ( name == "NaN" || upName == "nan" || upName == "NA" || upName == "YES"  || !isNaN(strName) ||  name === "Boolean" ) {
			alert(" You have to type your name and date correctly !\n 'yes, no, string, NaN, boolian, floot is not allow'");
			document.getElementById('input_name').innerHTML = " ";
		}

		
		if (names && names.length > 1) {
			names = JSON.parse(localStorage.getItem(date));
		}

		

		names = localStorage.getItem(date);
		if (names && name.length > 1) {
			names = JSON.parse(localStorage.getItem(date));
		} else {
			names = [];
		}


		if (names.includes(upName) && name != "") {
			alert("Hay, who are you ? This day " + name + " " + "entered one time");
			data_form.name.value = "";
		}		

		if (!dates.includes(date) && date.length > 1 ) {
			dates.push(date);
			localStorage.getItem(date, JSON.stringify(names));
		}


		if (!names.includes(upName) && dates.includes(date) && name.length > 1 && isNaN(strName)) {
			names.push(upName);

			localStorage.setItem(date, JSON.stringify(names));
			alert(" Successfully received your addend. ");
			data_form.name.value = "" ;
			make_list(date);
		} 

		// document.getElementById("list").innerHTML = names;
		// document.getElementsByClassName('counter').innerHTML = `total submit: ${localStorageLength}`;
});

function make_list(date) {
    let list = '';

    names = localStorage.getItem(date);

		document.querySelector('.counter').innerHTML = "total:" + JSON.parse(names).length;

    if (names && names.length > 0) {
        names = JSON.parse(localStorage.getItem(date));
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
						console.log(element);
            list += `<tr>
						<td class="table-item">${element}</td>
						</tr>`;
        }
    } else {
        list = '<tr><td colspan="3" style="text-align: center" class="table-item">no result</td></tr>';
    }

    document.getElementById('student-info-table-body').innerHTML = list;
		
}
 
function seeFromLocal() {
	let date = data_form.date.value;
	make_list(date);



	
} 

function clearStorage() {

	document.getElementById("clearAlert").style.display = "block" ;

	document.getElementById("data_form").style.display = "none";
	
	// alert("carefull, All of existing data will be removed. and may not be undone");
	// localStorage.clear();
	
}
function agree_with() {
	localStorage.clear();
}

function skip() {
	document.getElementById("clearAlert").style.display = "none";
	document.getElementById("data_form").style.display = "block";
}



//srarch button 

// let local_data = [];
// function searchItem(key) {

// 	console.log(key);
// 	//let search_key = document.getElementById("search_key").value.toUpperCase();
// 	let to_date = document.getElementById("date").value;

// 	local_data = JSON.parse(localStorage.getItem(to_date).toLowerCase());

// 	let finde_index = local_data.(element => element == key );
// 	console.log(local_data);
// 	let item = local_data[finde_index];
// 	console.log(finde_index);
// 	make_list(item);
//alert(search_key);

// function onKeyUp() {
// 	let to_date = document.getElementById("date").value;
// 	if ( to_date == "") {

// 	}
// }













 

