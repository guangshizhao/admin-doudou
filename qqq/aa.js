const express = require('express')
const http = express()
var MongoClient = require('mongodb').MongoClient
let dburl = 'mongodb://59.110.218.113:27017'
// let dburl = 'mongodb://localhost:27017'
// let dburl =  'mongodb://59.110.218.113:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

http.use(express.json()) // 解析post发送的数据 //  post 请求头是 json

http.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

MongoClient.connect(dburl, {
  useNewUrlParser: true
}, (err, db2) => {
  let dbase = db2.db('runoob')
  dbase.collection('runoob').find().toArray((err, data) => {
    console.log(1111,data);
  })

})


http.listen(1122, () => {
  console.log('1122 端口启动成功12')
})
