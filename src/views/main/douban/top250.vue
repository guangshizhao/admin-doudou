<template>
<div class='box'>
  <p>{{title}} <v-btn
                class='float-right'
                :loading="uploading"
                :disabled="uploading"
                @click='upload'>
                上传信息</v-btn>
  </p>
   <vxe-grid
      border
      :height="tableHeight"
      align="center"
      :loading="loading"
      :columns="tableColumn"
      :data="tableData">
  </vxe-grid>

   <v-snackbar
      top
      v-model="snackbar"
      :timeout='2000'
      class="text-center"
    >
    {{insertedCount}}
    </v-snackbar>
</div>
</template>

<script>
import DbMovie from '@/api/dbMovieServe.js'
import { filterData } from '@/libs/utils.js'
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      loading: true,
      uploading: false,
      tableLoading: true,
      snackbar: false,
      tableHeight: 300,
      insertedCount: '',
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
        { field: 'ratingStr', title: '评分', showOverflow: true, showHeaderOverflow: true },
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
      this.uploading = true
      axios.post('http://localhost:8888/show', { jihe: 'doubanTop', data: this.tableData })
        .then(res => {
          this.uploading = false
          this.insertedCount = `你成功添加了${res.data.insertedCount}条数据`
          this.snackbar = true
        }).catch(() => {
          this.uploading = true
          this.insertedCount = `添加失败请重试`
        })
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
    },
    /**
     *  首次进入页面获取豆瓣top20条
     * @method getHit
     * @return { array }
     */
    getTop250 () {
      console.log(1111)
      new DbMovie().getTop('top250').then(data => {
        this.tableData = data.data.subjects
        this.tableData.map(item => {
          item.castsMap = filterData(item.casts)
          item.genresMap = filterData(item.genres)
          item.directorsMap = filterData(item.directors)
          item.durationsMap = filterData(item.durations) // 片长
          item.ratingStr = item.rating.average
          item.pubdatesMap = filterData(item.pubdates, 'br')
          item.imagesMap = item.images.small
          return item
        })
        this.title = data.data.title
        console.log(222, this.tableData)
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    }

  },
  created () {
    this.onResize()
    this.handleSize()
    this.getTop250()
  }
}
</script>
<style  scoped>
.box{
  width:100%;
}
</style>
