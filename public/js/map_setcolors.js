setLayerStyle = function(layer, type, alpha) {

	var style;
	// var defaultColor = '#3F51B5'; // blue
	// var defaultColor = '#55B1CE'; // light blue
	var defaultColor = 'rgba(255,255,255,0.35)';

	var selectedColor =  '#55B1CE';
	// var selectedColor = '#ff4081';// pink
	
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
				weight: 2.3,
				opacity: 0.7,
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
			style={
				weight: 2.3,
				fillOpacity: 0.3,
				color: selectedColor,
				fillColor: selectedColor,
				active:true
			};
			break;
	}
	
	layer.setStyle(style);

}