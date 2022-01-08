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
      dbName.collection("user").findOne(
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

//add hod
const multer = require("multer");
const path = require("path");

// storage engine
var url_path;
const storage = multer.diskStorage({
  destination: "./uploads/img",
  filename: (req, file, cb) => {
    url_path = `${file.originalname}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    return cb(
      null,
      `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
});
route.post("/addHod", upload.single("img"), (req, res) => {
  var jsonData = {};
  jsonData = JSON.parse(req.body.data);
  jsonData.cpassword = "valid";
  jsonData.imgUrl = url_path;
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName.collection("hod").insertOne(jsonData, (err, info) => {
        if (err) {
          console.log("failed to insert");
          res.json({ message: "failed to insert", result: false });
        } else {
          res.json({ message: "success", result: info });
        }
      });
    } //else
  });
  //route
});

route.post("/getHod", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName
        .collection("hod")
        .find({ name: new RegExp(req.body.name, "i") })
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

//delete hod
route.post("/deleteHod", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName
        .collection("hod")
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

//add teacher

// storage engine
var url_path;
const storage2 = multer.diskStorage({
  destination: "./uploads/teacher",
  filename: (req, file, cb) => {
    url_path = `${file.originalname}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    return cb(
      null,
      `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload2 = multer({
  storage: storage2,
});
route.post("/addteacher", upload2.single("img"), (req, res) => {
  var jsonData = {};
  jsonData = JSON.parse(req.body.data);
  jsonData.cpassword = "valid";
  jsonData.imgUrl = url_path;
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName.collection("teacher").insertOne(jsonData, (err, info) => {
        if (err) {
          console.log("failed to insert");
          res.json({ message: "failed to insert", result: false });
        } else {
          console.log(info);
          res.json({ message: "success", result: info });
        }
      });
    } //else
  });
  //route
});

//get teacher record

route.post("/getTeacher", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName
        .collection("teacher")
        .find({ name: new RegExp(req.body.name, "i") })
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



//delete teacher
route.post("/deleteTeacher", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, con) => {
    if (err) console.log("failed to connect db");
    else {
      var dbName = con.db("pro_admin");
      dbName
        .collection("teacher")
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



module.exports = route;
