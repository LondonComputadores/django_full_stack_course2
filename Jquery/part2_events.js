
// $('h1').click(function(){
//   console.log('There was a click!')
// })
//
// $('li').click(function(){
//   console.log('any li was clicked!')
// })
//
// $('h1').click(function(){
//   $(this).text('I was clicked!')
// })

//Key Press

// $('input').eq(0).keypress(function(){
//   $('h3').toggeClass('turnBlue')
// })

// $('input').eq(0).keypress(function(event){
//   console.log(event)
// })

// $('input').eq(0).keypress(function(event){
//   console.log(event.which === 13) {
//     $('h3').toggleClass('turnBlue')
//   }
// })
//
// //On()  (on method)
//
// $('h1').on('dblclick', function(){
//   $(this).toggeClass('turnBlue')
// })

//Efects

// $('input').eq(1).on('click', function(){
//   $('.container').fadeOut(3000)
// })

$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000)
})
