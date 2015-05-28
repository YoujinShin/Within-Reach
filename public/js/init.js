function initialSelect() {

	tempMarker.setLatLng([42.33063116562984, -71.08085632324219]);



	var blockID = 3393;

	map.setView([42.33063116562984, -71.08085632324219], 11);

	//Viz
	updateBar(5, blockID);
	updateBar_bike(5, blockID);

	// if (blockID == 1860 || blockID == 5101) {
		// var url2 = 'http://senseable3.mit.edu/within-reach/testShape2.geojson';
	// var url2 = 'http://senseable3.mit.edu/within-reach/bicycle_5_' + blockID +'.json';
	var url2 = '//senseable3.mit.edu/within-reach/bicycle_5_' + blockID +'.json';
	// var url2 = 'http://senseable3.mit.edu/within-reach/bike_5_' + '1860' +'.geojson';
	var method2 = 'GET';
	var xhr2 = createCORSRequest(method2, url2);

	// First ShapeFile // Blue // Bus
	// var url = 'http://senseable3.mit.edu/within-reach/testShape1.geojson';
	// var url = 'http://senseable3.mit.edu/within-reach/BUS_5_' + blockID +'.json';
	var url = '//senseable3.mit.edu/within-reach/BUS_5_' + blockID +'.json';
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
		// getCenter(infos.geometry);

		$('.spinner').css('visibility', 'hidden');
	};

	xhr.onerror = function() {
		console.log('error');
	};
	// };
}