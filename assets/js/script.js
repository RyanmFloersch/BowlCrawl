
// local storage stuff

// localStorage.setItem("location", "myLocation");

// var location = localStorage.getItem("location");
// var myLocation = localStorage.getItem("myLocation");

    var map = L.mapquest.map('map', {
        center: [40.7749, -74.4194],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

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



    var searchBar = ps.on('change', (e) => {
        userSearchResult = e;
        console.log(e);
        console.log(e.result);
        map.setView(e.result.latlng);
        console.log(searchBar.getVal());
        
            /*  Direction alyer */
    var directions = L.mapquest.directions();

// const openWeatherKey = "";

// // arry to store user search history
// var searchHistory
// const recentSearchDropdown = document.querySelector("#place-search-input");

// // get the recent seareches out of local storage 
// var recentSearchHistory = getRecentSearchHistory();

