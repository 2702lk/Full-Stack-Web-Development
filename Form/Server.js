const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.send(`
        <h2>Form Submitted Successfully</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});