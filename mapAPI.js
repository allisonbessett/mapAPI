

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  var google;
  function initMap() {
     console.log("working");
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
//    var mapOptions = { 
//      center: new google.maps.LatLng(65.5848, 22.1567),
//      mapTypeId: google.maps.mapTypeId.ROADMAP, 
//      zoom: 10
//    };
//    var map;
//    var googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
//  }
//  
//  function loadScript() {
//    var script = document.createElement('script');
//    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&ccallback=init';
//    document.body.appendChild(script);
//  }
//  
//  window.onload = loadScript;
    
    
    
//    var googleMap = new google.maps.Map($("#google-map")[0]);
//    googleMap.setCenter({lat: 65.5848, lng: 22.1567});
//    googleMap.setZoom(10);
//
//    var marker = new google.maps.Marker({
//      position: {lat: 65.5848, lng: 22.1567}
//    });
//    marker.setMap(googleMap);
//
//    var information = new google.maps.information({
//      content: "Lulea"
//    });
//    marker.addListener("click", function () {
//      information.open(googleMap, marker);
//    });
//  });
});