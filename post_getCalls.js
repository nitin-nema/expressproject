// const { response } = require("express");
const express = require("express");
var app = express();
// var bodyParser = require("body-parser");

const port = 8080;

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.urlencoded({ extended: false }));

//default path --didplay form
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
    //    console.log("dir", __dirname); // root directory 
});

//get the form fields
// app.get('/get_form', function (req, res) {
//     response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     // console.log("simple test....")
//     console.log({ response });
//     res.end(JSON.stringify(response));
// })

//post the fields
app.post('/post_form', function (req,res) {
     response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log({ response });
    res.end(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Server is running on this  ${port} ......`);
})