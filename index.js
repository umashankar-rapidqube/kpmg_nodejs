var express = require('express');
var bodyParser = require('body-parser');
var gitAdapter = require('./core/gitadapter');
var WriteStream = require('./sdk/invoke');
var QueryStream = require('./sdk/query');

var PORT = 5000;
var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get('/getWorld',(req, res)=>{
    res.json({
        data: "hello world"
    })
});

app.get('/callgit',(req, res)=>{
    var result={};
    gitAdapter.callGitUser().then((result)=>{
        res.json(result);
    }),((error)=>{
        res.json(error);
    });

    res.json(
        result);
    
})

app.post('/welcome',(req, res)=>{
    var myvar = req.body;
    //console.log("response object", JSON.stringify(req))
    console.log("response body", JSON.stringify(myvar))
    var name = myvar["name"];
    res.json({
        data:"welcome "+name
    })
});

app.post('/writestream',(req,res)=>{
    var mydata = req.body;
    
    WriteStream.writeMultichain(JSON.stringify(mydata))
    .then((result)=>{
        res.json({
            'data':result}
        );
    })
    .catch((error)=>{
        res.json({
            'error':error}
        );
    });
})

app.get('/readFromStream', (req, res)=>{
    QueryStream.readMultichain()
    .then((result)=>{
        res.json({
            'data':result}
        );
    })
    .catch((error)=>{
        res.json({
            'error':error}
        );
    });
})

app.listen(PORT);

