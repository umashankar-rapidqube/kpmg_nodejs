let multichain = require("multichain-node")({
    port: 4324,
    host: '10.11.3.250',
    user: "multichainrpc",
    pass: "BmS65hbvUh2rpfsdSQRe5T8LzkwYTsrSv4bZ9wXP6qVh"
});
module.exports =   {readMultichain:readMultichain};

function getMultichainInfo(){
    multichain.getInfo().then((result)=>{
        
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}

function hexToString (hex) {
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
}

function readMultichain(){

    return new Promise((resolve, reject)=>{
    multichain.listStreamKeyItems({
        stream: "kp-rq",
        "key": "mykey",
        //verbose: true,
        count:50,
        start: 0
    }).then((res)=>{
        var returnval = hexToString(res[res.length-1].data);
        return resolve(returnval)
    }).catch((err)=>{
        return reject(err)
    })

});

}




