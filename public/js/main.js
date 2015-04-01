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
// console.log($( "body" ).width());

// Position
var w = $( "body" ).width();
$('#about').css('right', w*0.04);

$( window ).resize(function() {

	window_w = $( window ).width();



	var t_width = $('#container').width() - 60;
	var t_height = $('#container').height() - 20;
	var t_gap = t_width/4;

	var diameter2 = 26;
	var img_size = 30;
	var x1 = t_gap + 20 + diameter2;
	var x2 = x1 + 140;


	var xScale = d3.scale.linear()
    	.domain([0, 24])
    	.range([t_gap * 2 + 110, t_width - 40]);

	var yScale = d3.scale.linear()
		.domain([0, 649326064])
		.range([t_height - 10, 20]);


	svg.attr('width', $('#container').width());
	g.attr('width', $('#container').width() - 60);

	diagram_width = $('#contents').css('width') * 0.8;
	$('#diagram').css('width', diagram_width);

	// update layers
	layer_line.attr('x1', t_gap + 7)
			.attr('x2', t_gap + 7);

	layer_1.attr('cx', x1);
	layer_2.attr('cx', function() {
		if(window_w < 1309) { return x1+70; }
		else { return x1+140; }
	});

	layers.attr('x', t_gap + 20);

	img_1.attr('x', x1 - img_size/2);
	img_2.attr('x', function() {
			if(window_w < 1309) { return x1 + 70 - img_size/2*1.2; }
			else { return x2 - img_size/2*1.2; }
		});

	// update timeline
	timeline.attr('x', t_gap*2 + 20);
	timeline_unit.attr('x', t_gap*2 + 20);
	timeline_line.attr('x1', t_gap*2 + 7)
		.attr('x2', t_gap*2 + 7);

	text2_1.attr('x', x1 + diameter2 + 8);
	text2_1_1.attr('x', x1 + diameter2 + 8);
	text2_2.attr('x', x2 + diameter2 + 8);
	text2_2_1.attr('x', x2 + diameter2 + 8);


	// update timeline
	bottomLine.attr('x1', xScale(0)).attr('x2', xScale(24));
	topLine.attr('x1', xScale(0)).attr('x2', xScale(24));
	maxValue.attr('x', xScale(24));
	value_0.attr('x', xScale(0));
	value_24.attr('x', xScale(24));
	bar.attr('x', xScale(5) + 3).attr('width', xScale(1) - xScale(0) - 6);
	bar_bike.attr('x', xScale(5) + 3).attr('width', xScale(1) - xScale(0) - 6);

	for(var i = 0; i < 25; i ++) {

		dotLists[i].attr('cx', xScale(i));
	}

	// // tooltip
	// if($( window ).width() < 1309) {  tooltip.style("visibility", "visible"); }
	// else { tooltip.style("visibility", "hidden"); }


	if(window_w < 1309) {
		text_1.style('visibility', 'hidden');
		text_2.style('visibility', 'hidden');

		text2_1.style('visibility', 'hidden');
		text2_1_1.style('visibility', 'hidden');
		text2_2.style('visibility', 'hidden');
		text2_2_1.style('visibility', 'hidden');

		line_1.style('visibility', 'hidden');
		line_2.style('visibility', 'hidden');
		circle_2_1.style('visibility', 'hidden');
	} else {
		text_1.style('visibility', 'visible');
		text_2.style('visibility', 'visible');

		text2_1.style('visibility', 'visible');
		text2_1_1.style('visibility', 'visible');
		text2_2.style('visibility', 'visible');
		text2_2_1.style('visibility', 'visible');

		line_1.style('visibility', 'visible');
		line_2.style('visibility', 'visible');
		circle_2_1.style('visibility', 'visible');
	}
});


diagram_width = $('#contents').css('width') * 0.8;
$('#diagram').css('width', diagram_width);

// window_w = $( window ).width();
// if(window_w < 1309) {
// 	text_1.style('visibility', 'hidden');
// 	text_2.style('visibility', 'hidden');
// 	line_1.style('visibility', 'hidden');
// 	line_2.style('visibility', 'hidden');
// } else {
// 	text_1.style('visibility', 'visible');
// 	text_2.style('visibility', 'visible');
// 	line_1.style('visibility', 'visible');
// 	line_2.style('visibility', 'visible');
// }

