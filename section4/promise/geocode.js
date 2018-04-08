const request = require('request');
var g = (a,callback) =>{
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(a)}`
    , json: true
}, (error, response, body)=>{
    if(error){
        console.log(`1 ${error}` );
    }
    else if(body.results.length==0){
        console.log('Error when getting data from google');
    }
    else{
        var Latitude = body.results[0].geometry.location.lat;
        var Longitude= body.results[0].geometry.location.lng;
        var add = body.results[0].formatted_address;
        var final = {
            latitude: Latitude,
            longitude: Longitude,
            address: add
        }
        callback(final);
}});};

module.exports = {g,request};