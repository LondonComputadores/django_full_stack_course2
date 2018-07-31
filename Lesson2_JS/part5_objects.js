
var carInfo = {
  make: "Toyota",
  year: 1990,
  model: "Camry",
  carAlert: function() {
    alert("We've got a car here!")
  }
}

var simple = {
  prop : "Hello!",
  myMethod : function(){
      console.log("The myMethod was called.")
  }
}

var myObj = {name: "Ahlex",
 greet: function(){
    console.log("Hey " + this.name)
  }
}

myObj.greet()
Hey Ahlex



// var carInfo = {make: "Toyota", year: 1990, model: "Camry"}
//
// var myNewObj = {a: "Hello", b: [1,2,3], c: {inside:['a', 'b']}}
//
// for (key in carInfo){
//   console.log(key)
// }
//
// for (k in carInfo){
//   console.log(k)
//   console.log(carInfo[k])
}
// Typed inThe consolee
//
// myNewObj
// Object { a: "Hello", b: (3) […], c: {…} }
// myNewObj['a']
// "Hello"
// myNewObj['b']
// Array(3) [ 1, 2, 3 ]
// myNewObj['b'][1]
// 2
// myNewObj['c']['inside']['1']
// "b"
//  carInfo['year'] = 2006
// 2006
// carInfo
// Object { make: "Toyota", year: 2006, model: "Camry" }
// carInfo['year'] += 1
// 2007
// carInfo
// Object { make: "Toyota", year: 2007, model: "Camry" }
// condole.dir(carInfo)
// ReferenceError: condole is not defined[Learn More] debugger eval code:1:1
// console.dir(carInfo)
// {…}
// ​
// make: "Toyota"
// ​
// model: "Camry"
// ​
// year: 2007
// ​
// __proto__: Object { … }
// debugger eval code:1:1
// undefined
