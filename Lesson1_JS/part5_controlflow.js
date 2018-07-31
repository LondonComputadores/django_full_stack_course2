//var hot = true
/*var temp = 32

if (temp>80) {
  console.log("Hot outside!");
} else if (temp <= 80 && temp >= 50) {
  console.log("Average temp outside!");
} else if (temp < 50 && temp >= 32) {
  console.log("It's pretty cold outside!");
} else {
  console.log("It's too cold out there!")
}*/

var ham = 2
var cheese = 5

var report = "blank"

if (ham >= 10 && cheese >= 10) {
  report = "Sales Down"
} else if ( ham === 0 && cheese === 0) {
  report = "Sales Up"
}else {
  report = "Had some sales"
}

console.log(report)
