
  var cadevData = [
      {location: new google.maps.LatLng(17.4254196,78.3349578), weight: 12},
      {location: new google.maps.LatLng(50.0278166,14.4930487), weight: 11},
      {location: new google.maps.LatLng(37.3857826,-121.9753225), weight: 10},
      {location: new google.maps.LatLng(33.0789714,-96.8110784), weight: 9},
      {location: new google.maps.LatLng(40.5244307,-105.0244388), weight: 8},
      {location: new google.maps.LatLng(42.2953163,-71.488151), weight: 7},
      {location: new google.maps.LatLng(12.9591505,77.6459774), weight: 6},
      {location: new google.maps.LatLng(40.020194,-105.2512472), weight: 5},
      {location: new google.maps.LatLng(39.7513315,-105.0033265), weight: 3},
      {location: new google.maps.LatLng(49.284005,-123.1213143), weight: 4},
      {location: new google.maps.LatLng(40.4534992,-80.1909099), weight: 3},
      {location: new google.maps.LatLng(41.808818,-88.1174986), weight: 2},
      {location: new google.maps.LatLng(32.2610569,34.4118136), weight: 1},
    ];

    var styles = [
      {
        stylers: [
          { hue: "#f2fffe" },
          { saturation: -10 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 90 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "water",
        stylers: [{ color: "#f2f2f2"}]
      }
    ];



    var island = new google.maps.LatLng(37.7450122,-25.6959568);

    map = new google.maps.Map(document.getElementById('map'), {
      center: island,
      zoom: 2,
          });

    map.setOptions({styles: styles});

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: cadevData,
      radius: 20,
    });
    heatmap.setMap(map);

  function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
  }


$(document).ready(function () {
    $('.slideout-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();

    	// toggle open class
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);
    	}
    });
});
