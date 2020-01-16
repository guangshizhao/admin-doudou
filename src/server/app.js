const express = require('express')
const http = express()
var MongoClient = require('mongodb').MongoClient
var uri = 'mongodb://zhaoshiguang:doudoubujieba@cluster0-shard-00-00-gakow.mongodb.net:27017,cluster0-shard-00-01-gakow.mongodb.net:27017,cluster0-shard-00-02-gakow.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

// http.use(express.urlencoded({ extended: false })) //  post 请求头是 www
http.use(express.json())// 解析post发送的数据 //  post 请求头是 json

http.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
/*
    一. post header如果是 Content-Type application/json;charset=utf-8 格式的  前端 axios 正常穿对象就行 后端需要加上
       1.http.use(express.json())// 解析post发送的数据 这样 req.body 就可以拿到
       2 res.header('Access-Control-Allow-Headers', 'Content-Type')

    二. post header  是 application/x-www-form-urlencoded
      1前端就需要qs.stringify 序列化对象一下
      2. res.header('Access-Control-Allow-Headers', 'Content-Type')不用加
      3.http.use(express.urlencoded({ extended: false }))  use改一下

    三.get 的话 后端不需要加 header use
        只需要把 发送给后台的数据 用params包起来{params:{11:11}}
       */
/**
 * @method post
 */
http.post('/show', (req, res) => {
  MongoClient.connect(uri, {
    useUnifiedTopology: true
  }, (_err, client) => {
    const collection = client.db('doudou').collection(req.body.jihe) // 链接数据库集合
    collection.insertMany(req.body.data, (err, data) => {
      if (err) throw err
      else {
        console.log('添加成功200', data)
        res.send(data)
        client.close()
      }
    })
  })
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
