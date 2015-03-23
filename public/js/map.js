// lab
L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

// color: examples.map-i86nkdio
// grey: examples.map-20v6611k
// satellite: examples.map-2k9d7u0c
// white: examples.map-8ced9urs'

var map = L.map('map', {
	minZoom: 2,
	maxZoom: 15,
	zoomControl: false
}).setView([42.3133735 + 0.0, -71.0571571 - 0.04], 12);

var baseLayer = L.mapbox.tileLayer('senseable.kakb3n74');
baseLayer.setOpacity(1);
baseLayer.addTo(map);

var blockLayer = L.mapbox.featureLayer();
var bikeLayer = L.mapbox.featureLayer();
var busRouteLayer = L.mapbox.featureLayer();
var busStopLayer = L.mapbox.featureLayer();

var bostonBlockStyle = {

	fillColor: '#fff',
	fillOpacity:0.1,
	color: '#fff',
	opacity: 0.2,
	weight: 1
};

var geojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-77.03238901390978,38.913188059745586],
        [-122.414, 37.776]
      ]
    },
    "properties": {
      "stroke": "#fc4353",
      "stroke-width": 5
    }
  }
];

queue()
	.defer(d3.json, "bostonBlock.geojson") // 7412
	// .defer(d3.json, "hubwayStation.geojson") // 142 -> available for loading
 	// .defer(d3.json, "busRoutes.geojson") // 765
	// .defer(d3.json, "busStops.geojson") // 7678
	// .defer(d3.json, "CDD_ZoningDistricts.geojson")
	.await(ready);

function ready(error, boston) {

	// console.log(data);

	L.geoJson(boston, {
		style: bostonBlockStyle,

		onEachFeature: function (feature, layer) {
		    layer.bindPopup("<h2>" + feature.properties.NAME10 + "</h2>");
		}
	}).addTo(busRouteLayer); 

	
	busRouteLayer.addTo(map);
}

function addPointLayer(data, thisLayer) {

	L.geoJson(data, {

		onEachFeature: function (feature, layer) {

			// layer.setIcon(L.mapbox.marker.icon({
			// 	//https://www.mapbox.com/maki/
			// 	// 'marker-symbol': 'circle', 
			// 	'marker-color': '#FFEB3B', //yellow
			// 	// 'marker-color': '59245f', // purple
			// 	'marker-size': 'small'
			// }));
			// layer.setOpacity(0.6);

			layer.setIcon(L.divIcon({

				className: 'circle-icon',
				iconSize: [10, 10]
			}));

		    layer.bindPopup("<h2>" + feature.properties.station + "</h2>");
		}
	}).addTo(thisLayer); 

	thisLayer.addTo(map);
}

function addBlockLayer(data, thisLayer) {

	L.geoJson(data, {

		style: bostonBlockStyle
	}).addTo(thisLayer); 

	thisLayer.addTo(map);
}
