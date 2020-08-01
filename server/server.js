const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/data', routes);

app.listen(3000, () => {
    console.log('Server Runing on port: 3000');
});