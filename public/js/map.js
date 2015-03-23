// lab
L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

// color: examples.map-i86nkdio
// grey: examples.map-20v6611k
// satellite: examples.map-2k9d7u0c
// white: examples.map-8ced9urs'

var map = L.map('map', {
	minZoom: 10,
	maxZoom: 15,
	zoomControl: false
}).setView([42.3133735 + 0.05, -71.0571571 - 0.04], 14);

var baseLayer = L.mapbox.tileLayer('senseable.kakb3n74');
baseLayer.setOpacity(1);
baseLayer.addTo(map);

var bikeLayer = L.mapbox.featureLayer();

// var busBlockLayer = L.mapbox.tileLayer('senseable.u0jp2e29', {
// 	accessToken: L.mapbox.accessToken
// });
// busBlockLayer.addTo(map);

var busBlockStyle = {

	fillColor: '#fff',
	fillOpacity:0.8,
	color: '#fff',
	// opacity: 0,
	weight: 1
};

queue()
  // .defer(d3.json, "BostonBlocks.geojson")
  .defer(d3.json, "hubwayStation.geojson")
  .await(ready);

function ready(error, hubway_station) {

	var center = L.geoJson(hubway_station, {

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
				html: '<i class="fa fa-camera-retro fa-3x"></i>',
				iconSize: [10, 10]
			}));

		    layer.bindPopup("<h2>" + feature.properties.station + "</h2>");
		}
	}).addTo(bikeLayer); // boundary of city on the map

	bikeLayer.addTo(map);
}



