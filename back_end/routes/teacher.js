const express = require("express");
const route = express.Router();
const mongodb = require("mongodb").MongoClient;
const obj = require("mongodb").ObjectId;

//login sub route
route.post("/login", (req, res) => {
  //connecting db and selecting data from collection;
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName.collection("teacher").findOne(
        {
          userName: String(req.body.userName),
          password: String(req.body.password),
        },
        (err, info) => {
          if (err) {
            console.log("failed to fetch data ", err);
            res.json({ message: "failed to fetch data", result: info });
          } else {
            console.log(info);
            res.json({ message: "having some data", result: info });
          }
        }
      );
    } //else
  });
  //roue
});

 
//add mark;
 
route.post("/addMark", (req, res) => {
    mongodb.connect("mongodb://localhost:27017", (err, con) => {
      if (err) console.log("failed to connect db");
      else {
        var dbName = con.db("pro_teacher");
        dbName.collection("mark").insertOne(req.body, (err, info) => {
          if (err) {
            console.log("failed to insert data ", err);
            res.json({ message: "failed to add course", result: info });
          } else {
            console.log(info);
            res.json({ message: "having some data", result: info });
          }
        });
      } //else
    }); //momgo
    //route
  });
  

  route.post("/getMark", (req, res) => {
    console.log(req.body);
     mongodb.connect("mongodb://localhost:27017", (err, con) => {
      if (err) console.log("failed to connect db");
      else {
        var dbName = con.db("pro_teacher");
        dbName
          .collection("mark")
          .findOne({ courseName: String(req.body.course),subject:String(req.body.subject),batch:String(req.body.batch) },(err, info) => {
            if (err) {
              console.log("failed to fetch data");
              res.json({ message: "failed to fetch data", result: false });
            } else {
              res.json({ message: "success", result: info });
            }
          });
      } //else
    });
    //route
  });


  route.post("/deleteMark", (req, res) => {
    mongodb.connect("mongodb://localhost:27017", (err, con) => {
      if (err) console.log("failed to connect db");
      else {
        var dbName = con.db("pro_teacher");
        dbName
          .collection("mark")
          .deleteOne({ _id: obj(req.body.id) }, (err, info) => {
            if (err) {
              console.log("failed to fetch data");
              res.json({ message: "failed to fetch data", result: false });
            } else {
              res.json({ message: "success", result: info });
            }
          });
      }
    });
  }); //rote
  
  
module.exports=route;
