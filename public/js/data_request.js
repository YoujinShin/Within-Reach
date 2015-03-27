function httpGet(theUrl) {

    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;

  // return JSON.parse(xhr.responseText);
  // return JSON.parse(xhr.responseText);
};

// var url = 'http://senseable3.mit.edu/within-reach/testShape1.geojson';
// var method = 'GET';
// var xhr = createCORSRequest(method, url);

// xhr.onload = function() {
//   // Success code goes here.
// };

// xhr.onerror = function() {
//   // Error code goes here.
// };

// xhr.send();