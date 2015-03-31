// close about
$('#close_button').click(function() {

	$('#close_button').css('visibility', 'hidden');
	$('#about_container').css('visibility', 'hidden');
});

// open about
$('#about').click(function() {

	$('#close_button').css('visibility', 'visible');
	$('#about_container').css('visibility', 'visible');
});

// console.log($( window ).width()); // change by window size
// console.log(screen.width); // original screen size
console.log($( "body" ).width());

// Position
var w = $( "body" ).width();
$('#about').css('right', w*0.04);
// $('#about_container').css('top', ty);

// var tx = 0;
// var ty = 0;

// if(w > 1200) {
// 	tx = (w - 1200)/2;
// 	ty = (h - 300)/2;
// } else {
// 	tx = 0;
// 	ty = (h - 300)/2;
// }

// $('#about_container').css('left', tx);
// $('#about_container').css('top', ty);