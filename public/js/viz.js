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

var tooltip = d3.select("body")
		.append("div")
		.attr("id", "tooltip");

var gap = width/4;

var xScale = d3.scale.linear()
    .domain([0, 24])
    .range([gap*2 + 110, width - 40]);

var yScale = d3.scale.linear()
	.domain([0, 649326064])
	// .domain([0, 79768207])
	// .range([20, height-10]);
	.range([height-10, 20]);


draw();

function draw() {

	var bg = g.append('rect')
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', width)
		.attr('height', height)
		.style('fill', 'rgba(255,255,255,0)')
		.attr('stroke', 'rgba(255,255,255,0)');

	drawLegend();
	drawLayers();
	drawTimeline();
	drawBar();
}

function drawLegend() {

	var diameter = 35;
	var dx = 110;

	var circle_2 = g.append('circle') // light blue: bus + walking + "bike"
		.attr('cx', dx)
		.attr('cy', height/2)
		.attr('r', diameter)
		.style('fill', '#6DF7F2')
		.style('fill-opacity', 0.3)
		.attr('stroke-width', 1)
		.attr('stroke', '#6DF7F2');	

	var circle_1 = g.append('circle') // blue: bus + walking
		.attr('cx', dx)
		.attr('cy', height/2)
		.attr('r', diameter*0.7)
		.style('fill', '#0361FB')
		.style('fill-opacity', 0.5)
		.attr('stroke-width', 1)
		.attr('stroke', '#0361FB');

	var circle_1_1 = g.append('circle') // light blue: bus + walking + "bike"
		.attr('cx', dx)
		.attr('cy', height/2)
		.attr('r', 2)
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('stroke-width', 0);

	var circle_2_1 = g.append('circle') // blue: bus + walking
		.attr('cx', dx)
		.attr('cy', height/2 + diameter - 5)
		.attr('r', 2)
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('stroke-width', 0);

	var legend = g.append('text') // blue: bus + walking
		.attr('x', 20)
		.attr('y', 20)
		.text('LEGEND')
		.attr('class', 'legend')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	var line_1 = g.append('line') // blue: bus + walking
		.attr('x1', dx)
		.attr('y1', height/2 )
		.attr('x2', 160)
		.attr('y2', height/2 )
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.style("stroke-dasharray", ("1,3"))
		.attr('stroke', '#fff')
		.attr('stroke-width', 1);

	var line_2 = g.append('line') // blue: bus + walking
		.attr('x1', dx)
		.attr('y1', height/2 + diameter - 5)
		.attr('x2', 160)
		.attr('y2', height/2 + diameter - 5)
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.style("stroke-dasharray", ("1,3"))
		.attr('stroke', '#fff')
		.attr('stroke-width', 1);

	var text_1 = g.append('text') // blue: bus + walking
		.attr('x', 165)
		.attr('y', height/2 + 4)
		.text('Bus + Walking')
		.attr('class', 'legend2')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	var text_2 = g.append('text') // blue: bus + walking
		.attr('x', 165)
		.attr('y', height/2 + diameter - 1)
		.text('Bus + Walking + Bike')
		.attr('class', 'legend2')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');
}
