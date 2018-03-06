const express = require('express');
const app = express();
const appData = require('./db.json')
app.get("/shuju",function(req,res){
  res.json({
    data:appData
  })
})
app.listen(3010)