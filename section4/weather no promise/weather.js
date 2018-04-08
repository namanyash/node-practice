const request = require('request');
var g = (a,callback) =>{
    lat = a.latitude;
    lon = a.longitude;
request({
    url:`https://api.darksky.net/forecast/5b5d3199517ac6d7c17242899f56bd40/${lat},${lat}`
    , json: true
}, (error, response, body)=>{
    if(error){
        console.log(`1 ${error}` );
    }
    else if(response.statusCode === 400){
        console.log(`Unable to fetch weather`);

    }
    else{
        
        callback(body);
}});};

module.exports = {g,request};