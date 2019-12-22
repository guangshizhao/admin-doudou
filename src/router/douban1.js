
import LayOut from '../views/LayOut.vue'
export default [
  {
    path: '/douban1',
    name: '/douban1',
    meta: {
      icon: 'widgets',
      title: '豆瓣1'
    },
    component: LayOut,
    children: [{
      path: 'heatWave1',
      name: 'HeatWave1',
      meta: {
        icon: 'widgetsHeatWave',
        title: '豆瓣正在热映的电影1'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/main/douban/HeatWave.vue')
    },
    {
      path: 'top2501',
      name: 'Top2501',
      meta: {
        icon: 'widgets',
        title: '豆瓣2501'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/main/douban/top250.vue')
    }
    ]
  }
]
