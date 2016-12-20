const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


http.listen(process.env.PORT || 3000, () => console.log('✌️  on 3000'));