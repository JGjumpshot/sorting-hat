const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello from Express' })
})

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.json(
        `I received your POST request. This is what you sent me: ${req.body}`,
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`));