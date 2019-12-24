
import LayOut from '../views/LayOut.vue'
export default [
  {
    path: '/douban',
    name: '/douban',
    meta: {
      icon: 'widgets',
      title: '豆瓣'
    },
    component: LayOut,
    children: [{
      path: 'heatWave',
      name: 'HeatWave',
      meta: {
        icon: 'widgetsHeatWave',
        title: '豆瓣正在热映的电影'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/main/douban/HeatWave.vue')
    },
    {
      path: 'top250',
      name: 'Top250',
      meta: {
        icon: 'widgets',
        title: '豆瓣TOP250'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/main/douban/top250.vue')
    }
    ]
  }
]
