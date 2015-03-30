function onEachFeature2(feature, layer) {

	layer.on({
		mouseover: mouseOverLayer2,
		mouseout: mouseOutLayer2,
		click: mouseClickLayer2
	});
	
	setLayerStyle2(layer, "default");
}

function mouseOverLayer2(e) {

	setLayerStyle2(e.target, "over");
}

function mouseOutLayer2(e) {

	var infos=getInfos(e);

	if(infos.style.active) {
		setLayerStyle2(e.target, "select");
	} else {
		setLayerStyle2(e.target, "out");
	}
}

function mouseClickLayer2(e) {

	map.removeLayer(firstLayer);
	map.removeLayer(secondLayer);
}


function setLayerStyle2(layer, type, alpha) {

	var style;
	
	switch(type) {
		case "default":
			style = {
				fillOpacity: 0.5,
				weight: 1
			};
			break;
		case "over":
			style={
				weight: 3,
				over:true
			};
			break;
		case "out":
			style={
				weight: 1,
				over:false
			};
			break;
		case "unselect":
			style={
				weight: 1,
				active:false
			};
			break;
		case "select":
			style={
				weight: 2,
				active:true
			};
			break;
	}
	
	layer.setStyle(style);
}