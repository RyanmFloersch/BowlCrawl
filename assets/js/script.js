


window.onload = function () {
    L.mapquest.key = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';

    var map = L.mapquest.map('map', {
        center: [40.7749, -74.4194],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });


    map.addControl(L.mapquest.control());


    var ps = placeSearch({
        key: 'UB42wa7TNT1FiK1W50glEPa36ZoyVOqc',
        container: document.querySelector('#place-search-input'),
        limit: 6
    });


    var searchBar = ps.on('change', (e) => {
        userSearchResult = e;
        console.log(e);
        console.log(e.result);
        map.setView(e.result.latlng);
        console.log(searchBar.getVal());
        
            /*  Direction alyer */
    var directions = L.mapquest.directions();

    directions.route({
        start: searchBar.getVal(),
        end: 'One Liberty Plaza, New York, NY 10006',
 
    }, directionsCallback);

    function directionsCallback(error, response) {
        
        var directionsLayer = L.mapquest.directionsLayer({
            directionsResponse: response
        }).addTo(map);


        return map;
    }

    });


    L.marker([ 40.70289, -74.01394]).addTo(map);
    /*
    lat: 40.74845
    lng: -73.98474
    */





    // var btn = document.querySelector('#showResult');

    // btn.addEventListener('click', function (){
    //     console.log(searchBar);


    // });


}

