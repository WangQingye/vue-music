import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import './common/stylus/index.styl'

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
	router
})
