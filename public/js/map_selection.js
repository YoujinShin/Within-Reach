function onEachFeature(feature, layer) {

	layer.on({
		mouseover: mouseOverLayer,
		mouseout: mouseOutLayer,
		click: mouseClickLayer
	});
	
	setLayerStyle(layer, "default");
	// layer.bindLabel(feature.properties.NAME10);
}

function mouseOverLayer(e) {

	setLayerStyle(e.target, "over");
	e.target.bringToFront();
}

function mouseOutLayer(e) {

	var infos=getInfos(e);

	if(infos.style.active) {
		setLayerStyle(e.target, "select");
	} else {
		setLayerStyle(e.target, "out");
	}
}

var lastClicked = 0;

mouseClickLayer = function(e) {

	var infos=getInfos(e);

	if(infos.style.active) {

		$('#container').css('visibility', 'hidden');

		setLayerStyle(e.target, "unselect");
		map.setView([42.3133735 + 0.0, -71.0571571 - 0.04], 12);
	} else {

		$('#container').css('visibility', 'visible');

		setLayerStyle(e.target, "select");
		map.setView([e.latlng.lat, e.latlng.lng], 14);

		// disable last clicked layer
		if(lastClicked == 0) {
			lastClicked = e.target;
		} else {
			setLayerStyle(lastClicked, "unselect");
			lastClicked = e.target;
		}
		
	}

	var url = 'http://senseable3.mit.edu/within-reach/area1.geojson';
// 
	// var xhr = createCORSRequest('GET', url);
	// if (!xhr) {
	//   throw new Error('CORS not supported');
	// }
	// console.log(xhr);

	var area1 = httpGet(url);
	console.log(area1);
	
}



getInfos = function(e) {

	var mapId=e.target._map._container.id.split("map");
		
	return {
		style: e.target.options,
		id: parseInt(e.target._leaflet_id),
		mapId:mapId[1],
		multipolygon:false,
		properties:e.target.feature.properties
	}
}
