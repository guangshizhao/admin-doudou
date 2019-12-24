<template>
<div class='box'>
  <p>{{title}}</p>
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
import DbMovie from '@/api/dbMovieServe.js'
import { filterData } from '@/libs/utils.js'
export default {
  name: '',
  data () {
    return {
      loading: true,
      tableHeight: 300,
      tableColumn: [
        { type: 'seq', width: 50 },
        { field: 'title', title: '名字' },
        { field: 'castsMap', title: '主演' },
        { field: 'directorsMap', title: '导演' },
        { field: 'year', title: '年份', showHeaderOverflow: true },
        { field: 'genresMap', title: '类型', showHeaderOverflow: true },
        { field: 'durationsMap', title: '片长', showHeaderOverflow: true },
        { field: 'pubdatesMap',
          title: '上映时间',
          showHeaderOverflow: true,
          slots: {
            default: ({ row }, h) => {
              return [
                <span domPropsInnerHTML={ row.pubdatesMap }></span>
              ]
            }
          }
        },
        { field: 'mainland_pubdate', title: '大陆上映时间', showHeaderOverflow: true },
        { field: 'imagesMap',
          title: '剧照',
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
     * @description 计算表格高度
     */
    handleSize () {
      this.tableHeight = window.innerHeight - 180
    },
    onResize () {
      window.onresize = () => {
        this.handleSize()
      }
    },
    /**
     * @description 首次进入页面获取表格数据
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
