import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './compoents/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
