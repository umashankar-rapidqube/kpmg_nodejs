let multichain = require("multichain-node")({
    port: 4324,
    host: '192.168.137.27',
    user: "multichainrpc",
    pass: "BmS65hbvUh2rpfsdSQRe5T8LzkwYTsrSv4bZ9wXP6qVh"
});

function writeMultichain(){

    multichain.getInfo()
    multichain.publish(
    {
    stream: "kp-rq",
    key: "mykey",
    data: "736f6d65206f746865722064617461"
    }, (err, res)=>{
        console.log("error",err)
        console.log(res)
    });
}

writeMultichain();



