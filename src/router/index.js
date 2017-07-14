import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
          {
              path: ':id',
              component: SingerDetail
          }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
