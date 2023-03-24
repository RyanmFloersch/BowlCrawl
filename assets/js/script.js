
var map;
var directionsLayer;
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
var searchText = document.querySelector('#myInput');
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

  var addressVar = searchText.value;

  if(localStorage.getItem('location') == null) {
    localStorage.setItem('location', '[]');
  }

  var addressOld = JSON.parse(localStorage.getItem('location'));
  addressOld.push(addressVar);

  localStorage.setItem('location', JSON.stringify(addressOld));

// *autocomplete function* //

  function autocomplete(inp, arr) {
    
    var currentFocus;
    /*execute a function when someone writes in the text field*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close all open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a div element to contain the values*/
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the div as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a div element for each matching element:*/
            b = document.createElement("div");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (div element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

autocomplete(searchText, addressOld);

  //Sources the Search Radius from Mapquest's API
  var searchRadiusURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + addressVar + "&radius=100&maxMatches=4&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|793301&outFormat=json&key=" + key;
  


  //Begins pulling and sourcing the data
  function getRadiusData() {
      $.get(searchRadiusURL).then(function (data) {
          console.log(data);
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
      })
  }
  getRadiusData()
})

  var options = document.querySelectorAll(".option");


  for (var choice of options) {
    choice.addEventListener('click', function (e) {
      var searchBartext = document.querySelector('.place-search-input')
      var searchBarAddress = searchText.value; 
      var destAddress = this.children[1].innerText;

      e.stopPropagation();
      e.preventDefault();


        var directions = L.mapquest.directions();
        

        directions.route({
          start: searchBarAddress,
          end: destAddress,
        }, directionsCallback);

        // console.log(directions);

        function directionsCallback(error, response) {

          if(map.hasLayer(directionsLayer)){
            map.removeLayer(directionsLayer);
          }else{
            console.log('Layer not found');
          }

          directionsLayer = L.mapquest.directionsLayer({
            directionsResponse: response
            
          }).addTo(map);
        


          return map;
        }

      var routeUrl = "https://www.mapquestapi.com/directions/v2/route?key="+ key +"&from="+ searchBarAddress+"&to="+destAddress;
      $.get(routeUrl).then(function( info) {
          // console.log(info); 
          // console.log(info.route.formattedTime);
          var time = (info.route.formattedTime);
          $('#time').text( time);
          console.log(time)

        });
      

    });
  }