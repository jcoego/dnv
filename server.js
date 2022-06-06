const express = require('express')
const app = express()
const port = 8000
const data = require('./data/data.json');
const _ = require('lodash');

app.get('/', (req, res) => {
  console.log(req.query['path'])
  let path = req.query['path'] ? req.query['path'] : '/';
  path = path.replace('/','')
  path = path.replace(/[/]/g,'.');

  let dataRes = path ?  _.get(data, path) : data;
  //let dataRes =  _.get(data,'myfiles.procesos de logistica');
  res.status(200).json(dataRes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})