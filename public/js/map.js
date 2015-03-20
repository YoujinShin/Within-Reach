// lab
L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

// color: examples.map-i86nkdio
// grey: examples.map-20v6611k
// satellite: examples.map-2k9d7u0c
// white: examples.map-8ced9urs'

var map = L.map('map', {
	minZoom: 11,
	maxZoom: 18
	// zoomControl: false
}).setView([42.3133735,-71.0571571], 11);

var baseLayer = L.mapbox.tileLayer('examples.map-20v6611k');
baseLayer.setOpacity(1);
baseLayer.addTo(map);

var busBlockLayer = L.mapbox.tileLayer('senseable.u0jp2e29', {
	accessToken: L.mapbox.accessToken
});
busBlockLayer.addTo(map);

var busBlockStyle = {

	fillColor: '#fff',
	fillOpacity:0.8,
	color: '#fff',
	// opacity: 0,
	weight: 1
};

// queue()
//   .defer(d3.json, "BostonBlocks.geojson")
//   .await(ready);

// function ready(error, block_bus) {

// 	// L.geoJson(block_bus, {

// 	// 	// style: busBlockStyle
// 	// }).addTo(base_layer);
// }