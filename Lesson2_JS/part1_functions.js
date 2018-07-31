
function hello(){
  console.log("Heya guys!")
}
helloYou = helloYou
function helloYou(name){
  console.log("Hello " + name)
}

function addNum(num1,num2){
  console.log(num1+num2);
}

function helloSomeone(name="Ahlex"){
  console.log("Hello " + name)
}

function formal(name="Sam", title="Sir"){
  console.log(title+ " " +name)
}

function timesFive(numInput){
  var result = numInput * 5
  return result
}

//Global Scope
var v = "Pica V"
var stuff = "Global STUFF"

function fun(stuff) {
  console.log(v)
  stuff = "Reassign stuff inside func"
  console.log(stuff)
}

fun()
console.log(stuff)
