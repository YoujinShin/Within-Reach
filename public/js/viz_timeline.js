
function drawTimeline() {

	var timeline = g.append('text') 
		.attr('x', gap*2 + 20)
		.attr('y', 20)
		.text('TIMELINE')
		.attr('class', 'legend')
		.style('fill', '#fff')
		.style('fill-opacity', 1)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');

	// g.append('text') 
	// 	.attr('x', gap*2 + 20)
	// 	.attr('y', 50)
	// 	.text('Reachability ')
	// 	.attr('class', 'legend2')
	// 	.style('fill', '#fff')
	// 	.style('fill-opacity', 0.6)
	// 	.attr('text-anchor', 'start')
	// 	.attr('stroke', 'none');

	g.append('text') 
		.attr('x', gap*2 + 20)
		.attr('y', 40)
		.text('Area (sqm)')
		.attr('class', 'legend2')
		.style('fill', '#fff')
		.style('fill-opacity', 0.5)
		.attr('text-anchor', 'start')
		.attr('stroke', 'none');
 
	g.append('line') // left line
		.attr('x1', gap*2+7)
		.attr('y1', 10 )
		.attr('x2', gap*2+7)
		.attr('y2', height-10)
		.style('fill', '#fff')
		.style('fill-opacity', 0)
		.attr('stroke', '#fff')
		.attr('stroke-width', 1);


	// drawButton();
	getDots();
	drawBar_bike();
	drawBar();


	var bottomLine = g.append('line') 
		.attr('x1', xScale(0))
		.attr('y1', yScale(0) )
		.attr('x2', xScale(24) )
		.attr('y2', yScale(0))
		.style('fill', 'rgba(0,0,0,0.2)')
		.style('fill-opacity', 0)
		.attr('stroke', 'rgba(255,255,255,0.3)')
		.attr('stroke-width', 1);
		// .style("stroke-dasharray", ("1,3"))

	var topLine = g.append('line') 
		.attr('x1', xScale(0))
		.attr('y1', yScale(649326064) )
		.attr('x2', xScale(24))
		.attr('y2', yScale(649326064))
		.style('fill', 'rgba(0,0,0,0)')
		.attr('stroke', 'rgba(255,255,255,0.2)')
		.attr('stroke-width', 1);
		// .style("stroke-dasharray", ("1,3"));

	g.append('text') 
		.attr('x', xScale(24))
		.attr('y', yScale(649326064) - 6)
		.text('6.5 x 10^8')
		.attr('class', 'legend2')
		.style('fill', '#fff')
		.style('fill-opacity', 0.5)
		.attr('text-anchor', 'end')
		.attr('stroke', 'none');
}

var busArea;

function drawBar() {

	var w = xScale(1) - xScale(0);

	bar = g.append('rect')
		.attr('x', xScale(5) + 3)
		.attr('y', yScale(0))
		.attr('width', w - 6)
		.attr('height', 0)
		.style('fill', '#0361FB')
		.style('fill-opacity', 0.8)
		.attr('stroke', 'rgba(0,0,0,0)');
}

function drawBar_bike() {

	var w = xScale(1) - xScale(0);

	bar_bike = g.append('rect')
		.attr('x', xScale(5) + 3)
		.attr('y', yScale(0))
		.attr('width', w - 6)
		.attr('height', 0)
		.style('fill', '#6DF7F2') // light blue
		.style('fill-opacity', 0.8)
		.attr('stroke', 'rgba(0,0,0,0)');
}

function updateBar(t, id) {

	var currentArea = getArea(id);
	var h = yScale(0) - yScale(currentArea);
	// console.log(d + '->' + h);

	bar.attr('y', yScale(currentArea))
		.attr('height',h);
}

function updateBar_bike(t, id) {

	var currentArea = getArea_bike(id);
	var h = yScale(0) - yScale(currentArea);
	// console.log(d + '->' + h);

	bar_bike.attr('y', yScale(currentArea))
		.attr('height',h);
}

function getArea(id) {

	for(var i = 0; i< busArea.length; i++) {

		var tempId = busArea[i].FacilityID - 1;
		if(id == tempId) {
			return busArea[i].Area;
		}
	}
}

function getArea_bike(id) {

	for(var i = 0; i< bikeArea.length; i++) {

		var tempId = bikeArea[i].FacilityID - 1;
		if(id == tempId) {
			return bikeArea[i].Area;
		}
	}
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

