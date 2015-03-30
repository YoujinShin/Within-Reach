
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

	var bottomLine = g.append('line') // blue: bus + walking
		.attr('x1', xScale(0))
		.attr('y1', yScale(0) )
		.attr('x2', xScale(24))
		.attr('y2', yScale(0))
		.style('fill', 'rgba(0,0,0,0.2)')
		.style('fill-opacity', 0)
		.attr('stroke', 'rgba(255,255,255,0.3)')
		.attr('stroke-width', 1);
		// .style("stroke-dasharray", ("1,3"))

	drawButton();
	getDots();
}

function getDots() {

	for(var i = 0; i < 25; i ++) {

		g.append('circle')
		.attr('cx', xScale(i))
		.attr('cy', yScale(0))
		.attr('r', 2)
		.style('fill', 'rgba(255,255,255,0.4)')
		.attr('stroke', 'rgba(0,0,0,0)');
	}

	g.append('text') // blue: bus + walking
		.attr('x', xScale(0))
		.attr('y', yScale(0) - 10)
		.text('0')
		.attr('class', 'legend')
		.style('fill', 'rgba(255,255,255,0.6)')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	g.append('text') // blue: bus + walking
		.attr('x', xScale(24))
		.attr('y', yScale(0) - 10)
		.text('24 hr')
		.attr('class', 'legend')
		.style('fill', 'rgba(255,255,255,0.6)')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

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
			.style('fill', 'rgba(255,255,255,0.8)')
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
