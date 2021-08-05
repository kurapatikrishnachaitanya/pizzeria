const mongoose=require('mongoose');
const express=require('express');
const mongoclient = require("mongodb").MongoClient;
const app=express();
const cors=require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


mongoose.connect("mongodb://localhost:27017/pizzeria", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });  


app.get("/custompizza", (req, res) => {
    const url = "mongodb://localhost:27017";
    mongoclient.connect(url, (err, client) => {
      if (err) throw err;
      const db = client.db("pizzeria");
      const collection = db.collection("ingridents");
      collection.find().toArray((err,ingridents) => {
        res.json(ingridents);
        client.close();
      });
    });
  });



  
  app.get("/pizza", (req, res) => {
    const url = "mongodb://localhost:27017";
    mongoclient.connect(url, (err, client) => {
      if (err) throw err;
      const db = client.db("pizzeria");
      const collection = db.collection("pizza");
      collection.find().toArray((err,pizza) => {
        res.json(pizza);
        client.close();
      });
    });
  });
app.listen(4000,()=>console.log("server started"))