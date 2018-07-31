var firstName = prompt('First Name Please!: ')
var lastName = prompt('Last Name Please: ')
var age = prompt('How old are u?: ')
var height = prompt("What's ur height?: ")
var petName = prompt('What is your pet name?: ')
alert("Thank u so much!")

//logic

//Four Conditions
var nameCond = null
var ageCond = null
var heightCond = null
var petCond = null

//Name Condition
if(firstName[0] === lastName[0]) {
  nameCond = true
}else {
  nameCond = false
}

//Age Condition
if (age> 20 && age<30) {
  ageCond = true
}else {
  ageCond = false
}

//Height Condition
if (height >= 170) {
  heightCond = true
}else {
  heightCond = false
}

//Pet Name
if (petName[petName.length-1] === "y") {
  petCond = true
}else {
  petCond = false
}

//Check All Conditions
if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome Stranger!")
}else {
  console.log("Nada!")
}
