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


// Position
// var w = screen.width;
// var h = screen.height;
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