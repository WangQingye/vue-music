/**
 * Created by wqy on 2017/7/10.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
// import axios from 'axios'

export function getRecommend () {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, data, options)
}

export function getDiscList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'
    const randomNum = (Math.random() * 10).toString().slice(2) + '1'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        rnd: randomNum,
        tpl: 'v12',
        g_tk: '1620604199',
        page: 'other'
    })
    return jsonp(url, data, options)
}