    console.log('a')
    var getUser = (id, callback) =>{
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(()=>{
        callback(user);
    },2000);
    };
    console.log('b')
    getUser(31,(user)=>{
        console.log(user);
    });
    console.log('c')