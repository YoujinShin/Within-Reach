// function setLayerStyle(layer, type, alpha) {
function setLayerStyle(layer, type) {
	var style;
	// var defaultColor = '#3F51B5'; // blue
	// var defaultColor = '#55B1CE'; // light blue
	var defaultColor = 'rgba(255,255,255,0.25)';

	// var selectedColor = '#55B1CE'; // light blue
	// var selectedColor = '#6DF7F2';  //lighter blue map
	// var selectedColor = '#ff4081';// pink
	var selectedColor = '#fff'; 
	
	switch(type) {
		case "default":
			style = {
				weight: 1,
				opacity: 0.5,
				color: defaultColor,
				fillOpacity: 0.1,
				fillColor: defaultColor
			};
			break;
		case "auto":
			style={
				weight: 1,
				opacity: 0.5,
				color: defaultColor,
				fillOpacity: alpha,
				fillColor: defaultColor
			};
			break;
		case "over":
			style={
				weight: 1.2,
				opacity: 0.9,
				color: selectedColor,
				over:true
			};
			break;
		case "out":
			style={
				weight: 1,
				opacity: 0.5,
				fillOpacity: 0,
				color: defaultColor,
				fillOpacity: 0.1,
				fillColor: defaultColor,
				over:false
			};
			break;
		case "unselect":
			style={
				weight: 1,
				opacity: 0.5,
				fillOpacity: 0,
				color: defaultColor,
				fillOpacity: 0.1,
				fillColor: defaultColor,
				active:false
			};
			break;
		case "select":
			style = {
				weight: 1,
				opacity: 0.5,
				color: defaultColor,
				fillOpacity: 0.1,
				fillColor: defaultColor
			};
			break;
	}
	
	layer.setStyle(style);
}