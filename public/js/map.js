L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

// color: examples.map-i86nkdio
// grey: examples.map-20v6611k
// satellite: examples.map-2k9d7u0c
// white: examples.map-8ced9urs'

var map = L.map('map', {
	minZoom: 11,
	maxZoom: 18
	// zoomControl: false
}).setView([42.3133735,-71.0571571], 12);

var base_layer = L.mapbox.tileLayer('examples.map-2k9d7u0c');
base_layer.setOpacity(1);
base_layer.addTo(map);