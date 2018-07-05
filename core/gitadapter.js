
var request = require('request')

module.exports = {
    callGitUser: callGitUser
};
var xyz = {
    headers: {'user-agent': 'node.js',
            'accept':'application/json'}
  }

  function sample(){
        console.log("welcome")
  }

function callGitUser(){
    return new Promise((resolve, reject)=>{
        
       sample();
        request('https://api.github.com/users',xyz,  (error, response, body)=> {
            console.log(error);
            console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(body) 
                resolve({data:body});
            }
            else{
                reject({code:"error"})
            }
        });

    

    }).catch((error)=>{
        console.log(error)
    })
}

