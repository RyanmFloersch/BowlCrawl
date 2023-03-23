
var map;

//Script for MapQuests display
window.onload = function () {
  L.mapquest.key = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';

  map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());

}


//Stuff for searches
var key = 'KYQuoQ65QQAYiVPGm5iTRCw0BEBjR2Hg';
var searchBtn = document.querySelector('.searchBtn');
var searchText = document.querySelector('.place-search-input')
place1 = document.getElementById('#placeAddress');

//*** Takes the text inputted, and processes the address on click */
searchBtn.addEventListener('click', function (event) {

  event.preventDefault();

  var addressVar = searchText.value;

  // console.log(addressVar);
  //Sources the Search Radius from Mapquest's API
  var searchRadiusURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + addressVar + "&radius=100&maxMatches=4&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|793301&outFormat=json&key=" + key;


  //Begins pulling and sourcing the data
  function getRadiusData() {

    $.get(searchRadiusURL).then(function (data) {
      //Inserts data for the first returned location
      $('#placeName1').text(data.searchResults[0].name);
      $('#address1').text('Address: ' + data.searchResults[0].fields.address + ', ' + data.searchResults[0].fields.city + ', ' + data.searchResults[0].fields.state);
      $('#distance1').text('Distance: ' + data.searchResults[0].distance + ' miles');
      $('#phone1').text('Phone: ' + data.searchResults[0].fields.phone);
      //Inserts data for the second returned location
      $('#placeName2').text(data.searchResults[1].name);
      $('#address2').text('Address: ' + data.searchResults[1].fields.address + ', ' + data.searchResults[1].fields.city + ', ' + data.searchResults[1].fields.state);
      $('#distance2').text('Distance: ' + data.searchResults[1].distance + ' miles');
      $('#phone2').text('Phone: ' + data.searchResults[1].fields.phone);
      //Inserts data for the third returned location
      $('#placeName3').text(data.searchResults[2].name);
      $('#address3').text('Address: ' + data.searchResults[2].fields.address + ', ' + data.searchResults[2].fields.city + ', ' + data.searchResults[2].fields.state);
      $('#distance3').text('Distance: ' + data.searchResults[2].distance + ' miles');
      $('#phone3').text('Phone: ' + data.searchResults[2].fields.phone);
      //Inserts data for the fourth returned location
      $('#placeName4').text(data.searchResults[3].name);
      $('#address4').text('Address: ' + data.searchResults[3].fields.address + ', ' + data.searchResults[3].fields.city + ', ' + data.searchResults[3].fields.state);
      $('#distance4').text('Distance: ' + data.searchResults[3].distance + ' miles');
      $('#phone4').text('Phone: ' + data.searchResults[3].fields.phone);
    });

  }



  getRadiusData();


  var options = document.querySelectorAll(".option");

  var markers = [];

  for (var choice of options) {
    choice.addEventListener('click', function (e) {
      var destAddress = this.children[1].innerText;

      e.stopPropagation();
      e.preventDefault();


        var directions = L.mapquest.directions();

        directions.route({
          start: addressVar,
          end: destAddress,
        }, directionsCallback);

        console.log(directions.route);

        function directionsCallback(error, response) {

        
          var directionsLayer = L.mapquest.directionsLayer({
            directionsResponse: response
            
          }).addTo(map);

          return map;
        }

      var routeUrl = "https://www.mapquestapi.com/directions/v2/route?key="+ key +"&from="+ addressVar+"&to="+destAddress;
      $.get(routeUrl).then(function( info) {
          console.log(info); 
          console.log(info.route.formattedTime);
          var time = (info.route.formattedTime);
          $('#time').text( time);


        });
      

    });
  }


  //btn event listener end
});



