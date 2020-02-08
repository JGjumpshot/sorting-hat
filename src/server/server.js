const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 8000;
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${JSON.stringify(req.body)}`,
    )
});

app.get('/api.jacksongunther.com/pandas', (req, res) => {
    res.send(`You are a wise panda!`);
});

app.get('/api/sorting-hat', (req, res) => {
    
    var houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    // console.log(houses);
    var sorted = Math.floor(Math.random() * houses.length)
    // console.log(houses[sorted]);
    if (houses[sorted] === "Gryffindor") {
        res.sendFile(
            'index.html',
            {root: __dirname}
        )
    }
    else {
        res.send(
            `Welcome to ${houses[sorted]}`
        )
    }
    
    // res.sendFile(
    //     'index.html',
    //     {root: __dirname}
    // )
});

// app.get('api/myfile', (req, res) => {
//     console.log(__dirname);
//     res.send("Hello Jackson")
//     // res.sendFile(path.join(__dirname + '/index.html'));
// })

app.listen(port, () => console.log(`Listening on port ${port}`));