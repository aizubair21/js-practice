
// alert("hello, i'm connected !");


let car = {};
 car["name"] = "nova";
 car["age"] = 50;
 car["address"] = "lalmohan";

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
		// console.log(typeof name);
		// localStorage.setItem(date, " " );

		if (name == "0" || name === "Boolean" || name == "" || date == 0) {
			alert(" You have to type your name correctly !");
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


		if (names.includes(name) && name != " ") {
			alert("Hay, who are you ? This day " + name + " " + "entered one time");
			data_form.name.value = "";
		}		

		if (!dates.includes(date) && date.length > 1 ) {
			dates.push(date);
			localStorage.getItem(date, JSON.stringify(names));
		}


		if (!names.includes(name) && dates.includes(date) && name.length > 1) {
			names.push(name);
			localStorage.setItem(date, JSON.stringify(names));
			alert(" Successfully received your addend. ");
			data_form.name.value = "" ;
			make_list(date);
		} 

		// document.getElementById("list").innerHTML = names;
		
});

function make_list(date) {
    let list = '';

    names = localStorage.getItem(date);

    if (names && names.length > 0) {
        names = JSON.parse(localStorage.getItem(date));
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            list += `<li class="list-group-item">${element}</li>`;
        }
    } else {
        list = '<li class="list-group-item">no result</li>';
    }

    document.getElementById('list').innerHTML = list;
}
 
 













 

