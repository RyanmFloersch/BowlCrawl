
// local storage stuff

localStorage.setItem("location", "myLocation");

var location = localStorage.getItem("location");
var myLocation = localStorage.getItem("myLocation");

// hide first page and show second page after entering location

var button1 = document.querySelector('#button1');

button1.onsubmit = function() {
    document.querySelectorAll('.hide').style.display = "none";
    document.querySelectorAll('.page2').style.display = "initial";
};


placeSearch({
    key: 'key',
    container: document.querySelector('#place-search-input'),
    limit: 6

});

//*** Search Radius takes a single line address (Denver, CO), make sure the function gathers 6 matches
//*** The 6 matches should output to the 6 boxes, ordered from closest to farthest away(seems to already do this in the object)
//*** In each box it should list the following: Name of the location, local Temp/possibly wind/rain?, distance away in miles 
//*** When a user clicks one of the 6 boxes, it should take the selected location and create a route on the map between your starting search and it
//** Keep in mind, the directions takes coordinates rather than a single line address


//API Key for OpenWeatherMap 

const openWeatherKey = "";

// arry to store user search history
var searchHistory
const recentSearchDropdown = document.querySelector("#place-search-input");

// get the recent seareches out of local storage 
var recentSearchHistory = getRecentSearchHistory();
