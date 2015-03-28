var margin = { top: 10, right: 30, bottom: 10, left: 30 };

var width = parseInt(d3.select('#container').style('width'), 10),
	width = width - margin.left - margin.right,
	height = parseInt(d3.select('#container').style('height'), 10),
	height = height - margin.top - margin.bottom;

var svg = d3.select('#container').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom);

var g = svg.append('g')
	.attr('width', width)
	.attr('height', height)
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

draw();

function draw() {

	var diameter = 40;
	var dx = width/9;
	// var py = (height- diameter)/2;

	var bg = g.append('rect')
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', width)
		.attr('height', height)
		.style('fill', 'rgba(255,255,255,0)')
		.attr('stroke', 'rgba(255,255,255,0)');

	var circle_1 = g.append('circle')
		.attr('cx', dx)
		.attr('cy', height/2)
		.attr('r', diameter)
		.style('fill', '#6DF7F2')
		.style('fill-opacity', 0.5)
		.attr('stroke', 'rgba(0,0,0,0)');

	var circle_2 = g.append('circle')
		.attr('cx', dx*2)
		.attr('cy', height/2)
		.attr('r', diameter)
		.style('fill', '#0361FB')
		.style('fill-opacity', 0.5)
		.attr('stroke', 'rgba(0,0,0,0)');
}