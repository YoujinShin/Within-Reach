function onEachFeature(feature, layer) {

	setLayerStyle(layer, "default");

	layer.on({
		mouseover: mouseOverLayer,
		mouseout: mouseOutLayer,
		click: mouseClickLayer
	});
	
	
	// layer.bindLabel(feature.properties.NAME10);
}

function mouseOverLayer(e) {

	setLayerStyle(e.target, "over");
	e.target.bringToFront();
}

function mouseOutLayer(e) {

	var infos=getInfos(e);
	// console.log(infos);

	if(infos.style.active) {
		setLayerStyle(e.target, "select");
	} else {
		setLayerStyle(e.target, "out");
	}
}

var lastClicked = 0;

function mouseClickLayer(e) {

	var infos=getInfos(e);
	var blockID = infos.properties.FID_1;
	// console.log(infos.properties);

	if(infos.style.active) {

		$('#container').css('visibility', 'hidden');

		setLayerStyle(e.target, "unselect");
		map.setView([42.3133735 + 0.0, -71.0571571 - 0.04], 12);
		// map.removeLayer(markerLayer);
	} else {

		$('#container').css('visibility', 'visible');

		setLayerStyle(e.target, "select");
		map.setView([e.latlng.lat, e.latlng.lng], 12);

		// disable last clicked layer
		if(lastClicked == 0) {
			lastClicked = e.target;
		} else {
			setLayerStyle(lastClicked, "unselect");
			lastClicked = e.target;
		}

	}

	firstLayer.clearLayers();
	secondLayer.clearLayers();
	tempLayer.clearLayers();
	map.removeLayer(markerLayer);

	// Second ShapeFile // Light blue // Bike
	// var url2 = 'http://senseable3.mit.edu/within-reach/testShape2.geojson';

	// if (blockID == 1860 || blockID == 5101) {
		var url2 = 'http://senseable3.mit.edu/within-reach/testShape2.geojson';
		// var url2 = 'http://senseable3.mit.edu/within-reach/bike_5_' + blockID +'.geojson';
		// var url2 = 'http://senseable3.mit.edu/within-reach/bike_5_' + '1860' +'.geojson';
		var method2 = 'GET';
		var xhr2 = createCORSRequest(method2, url2);

		// First ShapeFile // Blue // Bus
		var url = 'http://senseable3.mit.edu/within-reach/testShape1.geojson';
		// var url = 'http://senseable3.mit.edu/within-reach/BUS_5_' + blockID +'.json';
		// var url = 'http://senseable3.mit.edu/within-reach/BUS_5_' + '1860' +'.json';
		var method = 'GET';
		var xhr = createCORSRequest(method, url);

		xhr2.onload = function() {
			var json2 = JSON.parse(xhr2.responseText);
			drawSecondArea(json2);
			xhr.send();
		};

		xhr2.onerror = function() {
			console.log('error');
		};

		xhr2.send(); // sending a query

		xhr.onload = function() {
			var json = JSON.parse(xhr.responseText);
			drawFirstArea(json);
			getCenter(infos.geometry);
		};

		xhr.onerror = function() {
			console.log('error');
		};
	// };
	
}

function drawFirstArea(data) { // blue

	L.geoJson(data, {

		style: firstLayerStyle,
		onEachFeature: onEachFeature2

	}).addTo(firstLayer); 

	firstLayer.setZIndex(1).addTo(map);

}

function drawSecondArea(data) { // light blue

	L.geoJson(data, {
		style: secondLayerStyle,
		onEachFeature: onEachFeature2
	}).addTo(secondLayer); 

	secondLayer.setZIndex(1).addTo(map);

}

function getInfos(e) {

	var mapId=e.target._map._container.id.split("map");
		
	return {
		style: e.target.options,
		id: parseInt(e.target._leaflet_id),
		mapId:mapId[1],
		multipolygon:false,
		properties:e.target.feature.properties,
		geometry:e.target.feature.geometry
	}
}

function getCenter(data) {

	L.geoJson(data, {
		style: tempLayerStyle
	}).addTo(tempLayer); 

	var center = tempLayer.getBounds().getCenter();
	tempMarker.setLatLng([center.lat, center.lng]);
	markerLayer.addTo(map);
}


