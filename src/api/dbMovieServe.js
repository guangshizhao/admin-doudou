import axios from 'axios'
const ip = 'https://douban.uieee.com/v2/movie/'

export default class DbMovie {
  constructor () {
    this.apiUrl = ip
  }
  /**
     *  get请求 获取正在热映的20条电影数据
     * @method getIsHit
     * @param { string } url 请求路径
     * @return { promise }
     */
  getIsHit (url) {
    return new Promise((resolve, reject) => {
      axios.get(this.apiUrl + url)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
    })
  }
  /**
     *  get请求 获取正在top20的电影
     * @method getTop
     * @param { api } api 请求路径
     * @return { promise }
     */
  getTop (api) {
    return axios.request({
      url: this.apiUrl + api,
      method: 'get'
    })
  }
}
