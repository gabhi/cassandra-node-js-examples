
var cassandra = require('cassandra-driver');
var client = new cassandra.Client( { contactPoints : [ '50.112.125.156' ] } );
client.connect(function(err, result) {
    if(err) console.log("Error: " + err);
    else 
    console.log("Connected " + result);


});