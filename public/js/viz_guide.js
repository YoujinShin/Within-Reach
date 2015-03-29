function drawLayers() {

	var layers = g.append('text') // blue: bus + walking
		.attr('x', gap + 20)
		.attr('y', 20)
		.text('LAYERS')
		.attr('class', 'legend')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	g.append('line') // blue: bus + walking
		.attr('x1', gap+7)
		.attr('y1', 10 )
		.attr('x2', gap+7)
		.attr('y2', height-10)
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.attr('stroke', '#fff')
		.attr('stroke-width', 1);

	var diameter2 = 28;
	var tg = (width/4 - 110 - 5 * diameter2)/3;
	var x1 = gap + 110;
	var x2 = x1 + 2 * diameter2 + tg;
	var x3 = x2 + 2 * diameter2 + tg;

	var layer_1 = g.append('circle') // blue: bus + walking
		.attr('cx', x1)
		.attr('cy', height/2 + 5 )
		.attr('r', diameter2)
		.style('fill', '#fff')
		.style('fill-opacity', 0.1)
		.attr('stroke-width', 1.4)
		.attr('stroke', 'rgba(255,255,255,0.7)')
		.on("mouseover", function() {
			d3.select(this).style('fill-opacity', 0.3);
		})
		.on("mouseout", function() {
			d3.select(this).style('fill-opacity', 0.1);
		})
		.on('click', function() {
		});

	var layer_2 = g.append('circle') // blue: bus + walking
		.attr('cx', x2)
		.attr('cy', height/2 + 5 )
		.attr('r', diameter2)
		.style('fill', '#fff')
		.style('fill-opacity', 0.1)
		.attr('stroke-width', 1.4)
		.attr('stroke', 'rgba(255,255,255,0.7)')
		.on("mouseover", function() {
			d3.select(this).style('fill-opacity', 0.3);
		})
		.on("mouseout", function() {
			d3.select(this).style('fill-opacity', 0.1);
		})
		.on('click', function() {
		});

	var layer_3 = g.append('circle') // blue: bus + walking
		.attr('cx', x3)
		.attr('cy', height/2 + 5 )
		.attr('r', diameter2)
		.style('fill', '#fff')
		.style('fill-opacity', 0.1)
		.attr('stroke-width', 1.4)
		.attr('stroke', 'rgba(255,255,255,0.7)')
		.on("mouseover", function() {
			d3.select(this).style('fill-opacity', 0.3);
		})
		.on("mouseout", function() {
			d3.select(this).style('fill-opacity', 0.1);
		})
		.on('click', function() {
		});
}

function drawTimeline() {

	var timeline = g.append('text') // blue: bus + walking
		.attr('x', gap*2 + 20)
		.attr('y', 20)
		.text('TIMELINE')
		.attr('class', 'legend')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	g.append('line') // blue: bus + walking
		.attr('x1', gap*2+7)
		.attr('y1', 10 )
		.attr('x2', gap*2+7)
		.attr('y2', height-10)
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.attr('stroke', '#fff')
		.attr('stroke-width', 1);

	// var xScale = 

	g.append('line') // blue: bus + walking
		.attr('x1', gap*2+110)
		.attr('y1', height -10 )
		.attr('x2', width - 20)
		.attr('y2', height-10)
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.attr('stroke', '#fff')
		.attr('stroke-width', 2)
		.style("stroke-dasharray", ("1,3"))

	// drawHorizontal();
	// drawVertical();
	drawButton();
}

function drawButton() {

	var t = 13;
	var t2 = 10;

	poly = [{"x":gap*2 +110- 40, "y":height-20},
			{"x":gap*2 +110- 40,"y":height-20-t},
			{"x":gap*2 +110- 40 + t,"y":height-20-t/2}];

	play = g.selectAll("polygon")
			.data([poly])
		.enter().append("polygon")
			.attr("points",function(d) { 
			return d.map(function(d) {
			    return [d.x,d.y].join(",");
			}).join(" ");
			})
			.style('fill', 'rgba(255,255,255,0.5)')
			.attr("stroke","black")
			.attr("stroke-width",0);

	button = g.append('rect')
		.attr('x', gap*2 +110- 40 -t2)
		.attr('y', height-20- t -t2)
		.attr('width', t + 2*t2)
		.attr('height', t + 2*t2)
		.style('fill', 'rgba(255,255,255,1)')
		.style('fill-opacity', 0.07)
		.attr("stroke","black")
		.attr("stroke-width",0)
		.on("mouseover", function() {
			d3.select(this).style('fill-opacity', 0.2);
		})
		.on("mouseout", function() {
			d3.select(this).style('fill-opacity', 0.07);
		})
		.on('click', function() {
		});
}

function drawVertical() {


}