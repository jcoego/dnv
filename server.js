const express = require('express')
const app = express()
const port = 8000
const data = require('./data/data.json');
const _ = require('lodash');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  try{
    console.log(req.query['path'])
    let path = req.query['path'] ? req.query['path'] : '/';
    path = path.replace('/','')
    path = path.replace(/[/]/g,'.');

    let dataRes = path ?  _.get(data, path) : data;
    console.log('dataRes',dataRes);
    //let dataRes =  _.get(data,'myfiles.procesos de logistica');
    return res.status(200).json(dataRes);
  }catch(err){
    //TODO: function to proccess error in a centralized way (send them to log...etc.)
    res.status(500).json({message: 'Unexpected error'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})