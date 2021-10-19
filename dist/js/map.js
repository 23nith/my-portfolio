function initMap(){
  var coord = { lat: 14.6691, lng: 121.0343};
  var myOptions = {zoom: 18, center: coord, mapTypeId: google.maps.MapTypeId.HYBRID};
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({position: coord, map: map});
}