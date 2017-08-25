import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from '../components/recommend/recommend.vue'
// import Singer from '../components/singer/singer.vue'
// import SingerDetail from '../components/singer-detail/singer-detail.vue'
// import Rank from '../components/rank/rank.vue'
// import Search from '../components/search/search.vue'
// import Disc from '../components/disc/disc.vue'
// import TopList from 'src/components/top-list/top-list.vue'
// import UserCenter from 'src/components/user-center/user-center.vue'

Vue.use(Router)

const Recommend = (resolve) => {
    import('../components/recommend/recommend.vue').then((recommend) => {
        resolve(recommend)
    })
}

const Singer = (resolve) => {
    import('../components/singer/singer.vue').then((singer) => {
        resolve(singer)
    })
}

const SingerDetail = (resolve) => {
    import('../components/singer-detail/singer-detail.vue').then((singerDetail) => {
        resolve(singerDetail)
    })
}

const Rank = (resolve) => {
    import('../components/rank/rank.vue').then((rank) => {
        resolve(rank)
    })
}

const Search = (resolve) => {
    import('../components/search/search.vue').then((search) => {
        resolve(search)
    })
}

const Disc = (resolve) => {
    import('../components/disc/disc.vue').then((disc) => {
        resolve(disc)
    })
}

const TopList = (resolve) => {
    import('src/components/top-list/top-list.vue').then((todoList) => {
        resolve(todoList)
    })
}

const UserCenter = (resolve) => {
    import('src/components/user-center/user-center.vue').then((userCenter) => {
        resolve(userCenter)
    })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
        path: '/recommend',
        component: Recommend,
        children: [
            {
                path: ':id',
                component: Disc
            }
        ]
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
      component: Rank,
        children: [
            {
                path: ':id',
                component: TopList
            }
        ]
    },
    {
      path: '/search',
      component: Search,
        children: [
            {
                path: ':id',
                component: SingerDetail
            }
        ]
    },
      {
          path: '/user',
          component: UserCenter
      }
  ]
})
