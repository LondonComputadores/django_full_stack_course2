//Arrays
countries = ["USA", "BRA", "CHI"]
countries

countries[1]
"BRA"

countries.pop()
["USA", "BRA"]

countries.push("AUS")
["USA", "BRA", "AUS"]

matrix
Array(3) [ (3) […], (3) […], (3) […] ]
matrix.length
3

for (pigs of arr) {
   console.log("hello")
}
//ReferenceError: arr is not defined[Learn More] debugger eval code:1:1
var myArr = ["one", "two", "three"]
undefined
myArr
Array(3) [ "one", "two", "three" ]
var lasrItem = myArr
undefined
lastItem
//ReferenceError: lastItem is not defined[Learn More] debugger eval code:1:1

lasrItem
Array(3) [ "one", "two", "three" ]
myArr
Array(3) [ "one", "two", "three" ]
lasrItem = myArr.pop()
"three"
myArr
Array [ "one", "two" ]

var arr = ["A", "B", "C"]

for(var i=0; <arr.length;i++){
  console.log(arr[i])
}
//outputs
A
B
C

for (letter of arr){
  console.log(letter)
}
//Same outputa A B C

for (letter of arr){
  alert(letter);
}

function addAwesome(name) {
  console.log(name + " is awesome!");
}

addAwesome("django")
django is awesome!

var topics = ["Python", "Django", "Science"]
topics.forEach(addAwesome)
