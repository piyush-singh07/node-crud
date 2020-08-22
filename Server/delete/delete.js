let mongodb = require("mongodb");

let client = mongodb.MongoClient;

let remove = require("express").Router().delete("/",(req,res)=>{
        client.connect("mongodb://localhost:27017/online",(err,db)=>{
                if(err)
                throw err;
                else
                {
                    db.collection("employees").deleteOne({"firstName":req.body.firstName},(err,result)=>{
                        if(err)
                        throw err;
                        else{
                            res.send({"delete":"success"});
                        }
                    })
                }
        })

});


module.exports= remove;