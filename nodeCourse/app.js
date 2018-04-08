console.log('Starting app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs= require('yargs');
const argv = yargs.argv;
var command = process.argv[2];
console.log(notes);
if(command == 'add'){
    notes.addNote(argv.title,argv.body);
}
else if(command == 'list')
{
    notes.getNote();
}
else if(command == 'read')
{
    notes.readNote(argv.title);
}
else if(command == 'remove')
{
    notes.removeNote(argv.title);
}
else{
    console.log('Wrong Input');
}