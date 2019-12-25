<template>
<div class='box'>
  <p>{{title}} <v-btn  class='float-right' @click='upload'>上传信息</v-btn></p>
   <vxe-grid
      border
      :height="tableHeight"
      align="center"
      :loading="loading"
      :columns="tableColumn"
      :data="tableData">
  </vxe-grid>
</div>
</template>

<script>
import axios from 'axios'
import DbMovie from '@/api/dbMovieServe.js'
import { filterData } from '@/libs/utils.js'
import qs from 'qs'
export default {
  name: '',
  data () {
    return {
      loading: true,
      tableHeight: 300,
      tableColumn: [
        { type: 'seq', width: 50 },
        { field: 'title', title: '名字', showOverflow: true, showHeaderOverflow: true },
        { field: 'castsMap', title: '主演', showOverflow: true, showHeaderOverflow: true },
        { field: 'directorsMap', title: '导演', showOverflow: true, showHeaderOverflow: true },
        { field: 'year', title: '年份', showOverflow: true, showHeaderOverflow: true },
        { field: 'genresMap', title: '类型', showOverflow: true, showHeaderOverflow: true },
        { field: 'durationsMap', title: '片长', showOverflow: true, showHeaderOverflow: true },
        { field: 'pubdatesMap',
          title: '上映时间',
          showOverflow: true,
          showHeaderOverflow: true,
          slots: {
            default: ({ row }, h) => {
              return [
                <span domPropsInnerHTML={ row.pubdatesMap }></span>
              ]
            }
          }
        },
        { field: 'mainland_pubdate', title: '大陆上映时间', showOverflow: true, showHeaderOverflow: true },
        { field: 'imagesMap',
          title: '剧照',
          showOverflow: true,
          showHeaderOverflow: true,
          slots: {
            default: ({ row }, h) => {
              return [
                <img src={ row.imagesMap } style="width: 100px;"/>
              ]
            }
          } }
      ],
      tableData: [],
      title: ''
    }
  },
  methods: {
    /**
     * 上传到数据库
     *  @method upload
     */
    upload () {
      axios.get('http://localhost:8888/show',
        { params: { a: 5 } })
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    },
    /**
     *  首次进入页面获取热映数据50条
     * @method getHit
     * @return { array }
     */
    async getHit () {
      let data = await new DbMovie().getIsHit('in_theaters')
      try {
        this.tableData = data.data.subjects
        this.tableData.map(item => {
          item.castsMap = filterData(item.casts)
          item.genresMap = filterData(item.genres)
          item.directorsMap = filterData(item.directors)
          item.durationsMap = filterData(item.durations)
          item.pubdatesMap = filterData(item.pubdates, 'br')
          item.imagesMap = item.images.small
          return item
        })
        this.title = data.data.title
        console.log(222, this.tableData)
        this.loading = false
      } catch (err) {
        console.log('失败', err)
      }
    },

    /**
     *  计算表格高度
     * @method handleSize
     */
    handleSize () {
      this.tableHeight = document.body.clientHeight - 180
    },
    /**
     *  当浏览器被重置大小时执行
     * @method onResize
     */
    onResize () {
      window.onresize = () => {
        this.handleSize()
      }
    }
  },
  created () {
    this.onResize()
    this.handleSize()
    this.getHit()
  }
}
</script>

<style  scoped>
.box{
  width:100%;
}
</style>
