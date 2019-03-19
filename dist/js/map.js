function initMap(){
  var coord = { lat: 14.6760, lng: 121.0437};
  var myOptions = {zoom: 13, center: coord};
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({position: coord, map: map});
}