const express = require('express');
const request = require('request');
const  app = express();
app.use('/', function(req, res) {
  const url = 'https://www.baidu.com/' + req.url;
  req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000, () => {
  console.log('server listen at 127.0.0.1:3000')
});

