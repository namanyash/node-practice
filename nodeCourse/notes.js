console.log('startig notes.js');

var addNote = (a,b)=>{
    console.log(a,b);
    };
var getNote = ()=>{
    console.log('listing allnotes');
    };
var readNote = (a)=>{
    console.log('reading ',a);
    };
var removeNote = (a)=>{
    console.log('removing', a);
    };
module.exports = {
    addNote,
    getNote,
    removeNote,
    readNote
};