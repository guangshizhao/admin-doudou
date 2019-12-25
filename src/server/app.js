const express = require('express')
const http = express()
let bodyParser = require('body-parser')// 当客户端的请求为post请求时需要通过它去解析客户端传过来的数据
// var MongoClient = require('mongodb').MongoClient
// var uri = 'mongodb://zhaoshiguang:doudoubujieba@cluster0-shard-00-00-gakow.mongodb.net:27017,cluster0-shard-00-01-gakow.mongodb.net:27017,cluster0-shard-00-02-gakow.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

// parse application/x-www-form-urlencoded
// parse application/json
http.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

/**
 * @method get 请求
 */
http.post('/show', (req, res) => {
  let obj = req.body
  console.log('......', obj)
/*   MongoClient.connect(uri, {
    useUnifiedTopology: true
  }, (_err, client) => {
    const collection = client.db('doudou').collection('test1') // 链接数据库集合
    collection.insertOne(obj, (err, data) => {
      if (err) throw err
      else {
        console.log('添加陈宫1')
        client.close()
      }
    })
  }) */
})

/*   collection.find({}).toArray(function (_err, result) { // 返回集合中所有数据
          else {
            console.log('数据库提取成功')
            res.send(result)
            client.close()
          }
        }) */

/* MongoClient.connect(uri, { useUnifiedTopology: true }, (_err, client) => {
              console.log('成功')
              const collection = client.db('doudou').collection('test1')
              collection.find({}).toArray(function (_err, result) { // 返回集合中所有数据
                if (_err) throw _err
                console.log('返回集合中的数据', result)
                client.close()
              })
            }) */
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
