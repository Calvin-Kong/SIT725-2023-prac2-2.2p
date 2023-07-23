let express = require('express');
let app = express();
let port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.json('index.html');
});

app.listen(port, () => {
    console.log("Server running, listenting to port: " + port);
});