import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'

Vue.use(vueLazyLoad, {
	loading: require('src/common/image/default.png')
})

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
	router
})
