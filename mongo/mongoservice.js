var mongoose = require('mongoose');

mongoose.connect('mongodb://nodeadmin:nodeadmin123@ds125181.mlab.com:25181/streamline');


const User = mongoose.model('userinfo', 
{ 
    firstname : String,
    secondname : String,
    phone : String
 });

//const myuser = new User({ firstname: 'another', secondname : "user", phone:"999999999" });

//myuser.save().then(() => console.log('user saved'));
function searchUser(name){
    return new Promise((resolve, reject)=>{
        
        User.find({firstname:name})
        .then((result)=>{
            return resolve(result)
        })
        .catch((error)=>{
            return reject(error)
        })

    });
};

module.exports = {
    searchUser : searchUser
}

