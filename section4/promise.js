var somePromise =  new Promise((resolve, reject)=>{

    reject('unable yo get data');
});
somePromise.then((message)=>{
console.log(message)
},(error)=>{
console.log(error)
})