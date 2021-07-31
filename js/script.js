 let car = {};
 car["name"] = "nova";
 car["age"] = 50;
 car["address"] = "lalmohan";

let number = [1,5,3,8,52,2,87,52,48,52,12,545,123,45, 17, 110];
let number2 = [9, 110, 11, 12, 14, 15, 17, 20];
let sortedNumber = number.sort(function(a, b){return a-b } );

let maxValue = number[number.length-1];
let minValue = number[0];
let other = number.findIndex(function(num){
	return num > 5;
});

//let reverseAray = number.reverse();
console.log("main array: \n" +number);
//let jsonData = 	JSON.parse(car);


 //console.log(typeof car);
 //console.log(car);
 //console.log("reverse \n " +reverseAray);
 //console.log("the sorted aray are: \n" +sortedNumber);
 //console.log("maximum value are: " +maxValue);
 //console.log("minumum value are: " +minValue);
 //console.log(jsonData);
 //console.log(car.myAge("zubair", 1998, 12, 20));
 
 
 
 //conta with two array 
 let concated = number.concat(number2);
 let sortWithConcat = concated.sort(function(a, b){  return a-b});
 let sortedArrayLength = sortWithConcat.length;

 //console.log(sortWithConcat);
 console.log(sortedArrayLength);
 
 
 
 
 
 

