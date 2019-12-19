const express = require('express')
const http = express()
var MongoClient = require('mongodb').MongoClient
var uri = 'mongodb://zhaoshiguang:doudoubujieba@cluster0-shard-00-00-gakow.mongodb.net:27017,cluster0-shard-00-01-gakow.mongodb.net:27017,cluster0-shard-00-02-gakow.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'


MongoClient.connect(uri, { useUnifiedTopology: true }, (_err, client) => {
  console.log('成功')
  const collection = client.db('doudou').collection('test1')
  collection.find({}).toArray(function (_err, result) { // 返回集合中所有数据
    if (_err) throw _err
    console.log('返回集合中国的数据', result)
    client.close()
  })
})
// MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     console.log("数据库已创建!");
//     var dbase = db.db("runoob");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
//   });

http.listen(8888, () => {
  console.log('8888 端口启动成功12')
})
