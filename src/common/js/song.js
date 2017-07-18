/**
 * Created by wqy on 2017/7/16.
 */

import {getLyric} from 'src/api/song'
import {ERR_OK} from 'src/api/config'
import {Base64} from 'js-base64'

export default class Song
{
    constructor ({id, mid, singer, name, album, duration, image, url})
    {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }

    getLyric()
    {
        // 这首歌已经请求过了就不用再次请求了
        if (this.lyric)
        {
            return Promise.resolve(this.lyric)
        }
        getLyric(this.mid).then((res) => {
            if (res.retcode === ERR_OK)
            {
                this.lyric = Base64.decode(res.lyric)
                console.log(this.lyric)
            }
        })
    }
}

export function createSong (musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=38`
    })
}

function filterSinger (singer) {
    let ret = []
    if (!singer) return ''
    singer.forEach((s) => {
        ret.push(s.name)
    })
    return ret.join('/')
}