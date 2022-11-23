const express = require('express');

const app = express();

let port = 8080;

//default path
app.get('/', (req, res) => {
    res.send('Hello has been updated second time....');
});

//home path
app.get('/home', (req, res) => {
    res.send('Hello ....');
});

//path of mine -- abcd, abXXcd, ab435cd
// regex for defining path as well
app.get('/ab*cd', function (req,res) {
      res.send('Hello ....');
})

app.delete('endpoint', (req,res) => {
    list.filter(item => {
       item.id !== id 
    })
    res.send("this item is deleted")
})

app.listen(port, () => {
    console.log(`Server is running on this port  ${port} ......`)
})
