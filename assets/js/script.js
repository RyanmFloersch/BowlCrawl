
//Script for MapQuests display
window.onload = function() {
  L.mapquest.key = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';

  var map = L.mapquest.map('map', {
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

  if(localStorage.getItem('location') == null) {
    localStorage.setItem('location', '[]');
  }

  var addressOld = JSON.parse(localStorage.getItem('location'));
  addressOld.push(addressVar);

  localStorage.setItem('location', JSON.stringify(addressOld));

// autocomplete function //

  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
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



  
  
  

  // fetch(searchRadiusURL)
  //     .then((response) => {
  //         return response.json();
  //     })
  //     .then((data) => {
  //         var results = data;
  //         console.log(results);
  //         // place1.innerText(data.searchResults[2].name)
  //     })
      // document.getElementById(#place1).innerText(results.searchResults[2].name)
})


// .then((data) => searchResults = data);




// local storage stuff

// localStorage.setItem("location", "myLocation");

// var location = localStorage.getItem("location");
// var myLocation = localStorage.getItem("myLocation");

// hide first page and show second page after entering location

// var button1 = document.querySelector('#button1');

// button1.onsubmit = function() {
//     document.querySelectorAll('.hide').style.display = "none";
//     document.querySelectorAll('.page2').style.display = "initial";
// };


// placeSearch({
//     key: 'key',
//     container: document.querySelector('#place-search-input'),
//     limit: 6

// });


//*** Search Radius takes a single line address (Denver, CO), make sure the function gathers 6 matches
//*** The 6 matches should output to the 6 boxes, ordered from closest to farthest away(seems to already do this in the object)
//*** In each box it should list the following: Name of the location, local Temp/possibly wind/rain?, distance away in miles 
//*** When a user clicks one of the 6 boxes, it should take the selected location and create a route on the map between your starting search and it
//** Keep in mind, the directions takes coordinates rather than a single line address


//API Key for OpenWeatherMap 

// const openWeatherKey = "";

// // arry to store user search history
// var searchHistory
// const recentSearchDropdown = document.querySelector("#place-search-input");

// // get the recent seareches out of local storage 
// var recentSearchHistory = getRecentSearchHistory();
