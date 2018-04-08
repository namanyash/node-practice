
const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch thge data',
        string: true
    }
})
.help()
.alias('help','h')
.argv;
var geoURL= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`;
axios.get(geoURL).then((response)=>{
    if(response.data.status !=='OK')
    throw new Error('Unable to get data from google')
console.log(response.data)
}).catch((e)=>{
    if(e.code==='ENOTFOUND')
    console.log('unable to connect to api');
    else
    console.log(e.message)
});
