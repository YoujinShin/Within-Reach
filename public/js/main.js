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