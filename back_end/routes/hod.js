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
      dbName.collection("hod").findOne(
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

//addcourse

route.post("/addCourse", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_hod");
      dbName.collection("course").insertOne(req.body, (err, info) => {
        if (err) {
          console.log("failed to fetch data ", err);
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

//get course

route.post("/getCourse", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_hod");
      dbName
        .collection("course")
        .find({ department: req.body.department })
        .toArray((err, info) => {
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

//delete course

route.post("/deleteCourse", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_hod");
      dbName
        .collection("course")
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


//get teacher by department

//get teacher record

route.post("/getTeacher", (req, res) => {
  console.log(req.body);
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName
        .collection("teacher")
        .find({ department:  req.body.department })
        .toArray((err, info) => {
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

module.exports = route;
