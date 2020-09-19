const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, e => {
  if(e) throw e;
  console.log('Running :o');
});