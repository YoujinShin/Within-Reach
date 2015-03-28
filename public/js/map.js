// lab
L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

// color: examples.map-i86nkdio
// grey: examples.map-20v6611k
// satellite: examples.map-2k9d7u0c
// white: examples.map-8ced9urs'

var map = L.map('map', {
	minZoom: 11,
	maxZoom: 15,
	zoomControl: false
}).setView([42.3133735 + 0.0, -71.0571571 - 0.04], 12);

var baseLayer = L.mapbox.tileLayer('senseable.kakb3n74');
baseLayer.setOpacity(0.6);
baseLayer.addTo(map);

var blockLayer = L.mapbox.featureLayer();
var firstLayer = L.mapbox.featureLayer();
var secondLayer = L.mapbox.featureLayer();

var firstLayerStyle = {

	fillColor: '#ce55b1',
	fillOpacity:0.3,
	color: '#ce55b1',
	opacity: 1,
	weight: 3
};

var secondLayerStyle = {

	fillColor: '#5575ce',
	fillOpacity:0.3,
	color: '#5575ce',
	opacity: 1,
	weight: 3
};

queue()
	.defer(d3.json, "bostonBlock.geojson") // 7412
	// .defer(d3.json, "hubwayStation.geojson") // 142 -> available for loading
 	// .defer(d3.json, "busRoutes.geojson") // 765
	// .defer(d3.json, "busStops.geojson") // 7678
	// .defer(d3.json, "CDD_ZoningDistricts.geojson")
	.await(ready);

function ready(error, boston) {

	L.geoJson(boston, {

		onEachFeature: onEachFeature
	}).addTo(blockLayer); 

	blockLayer.addTo(map);
}

// function addPointLayer(data, thisLayer) {

// 	L.geoJson(data, {

// 		onEachFeature: onEachFeature(feature, layer)

// 		// onEachFeature: function (feature, layer) {

// 		// 	// layer.setIcon(L.mapbox.marker.icon({
// 		// 	// 	//https://www.mapbox.com/maki/
// 		// 	// 	// 'marker-symbol': 'circle', 
// 		// 	// 	'marker-color': '#FFEB3B', //yellow
// 		// 	// 	// 'marker-color': '59245f', // purple
// 		// 	// 	'marker-size': 'small'
// 		// 	// }));
// 		// 	// layer.setOpacity(0.6);

// 		// 	layer.setIcon(L.divIcon({

// 		// 		className: 'circle-icon',
// 		// 		iconSize: [10, 10]
// 		// 	}));

// 		//     layer.bindPopup("<h2>" + feature.properties.station + "</h2>");
// 		// }
// 	}).addTo(thisLayer); 

// 	thisLayer.addTo(map);
// }

// function addBlockLayer(data, thisLayer) {

// 	L.geoJson(data, {

// 		style: bostonBlockStyle
// 	}).addTo(thisLayer); 

// 	thisLayer.addTo(map);
// }
