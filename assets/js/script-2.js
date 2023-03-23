// function mapRequest (startingLoc, endingLoc) {

    var baseURL = 'https://www.mapquestapi.com/directions/v2/route';
    var API = '?key=HrTIOFIPw9QoFsFdlYJGkeevri1CLEuw';
    var startingLoc = '';
    var endingLoc = '';
    var fromLine = '&from=' + startingLoc;
    var toLine = '&to=' + endingLoc;
// }

function mapRequest (startingLoc, endingLoc) {
    fetch(baseURL).then(function(resObj) {
        return resObj.json();
    }
}