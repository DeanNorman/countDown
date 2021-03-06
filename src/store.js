
/*
 * TODO This requires: restler
 */

var util = require('util');
var restclient = require('restler');

var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'DeanNorman';
var apiKey = '855d7743d14d7ad72f1c3d11e70451f10b882bc9';


restclient.get(fxml_url + 'MetarEx', {
   username: username,
   password: apiKey,
   query: { airport: 'KAUS', howMany: 1 }
}).on('success', function (result, response) {
   // util.puts(util.inspect(result, true, null));
   var entry = result.MetarExResult.metar[0];
   util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
   console.log(response);
});

restclient.get(fxml_url + 'Enroute', {
   username: username,
   password: apiKey,
   query: { airport: 'KIAH', howMany: 10, filter: '', offset: 0 }
}).on('success', function (result, response) {
   util.puts('Aircraft en route to KIAH:');
   //util.puts(util.inspect(result, true, null));
   var flights = result.EnrouteResult.enroute;
   console.log(flights);
   for (i in flights) {
      var flight = flights[i];
      //util.puts(util.inspect(flight));
      util.puts(flight.ident + ' (' + flight.aircrafttype + ')\t' +
         flight.originName + ' (' + flight.origin + ')');
   }
});