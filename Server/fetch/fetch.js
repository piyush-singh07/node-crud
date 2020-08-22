//import the mongodb module
//here the require function is used to import the module
let mongoDb= require("mongodb");

//as mongodb follows a client and server architecture then we must create a client 
let client= mongoDb.MongoClient;


//create the fetch module
let fetch= require("express").Router().get("/",(req,res)=>{
        client.connect("mongodb://localhost:27017/online",(err,db)=>{
            if(err)
            throw err;
            else
            {
                db.collection("employees").find().toArray((err,array)=>{
                    if(err)
                    throw err;
                    else{
                        res.send(array)
                    }
                })
            }
        })
});

module.exports=fetch;



