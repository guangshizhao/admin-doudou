import axios from 'axios'
const ip = 'https://douban.uieee.com/v2/movie/'

export default class DbMovie {
  constructor () {
    this.apiUrl = ip
  }
  /**
   * @description 获取正在热映的电影
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
}
