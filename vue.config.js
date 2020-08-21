
module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      /* '/api': {
        target: 'http://182.50.1.45:7529/api', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '/api' // rewrite path
        }
      }, */
      '/api': {
        target: 'http://localhost:3000', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '/sss' // rewrite path
        }
      },
      '/test': {
        target: 'http://localhost:3000', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/test': '/' // rewrite path
        }
      },
      '/kuaidi': {
        target: 'http://www.kuaidi100.com/', // 你要访问的地址
        ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/kuaidi': '/' // 路径重写
        }
      }
    }
  }
}
