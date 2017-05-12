

/*jslint browser: true*/
/*global $, jQuery, alert*/




$(document).ready(function () {
  var latitude = 65.5848;
  var longitude = 22.1567; 
  var zm = 4;
  
  function initMap() {
    var lulea = {lat: latitude,  lng: longitude};
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: zm,
      center: lulea
    });
    var marker = new google.maps.Marker({
      position: lulea,
      map: map
    });
}
  initMap();
  $('#tSubmit').click(function (event) { //submit  
    console.log("is submit working?");  
    var latitude = $('#latitude').val();
    var longitude = $('#longitude').val(); 
    var zm = $('#zoom').val();
    console.log(latitude + " " + longitude);
    initMap();
    event.preventDefault; 
  });
});

