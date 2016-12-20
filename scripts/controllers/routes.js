page ('/', homeController.reveal);

console.log('lualalala');

page('/lulwat/:hello', function(ctx, nxt){
  console.log('ctx', ctx);
  nxt();
});


// page('/movie/:hello', function(ctx, next){
//   console.log('ctx.params', ctx.params);
//   next();
// }, function(ctx, next){
//   console.log('nope');
// });

// console.log('page', page)
// // console.log('lsdkfjlsdkfj');
// // $('.movie-title').click(function(event) {
// //   event.preventDefault();
// //   console.log('event.target', event.target);
// //   page($(this).attr('href'), movieSelectionController.reveal);
// //   page();
// // });

page();
