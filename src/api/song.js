/**
 * Created by wqy on 2017/7/18.
 */
import axios from 'axios'
import {commonParams} from 'src/api/config'

export function getLyric (id) {
    const url = '/api/lyric'
    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        loginUin: 0,
        notice: 0,
        needNewCode: 0,
        platform: 'yqq',
        songmid: id,
        pcachetime: +new Date(),
        format: 'json'
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}