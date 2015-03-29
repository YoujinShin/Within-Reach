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
		map.setView([e.latlng.lat, e.latlng.lng], 15);

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


	// get Second ShapeFile
	var url2 = 'http://senseable3.mit.edu/within-reach/testShape2.geojson';
	var method2 = 'GET';
	var xhr2 = createCORSRequest(method2, url2);

	xhr2.onload = function() {
	  var json2 = JSON.parse(xhr2.responseText);
	  drawSecondArea(json2);
	};

	xhr2.onerror = function() {
	  console.log('error');
	};

	xhr2.send(); // sending a query

	// get First ShapeFile
	var url = 'http://senseable3.mit.edu/within-reach/testShape1.geojson';
	var method = 'GET';
	var xhr = createCORSRequest(method, url);

	xhr.onload = function() {
	  var json = JSON.parse(xhr.responseText);
	  drawFirstArea(json);
	};

	xhr.onerror = function() {
	  console.log('error');
	};

	xhr.send(); // sending a query
}

function drawFirstArea(data) {

	L.geoJson(data, {

		style: firstLayerStyle
		// onEachFeature: function (feature, layer) {
		//     layer.bindPopup("<h2>" + feature.properties.NAME10 + "</h2>");
		// }
	}).addTo(firstLayer); 

	firstLayer.setZIndex(1).addTo(map);
}

function drawSecondArea(data) {

	L.geoJson(data, {
		style: secondLayerStyle
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
		properties:e.target.feature.properties
	}
}
