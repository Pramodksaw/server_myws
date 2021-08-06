const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const refVariable = mongodb.MongoClient;

app.post("/regstration",(req,res)=>{
    //console.log(req.body)
    refVariable.connect(`mongodb+srv://admin:admin@pramodsahu.a7rt5.mongodb.net/rjs-6pm?retryWrites=true&w=majority`,
                      (err,connection)=>{
             if(err)throw err;
             else{
                const db =  connection.db("rjs-6pm");
                db.collection("user_details").insertOne(req.body,(err,result)=>{
                    if(err)throw err;
                    else{
                        console.log(result);
                    }
                })
             }   
      })
});

let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server started on port no. 8080")
})