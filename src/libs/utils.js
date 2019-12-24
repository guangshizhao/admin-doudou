/**
     * @description 过滤表格数据   换行 和  数组中提取字符串
     *  { arr } 是要过滤的数组
     *  { br }  字符串是否加上换行符
     */
export const filterData = (arr, br) => {
  if (br) {
    let data = []
    arr.forEach(item => {
      if (typeof item !== 'string' && 'number') {
        data.push(item.name)
      } else {
        data.push(item)
      }
    })
    let bStr = ''
    for (let i in data) {
      bStr += data[i] + '</br>'
    }
    return bStr
  } else {
    let data = []
    arr.forEach(item => {
      if (typeof item !== 'string' && 'number') {
        data.push(item.name)
      } else {
        data.push(item)
      }
    })
    let mapData = data.join('、')
    return mapData
  }
}
