const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.use(express.static(path.join(__dirname, './')));

http.listen(process.env.PORT || 3000, () => console.log('✌️  on 3000'));
