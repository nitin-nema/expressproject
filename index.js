const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// setup the view  engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now + ".jpg") 
    }
});

const maxSize = 10 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true)
        }

        cb("Error : file only support the following" + filetypes);

    }
}).single("mypic");

app.get("/", function (req, res) {
    res.render("signup"); //send,sendfile,render
})

app.post("/uploadPic",function(req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully uploade image")
        }
    })
})

app.listen(8080, () => {
    console.log("Server Runnning...");
})