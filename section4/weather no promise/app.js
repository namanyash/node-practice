
const yargs = require('yargs');
const geocode = require('./geocode.js')
const weather = require('./weather.js')
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
geocode.g(argv.a,(result)=>{
    var data = result;
    console.log(data.address);
    weather.g(data, (body)=>{
        console.log(`Temperature: ${body.currently.temperature}`);
        console.log(`Apparent Temperature: ${body.currently.apparentTemperature}`);
    })
});
