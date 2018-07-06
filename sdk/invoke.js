

var multichain = require("multichain-node")({
    port: 4324,
    host: '10.11.3.250',
    user: "multichainrpc",
    pass: "BmS65hbvUh2rpfsdSQRe5T8LzkwYTsrSv4bZ9wXP6qVh"
});

module.exports = {writeMultichain:writeMultichain};

function writeMultichain(mydata){

    return new Promise((resolve, reject)=>{
        let bufStr = Buffer.from(mydata, 'utf8');
        hexstring = bufStr.toString('hex');

        multichain.publish(
        {
        stream: "kp-rq",
        key: "mykey",
        data: hexstring
        }).then((result)=>{
            return resolve(result)
        }).catch((error)=>{
            return reject(error)
        })
    })
    
}







