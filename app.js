var express = require("express");
var app = express();

app.listen(4000, () => console.log('running on 4000'));
const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.json({ message: 'message from with circle ci and digital ocean' });
});

app.get('/message-test', function (req, res) {
    res.json({ message: 'message-test' });
});
