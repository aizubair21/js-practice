 let car = {};
 car["name"] = "nova";
 car["age"] = 50;
 car["address"] = "lalmohan";

let number = [1,5,3,8,52,2,87,52,48,52,12,545,123,45];
let sortedNumber = number.sort(function(a, b){return a-b } );
let other = number.findIndex(function(num){
	return num > 5;
});
//let jsonData = 	JSON.parse(car);


 console.log(typeof car);
 console.log(car);
 console.log(number);
 console.log(sortedNumber);
 //console.log(jsonData);
 //console.log(car.myAge("zubair", 1998, 12, 20));

