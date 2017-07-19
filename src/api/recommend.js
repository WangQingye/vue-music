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

export function getSongList(disstid) {
    // const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    //
    // const data = Object.assign({}, commonParams, {
    //     disstid,
    //     type: 1,
    //     json: 1,
    //     utf8: 1,
    //     onlysong: 0,
    //     platform: 'yqq',
    //     hostUin: 0,
    //     needNewCode: 0
    // })
    //
    // return jsonp(url, data, options)
    return {
            code: 0,
            subcode: 0,
            accessed_plaza_cache: 1,
            accessed_favbase: 0,
            login: 0,
            cdnum: 1,
            cdlist: [
                {
                    disstid: "3572016010",
                    coveradurl: "",
                    dissid: 3572016,
                    uin: 3482440089,
                    owndir: 0,
                    dissname: "雷鬼 | 自从听完这单，我就没赘肉了",
                    logo: "http://p.qpic.cn/music_cover/Nich4QRD76rLmeJ0UuZBTMu3ebulkwXptAzicEjCLxU5sUEoWwK82pSA/300?n=1",
                    pic_mid: "",
                    pic_dpi: 300,
                    isAd: 0,
                    desc: "曾看到有人说，如何快速区分摇滚与雷鬼？能让你前后摇摆的是摇滚，能让你左右摇摆的是雷鬼。<br>听着这单雷鬼一起摇到飞起~~~！",
                    ctime: 1499843409,
                    mtime: 0,
                    headurl: "http://q2.qlogo.cn/g?b=qq&k=ib3oUD4iac8xmibkkZjWSQZ0Q&s=100&t=630",
                    nick: "可爱的温蒂",
                    nickname: "可爱的温蒂",
                    type: 0,
                    singerid: 0,
                    singermid: "",
                    isvip: 0,
                    isdj: 0,
                    tags: [
                        {
                            id: 11,
                            name: "摇滚",
                            pid: 11
                        },
                        {
                            id: 117,
                            name: "快乐",
                            pid: 117
                        },
                        {
                            id: 224,
                            name: "跳舞",
                            pid: 224
                        }
                    ],
                    songnum: 85,
                    songids: "102689351,1324104,5080677,9061718,1360612,8138342,1383684,106776283,105645244,1870986,101042046,276895,5593461,5640971,435491,433450,109901122,8557975,201951375,102689353,106644157,1441975,7142316,85118,104856223,109500104,8142706,3333454,7135701,1807586,1724310,5859075,104866095,309669,675486,104287255,604559,309691,1608679,103172547,104926816,5859069,1644337,2814295,201957701,425119,202254240,853787,7252860,106585860,5640793,2689432,2051481,102399558,1525771,4996851,8254063,106704519,103172551,5642558,103830212,3764376,1328379,201531084,549416,604563,1188847,1188509,547424,726294,106870,106692755,694275,102690266,1604413,104866106,4997144,5214934,102802689,1779780,9238341,109448016,103155677,2566172,102631339",
                    songtypes: "13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3",
                    total_song_num: 85,
                    song_begin: 0,
                    cur_song_num: 85,
                    songlist: [
                        {
                            albumdesc: "",
                            albumid: 1021943,
                            albummid: "001FU02200Qzo0",
                            albumname: "Water for Your Soul",
                            alertid: 11,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 214,
                            isonly: 0,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 574,
                                    mid: "002rcMhd3td9df",
                                    name: "Joss Stone"
                                }
                            ],
                            size128: 3426687,
                            size320: 8566331,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4380647,
                            songid: 102689351,
                            songmid: "003huJOb0cEdGA",
                            songname: "Molly Town",
                            songorig: "Molly Town",
                            songtype: 0,
                            strMediaMid: "003huJOb0cEdGA",
                            stream: 3,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 107863,
                            albummid: "003e78cN0botrJ",
                            albumname: "Rebelution",
                            alertid: 100002,
                            belongCD: 18,
                            cdIdx: 0,
                            interval: 234,
                            isonly: 1,
                            label: "4611686018427519056",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 3291,
                                    mid: "003hzynV4NRdIg",
                                    name: "Tanya Stephens"
                                }
                            ],
                            size128: 3746000,
                            size320: 9364625,
                            size5_1: 0,
                            sizeape: 27076775,
                            sizeflac: 26946557,
                            sizeogg: 5208103,
                            songid: 1324104,
                            songmid: "003M9b3A3SLEbo",
                            songname: "These Streets",
                            songorig: "These Streets",
                            songtype: 0,
                            strMediaMid: "003M9b3A3SLEbo",
                            stream: 3,
                            switch: 636675,
                            type: 0,
                            vid: "c00171lap1c"
                        },
                        {
                            albumdesc: "",
                            albumid: 439947,
                            albummid: "001NeKUm4HD85G",
                            albumname: "No Other Love / Can't Be My Lover - Cool Breeze Mixes",
                            alertid: 100002,
                            belongCD: 5,
                            cdIdx: 0,
                            interval: 272,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 4912,
                                    mid: "004KzHvS46zsGB",
                                    name: "John Legend"
                                }
                            ],
                            size128: 4357562,
                            size320: 10913081,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6131303,
                            songid: 5080677,
                            songmid: "0010GYyk4KcRnr",
                            songname: "Can't Be My Lover",
                            songorig: "Can't Be My Lover",
                            songtype: 0,
                            strMediaMid: "0010GYyk4KcRnr",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 776439,
                            albummid: "00058utE1Rdyqa",
                            albumname: "I Rise",
                            alertid: 11,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 280,
                            isonly: 1,
                            label: "4611686018427388176",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 49680,
                                    mid: "001tb0ge4aFxDT",
                                    name: "Etana"
                                }
                            ],
                            size128: 4484080,
                            size320: 11225280,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6810490,
                            songid: 9061718,
                            songmid: "0007qOJ741hg5A",
                            songname: "How Long",
                            songorig: "How Long",
                            songtype: 0,
                            strMediaMid: "0007qOJ741hg5A",
                            stream: 9,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 32230,
                            albummid: "003nQxXT3TkDod",
                            albumname: "Back To Black",
                            alertid: 11,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 191,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11641,
                                    mid: "003v0ouu32CCrh",
                                    name: "Amy Winehouse"
                                }
                            ],
                            size128: 3070998,
                            size320: 7677117,
                            size5_1: 0,
                            sizeape: 20046216,
                            sizeflac: 20416228,
                            sizeogg: 3939896,
                            songid: 1360612,
                            songmid: "003rD16S2UbuFA",
                            songname: "Just Friends",
                            songorig: "Just Friends",
                            songtype: 0,
                            strMediaMid: "003rD16S2UbuFA",
                            stream: 10,
                            switch: 3749687,
                            type: 0,
                            vid: "9LLoEMWJWuW"
                        },
                        {
                            albumdesc: "",
                            albumid: 748815,
                            albummid: "004Exrfm3soxHh",
                            albumname: "Come Over",
                            alertid: 100002,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 244,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12801,
                                    mid: "0013zTgB3mfrFN",
                                    name: "Estelle"
                                }
                            ],
                            size128: 3916153,
                            size320: 9804451,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5939879,
                            songid: 8138342,
                            songmid: "00369wl145ydvX",
                            songname: "Come Over [Radio Version] [feat. Sean Paul]",
                            songorig: "Come Over [Radio Version] [feat. Sean Paul]",
                            songtype: 0,
                            strMediaMid: "00369wl145ydvX",
                            stream: 5,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 112330,
                            albummid: "004A8tW14PfxwQ",
                            albumname: "Need U Bad",
                            alertid: 100002,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 252,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 13746,
                                    mid: "004BUYzb26kkz6",
                                    name: "Jazmine Sullivan"
                                }
                            ],
                            size128: 4042331,
                            size320: 10105581,
                            size5_1: 0,
                            sizeape: 29112913,
                            sizeflac: 29310804,
                            sizeogg: 5780555,
                            songid: 1383684,
                            songmid: "004762yT2KPvFA",
                            songname: "Need U Bad",
                            songorig: "Need U Bad",
                            songtype: 0,
                            strMediaMid: "004762yT2KPvFA",
                            stream: 10,
                            switch: 636675,
                            type: 0,
                            vid: "i0021d0357o"
                        },
                        {
                            albumdesc: "",
                            albumid: 1416605,
                            albummid: "003ARvQS3kNYQW",
                            albumname: "Ultimate Lovers Rock",
                            alertid: 11,
                            belongCD: 35,
                            cdIdx: 0,
                            interval: 229,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 118583,
                                    mid: "003BvtmZ3SnYtL",
                                    name: "Glen Washington"
                                }
                            ],
                            size128: 3669119,
                            size320: 9172388,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4839216,
                            songid: 106776283,
                            songmid: "0028Wy1e3tfa0e",
                            songname: "Kings of Kings",
                            songorig: "Kings of Kings",
                            songtype: 0,
                            strMediaMid: "0028Wy1e3tfa0e",
                            stream: 5,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1291347,
                            albummid: "002dXzSB3g5EJJ",
                            albumname: "Ibeyi",
                            alertid: 11,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 252,
                            isonly: 0,
                            label: "4611686018427392080",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 196317,
                                    mid: "003plMPL3JBPlg",
                                    name: "Ibeyi"
                                }
                            ],
                            size128: 4034606,
                            size320: 10086190,
                            size5_1: 0,
                            sizeape: 18797701,
                            sizeflac: 19163236,
                            sizeogg: 4947778,
                            songid: 105645244,
                            songmid: "000OaZnA4asAFk",
                            songname: "River",
                            songorig: "River",
                            songtype: 0,
                            strMediaMid: "000OaZnA4asAFk",
                            stream: 7,
                            switch: 3749687,
                            type: 0,
                            vid: "i0015aqceq5"
                        },
                        {
                            albumdesc: "",
                            albumid: 115836,
                            albummid: "001PI4YO1BUirJ",
                            albumname: "No One - EP",
                            alertid: 11,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 236,
                            isonly: 0,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 4764,
                                    mid: "002kAjGC1Em12u",
                                    name: "Alicia Keys"
                                }
                            ],
                            size128: 3793267,
                            size320: 9482837,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5304597,
                            songid: 1870986,
                            songmid: "000G0wv347otsi",
                            songname: "No One (Curtis Lynch Reggae Remix)",
                            songorig: "No One (Curtis Lynch Reggae Remix)",
                            songtype: 0,
                            strMediaMid: "000G0wv347otsi",
                            stream: 6,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 846627,
                            albummid: "003z6IEY4QZ7IQ",
                            albumname: "The Collection",
                            alertid: 11,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 189,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 31085,
                                    mid: "0046gfAs35P1e6",
                                    name: "Toots & The Maytals"
                                }
                            ],
                            size128: 3036757,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 101042046,
                            songmid: "001jPcYk3NlU1E",
                            songname: "Everybody Needs Lovin",
                            songorig: "Everybody Needs Lovin",
                            songtype: 0,
                            strMediaMid: "001jPcYk3NlU1E",
                            stream: 7,
                            switch: 1648403,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 23272,
                            albummid: "002WtKoG3HIWKe",
                            albumname: "Nachtschicht Vol. 13",
                            alertid: 11,
                            belongCD: 11,
                            cdIdx: 0,
                            interval: 174,
                            isonly: 0,
                            label: "4611686018427918352",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 79667,
                                    mid: "003HtgYK2XE1pH",
                                    name: "Jack Radics"
                                }
                            ],
                            size128: 2788588,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 276895,
                            songmid: "0034ktJG043ueL",
                            songname: "No Matter (Radio Edit)",
                            songorig: "No Matter",
                            songtype: 0,
                            strMediaMid: "0034ktJG043ueL",
                            stream: 6,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 522888,
                            albummid: "003H8o4A3SYHXE",
                            albumname: "Songs For Reggae Lovers 2",
                            alertid: 100002,
                            belongCD: 23,
                            cdIdx: 0,
                            interval: 281,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 9050,
                                    mid: "004aIKnW3vM8Ay",
                                    name: "Dennis Brown"
                                }
                            ],
                            size128: 4499668,
                            size320: 11279246,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6505122,
                            songid: 5593461,
                            songmid: "001zvvcc0VC77Z",
                            songname: "You Know You Want To Be Loved (Extended Mix)",
                            songorig: "You Know You Want To Be Loved",
                            songtype: 0,
                            strMediaMid: "001zvvcc0VC77Z",
                            stream: 8,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 527691,
                            albummid: "002unBnM0zIQUm",
                            albumname: "One Love, One Life",
                            alertid: 100002,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 224,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 39491,
                                    mid: "004E3pQC4IUxDL",
                                    name: "Beres Hammond"
                                }
                            ],
                            size128: 3595960,
                            size320: 9005705,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5496021,
                            songid: 5640971,
                            songmid: "002hkxNo2HwfIZ",
                            songname: "In My Arms",
                            songorig: "In My Arms",
                            songtype: 0,
                            strMediaMid: "002hkxNo2HwfIZ",
                            stream: 1,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 35430,
                            albummid: "002GaxJv2KybwJ",
                            albumname: "Man Like I",
                            alertid: 100002,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 254,
                            isonly: 1,
                            label: "4611686018427523088",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 13448,
                                    mid: "004ATTtL0fYiP1",
                                    name: "Natty"
                                }
                            ],
                            size128: 4082668,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 435491,
                            songmid: "004cYUEz3tifVc",
                            songname: "Bedroom Eyes",
                            songorig: "Bedroom Eyes",
                            songtype: 0,
                            strMediaMid: "004cYUEz3tifVc",
                            stream: 4,
                            switch: 636675,
                            type: 0,
                            vid: "x0020smb9xx"
                        },
                        {
                            albumdesc: "",
                            albumid: 35268,
                            albummid: "001BuECd2HUuJB",
                            albumname: "Back To Black(Deluxe Edition)",
                            alertid: 11,
                            belongCD: 14,
                            cdIdx: 1,
                            interval: 175,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11641,
                                    mid: "003v0ouu32CCrh",
                                    name: "Amy Winehouse"
                                }
                            ],
                            size128: 2805803,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 433450,
                            songmid: "003ic25r34wk6A",
                            songname: "Monkey Man",
                            songorig: "Monkey Man",
                            songtype: 0,
                            strMediaMid: "003ic25r34wk6A",
                            stream: 10,
                            switch: 1652499,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1763711,
                            albummid: "001RVFIF0KAQVw",
                            albumname: "Mecoustic",
                            alertid: 11,
                            belongCD: 15,
                            cdIdx: 0,
                            interval: 342,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 39539,
                                    mid: "0035GK9O2cUBW9",
                                    name: "Tarrus Riley"
                                }
                            ],
                            size128: 5479678,
                            size320: 13698846,
                            size5_1: 0,
                            sizeape: 39903803,
                            sizeflac: 39783953,
                            sizeogg: 7958815,
                            songid: 109901122,
                            songmid: "001DhVDd4BCdkJ",
                            songname: "Whispers",
                            songorig: "Whispers",
                            songtype: 0,
                            strMediaMid: "001DhVDd4BCdkJ",
                            stream: 0,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 776052,
                            albummid: "000mRNmt3B2UKC",
                            albumname: "The Voice- Season 7 Episode 2",
                            alertid: 11,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 186,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 346611,
                                    mid: "003Erh6I28SOpr",
                                    name: "Menlik Zergabachew"
                                }
                            ],
                            size128: 2977409,
                            size320: 7459484,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4344740,
                            songid: 8557975,
                            songmid: "002yttK91XYiUy",
                            songname: "Santeria (The Voice Performance)",
                            songorig: "Santeria",
                            songtype: 0,
                            strMediaMid: "002yttK91XYiUy",
                            stream: 2,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 2017507,
                            albummid: "0027w8hc4BwAcA",
                            albumname: "Evolution",
                            alertid: 11,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 236,
                            isonly: 1,
                            label: "0",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 356128,
                                    mid: "002sr3v14LtebR",
                                    name: "Dubtonic Kru"
                                }
                            ],
                            size128: 3791959,
                            size320: 9479548,
                            size5_1: 0,
                            sizeape: 28406401,
                            sizeflac: 28573974,
                            sizeogg: 5590957,
                            songid: 201951375,
                            songmid: "0010aPjb4P8hoB",
                            songname: "Overcome",
                            songorig: "Overcome",
                            songtype: 0,
                            strMediaMid: "0010aPjb4P8hoB",
                            stream: 0,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1021943,
                            albummid: "001FU02200Qzo0",
                            albumname: "Water for Your Soul",
                            alertid: 11,
                            belongCD: 12,
                            cdIdx: 0,
                            interval: 234,
                            isonly: 0,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 574,
                                    mid: "002rcMhd3td9df",
                                    name: "Joss Stone"
                                }
                            ],
                            size128: 3746438,
                            size320: 9365690,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4841166,
                            songid: 102689353,
                            songmid: "003IF5YZ1sHMR0",
                            songname: "Harry's Symphony",
                            songorig: "Harry's Symphony",
                            songtype: 0,
                            strMediaMid: "003IF5YZ1sHMR0",
                            stream: 3,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1406127,
                            albummid: "002fCw0c0sWLoG",
                            albumname: "Freedom & Fyah",
                            alertid: 100002,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 233,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 121008,
                                    mid: "004D79xq1VuEyg",
                                    name: "Alborosie"
                                },
                                {
                                    id: 1125297,
                                    mid: "0040H6cE2TVAUs",
                                    name: "Kymani Marley"
                                }
                            ],
                            size128: 3735961,
                            size320: 9339540,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5370841,
                            songid: 106644157,
                            songmid: "0037t5yN46c6KX",
                            songname: "Life To Me",
                            songorig: "Life To Me",
                            songtype: 0,
                            strMediaMid: "0037t5yN46c6KX",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 116878,
                            albummid: "002eAO501Hmiel",
                            albumname: "Hommage",
                            alertid: 11,
                            belongCD: 11,
                            cdIdx: 0,
                            interval: 185,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 54235,
                                    mid: "002iXV0a0op50w",
                                    name: "Yannick Noah"
                                }
                            ],
                            size128: 2969006,
                            size320: 7422256,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4280103,
                            songid: 1441975,
                            songmid: "002AzZUl2Yo3lc",
                            songname: "Natural Mystic",
                            songorig: "Natural Mystic",
                            songtype: 0,
                            strMediaMid: "002AzZUl2Yo3lc",
                            stream: 8,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 650884,
                            albummid: "004QcRB92ugZVw",
                            albumname: "The Biggest Reggae One Drop Anthems 2006",
                            alertid: 100002,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 188,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 121008,
                                    mid: "004D79xq1VuEyg",
                                    name: "Alborosie"
                                }
                            ],
                            size128: 3016285,
                            size320: 7569861,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4871019,
                            songid: 7142316,
                            songmid: "004HrBiz2kKkQM",
                            songname: "Herbalist",
                            songorig: "Herbalist",
                            songtype: 0,
                            strMediaMid: "004HrBiz2kKkQM",
                            stream: 4,
                            switch: 636675,
                            type: 0,
                            vid: "i0023szukcy"
                        },
                        {
                            albumdesc: "",
                            albumid: 3812,
                            albummid: "001f3Xsf2uini6",
                            albumname: "Tide Is High",
                            alertid: 100002,
                            belongCD: 5,
                            cdIdx: 0,
                            interval: 212,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 1873,
                                    mid: "001arl9C3IZIae",
                                    name: "Seeed"
                                }
                            ],
                            size128: 3408840,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 85118,
                            songmid: "001ZyegH1Civ5H",
                            songname: "Tide Is High (Radio Edit)",
                            songorig: "Tide Is High",
                            songtype: 0,
                            strMediaMid: "001ZyegH1Civ5H",
                            stream: 2,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1189347,
                            albummid: "001hQ3mP3BKC1r",
                            albumname: "Ancient Future",
                            alertid: 100002,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 273,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 352468,
                                    mid: "000XcaUT3eyryu",
                                    name: "Protoje"
                                },
                                {
                                    id: 318868,
                                    mid: "002kXt3538ZW7J",
                                    name: "Mortimer"
                                }
                            ],
                            size128: 4378360,
                            size320: 10945544,
                            size5_1: 0,
                            sizeape: 30450943,
                            sizeflac: 30915822,
                            sizeogg: 6171087,
                            songid: 104856223,
                            songmid: "001CFFCm31IJCR",
                            songname: "Protection",
                            songorig: "Protection",
                            songtype: 0,
                            strMediaMid: "001CFFCm31IJCR",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1721947,
                            albummid: "00296bQP0tCcqs",
                            albumname: "Christmas Trees",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 193,
                            isonly: 0,
                            label: "4611686018427389968",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 38150,
                                    mid: "001J99OK2689F4",
                                    name: "Major Lazer"
                                },
                                {
                                    id: 1304728,
                                    mid: "003kTELY1pzKfI",
                                    name: "Proteje"
                                }
                            ],
                            size128: 3103187,
                            size320: 7757580,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4573785,
                            songid: 109500104,
                            songmid: "003yryGE40MWAR",
                            songname: "Christmas Trees",
                            songorig: "Christmas Trees",
                            songtype: 0,
                            strMediaMid: "003yryGE40MWAR",
                            stream: 0,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 749177,
                            albummid: "002kYD0K1ndS21",
                            albumname: "Party In Session - The Black Uhuru Collection",
                            alertid: 100002,
                            belongCD: 24,
                            cdIdx: 1,
                            interval: 344,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 1417,
                                    mid: "003rH0Wy2bNSL5",
                                    name: "Black Uhuru"
                                }
                            ],
                            size128: 5514029,
                            size320: 13804842,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 8829602,
                            songid: 8142706,
                            songmid: "001DHUCF4CRnwX",
                            songname: "What Is Life",
                            songorig: "What Is Life",
                            songtype: 0,
                            strMediaMid: "001DHUCF4CRnwX",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 275685,
                            albummid: "000Ze9Js2U0NUH",
                            albumname: "Om Numah Shivaya",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 265,
                            isonly: 0,
                            label: "4611686018427389984",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 18232,
                                    mid: "000DHWdf47B8LW",
                                    name: "Apache Indian"
                                }
                            ],
                            size128: 4247149,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 3333454,
                            songmid: "000xR1211nnAwp",
                            songname: "Om Numah Shivaya",
                            songorig: "Om Numah Shivaya",
                            songtype: 0,
                            strMediaMid: "000xR1211nnAwp",
                            stream: 5,
                            switch: 1128211,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 650362,
                            albummid: "003InE4g1hcmTT",
                            albumname: "Rough & Ready - Volume Ii",
                            alertid: 100002,
                            belongCD: 12,
                            cdIdx: 0,
                            interval: 231,
                            isonly: 1,
                            label: "4611686018427392016",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 52891,
                                    mid: "00024P6I09IVFI",
                                    name: "Shabba Ranks"
                                }
                            ],
                            size128: 3713003,
                            size320: 9298086,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5427184,
                            songid: 7135701,
                            songmid: "002k7sra1fOJfd",
                            songname: "Ting-A-Ling (The Original|Album Version)",
                            songorig: "Ting-A-Ling",
                            songtype: 0,
                            strMediaMid: "002k7sra1fOJfd",
                            stream: 2,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 43927,
                            albummid: "003HhkI01qy49u",
                            albumname: "Cliff Hanger",
                            alertid: 100002,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 254,
                            isonly: 1,
                            label: "4611686018427523088",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8693,
                                    mid: "002EsYhB2XgVe5",
                                    name: "Jimmy Cliff"
                                }
                            ],
                            size128: 4067836,
                            size320: 10169298,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6241935,
                            songid: 1807586,
                            songmid: "001dxstR3oL2N1",
                            songname: "Hitting With Music",
                            songorig: "Hitting With Music",
                            songtype: 0,
                            strMediaMid: "001dxstR3oL2N1",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 136333,
                            albummid: "000l5Erx23eVk5",
                            albumname: "King Yellowman",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 307,
                            isonly: 1,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 17706,
                                    mid: "0033ocBf2L678A",
                                    name: "Yellowman"
                                }
                            ],
                            size128: 4922605,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 1724310,
                            songmid: "000xYOFH3NKgY9",
                            songname: "Jamaica Nice/Take Me Home Country Roads",
                            songorig: "Jamaica Nice/Take Me Home Country Roads",
                            songtype: 0,
                            strMediaMid: "000xYOFH3NKgY9",
                            stream: 3,
                            switch: 1648403,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 546947,
                            albummid: "000rSD7q1sEl4B",
                            albumname: "Escape From Babylon",
                            alertid: 100002,
                            belongCD: 8,
                            cdIdx: 0,
                            interval: 261,
                            isonly: 1,
                            label: "4611686018427388160",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 121008,
                                    mid: "004D79xq1VuEyg",
                                    name: "Alborosie"
                                }
                            ],
                            size128: 4187785,
                            size320: 10508911,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5810313,
                            songid: 5859075,
                            songmid: "000DIpIn0enMEH",
                            songname: "Good Woman",
                            songorig: "Good Woman",
                            songtype: 0,
                            strMediaMid: "000DIpIn0enMEH",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1190568,
                            albummid: "0025SCxa0CwkUh",
                            albumname: "Revelation Part 1: The Root Of Life",
                            alertid: 100002,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 225,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 17963,
                                    mid: "00439ziG2lAqe4",
                                    name: "Stephen Marley"
                                },
                                {
                                    id: 32785,
                                    mid: "002gFfip2X2sQI",
                                    name: "Capleton"
                                }
                            ],
                            size128: 3606901,
                            size320: 9016756,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5568467,
                            songid: 104866095,
                            songmid: "0025jF414IE5av",
                            songname: "Break Us Apart (Album Version)",
                            songorig: "Break Us Apart",
                            songtype: 0,
                            strMediaMid: "0025jF414IE5av",
                            stream: 8,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 25706,
                            albummid: "0026mBt92ZFiOY",
                            albumname: "Clothes Drop",
                            alertid: 100002,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 211,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 373,
                                    mid: "003GzM0V2ASdtn",
                                    name: "Shaggy"
                                }
                            ],
                            size128: 3381101,
                            size320: 8452409,
                            size5_1: 0,
                            sizeape: 22784313,
                            sizeflac: 22914997,
                            sizeogg: 5150356,
                            songid: 309669,
                            songmid: "001SEd7r1riOIZ",
                            songname: "Luv Me Up",
                            songorig: "Luv Me Up",
                            songtype: 0,
                            strMediaMid: "0041TyXz2E09r2",
                            stream: 10,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 56986,
                            albummid: "004XK6eH06sBdj",
                            albumname: "Jah Is Real",
                            alertid: 11,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 490,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 477,
                                    mid: "00204bjx4RJFBk",
                                    name: "Burning Spear"
                                }
                            ],
                            size128: 7851824,
                            size320: 19603369,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 11493043,
                            songid: 675486,
                            songmid: "002XuwwK0wBOHP",
                            songname: "Step It",
                            songorig: "Step It",
                            songtype: 0,
                            strMediaMid: "002XuwwK0wBOHP",
                            stream: 6,
                            switch: 3221303,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1149586,
                            albummid: "004eOIz14dp2kM",
                            albumname: "Count Me In (Acoustic)",
                            alertid: 11,
                            belongCD: 7,
                            cdIdx: 0,
                            interval: 260,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 42844,
                                    mid: "003eFxIs3GHLUC",
                                    name: "Rebelution"
                                }
                            ],
                            size128: 4165657,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 104287255,
                            songmid: "003HK2ba3aLwe1",
                            songname: "Roots Reggae Music (Acoustic)",
                            songorig: "Roots Reggae Music",
                            songtype: 0,
                            strMediaMid: "003HK2ba3aLwe1",
                            stream: 6,
                            switch: 1128211,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 51399,
                            albummid: "001GztcI0Go9Vc",
                            albumname: "20th Century Masters: The Millennium Collection - The Best Of Third World",
                            alertid: 11,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 261,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 17713,
                                    mid: "0049vDOu1ec0J9",
                                    name: "Third World"
                                }
                            ],
                            size128: 4183743,
                            size320: 10458773,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5742542,
                            songid: 604559,
                            songmid: "001wVaR22aeULv",
                            songname: "1865 (96o In The Shade)",
                            songorig: "1865 (96o In The Shade)",
                            songtype: 0,
                            strMediaMid: "001PZoVF0FjrCg",
                            stream: 7,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 25708,
                            albummid: "004FZSjS1RlbLJ",
                            albumname: "Lucky Day",
                            alertid: 100002,
                            belongCD: 5,
                            cdIdx: 0,
                            interval: 283,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 373,
                                    mid: "003GzM0V2ASdtn",
                                    name: "Shaggy"
                                },
                                {
                                    id: 1663,
                                    mid: "004NwICR1h7mUb",
                                    name: "Chaka Khan"
                                }
                            ],
                            size128: 4535658,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 309691,
                            songmid: "000A0ZzY0PsIYW",
                            songname: "Get My Party On",
                            songorig: "Get My Party On",
                            songtype: 0,
                            strMediaMid: "000A0ZzY0PsIYW",
                            stream: 2,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 128974,
                            albummid: "001w2LDK0ejVxs",
                            albumname: "Korean Reggae",
                            alertid: 11,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 210,
                            isonly: 0,
                            label: "4611686018427518984",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 42280,
                                    mid: "000zhRB30YnJVU",
                                    name: "스컬 (Skull)"
                                }
                            ],
                            size128: 3369829,
                            size320: 8424478,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4876584,
                            songid: 1608679,
                            songmid: "000vajKv2OCU9u",
                            songname: "Don't Walk Away",
                            songorig: "Don't Walk Away",
                            songtype: 0,
                            strMediaMid: "000vajKv2OCU9u",
                            stream: 4,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1065863,
                            albummid: "004ApeZ71xFwsi",
                            albumname: "Youth",
                            alertid: 100002,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 266,
                            isonly: 1,
                            label: "4611686018427519056",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 10200,
                                    mid: "002uhZEM1Ipk2L",
                                    name: "MatisYahu"
                                }
                            ],
                            size128: 4261779,
                            size320: 10654047,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6462402,
                            songid: 103172547,
                            songmid: "0010C6EY1oz1b6",
                            songname: "Time Of Your Song (Album Version)",
                            songorig: "Time Of Your Song",
                            songtype: 0,
                            strMediaMid: "0010C6EY1oz1b6",
                            stream: 3,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1197857,
                            albummid: "0030PWPU2wn3YW",
                            albumname: "Dust and Dirt: Deluxe Edition",
                            alertid: 11,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 283,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 995006,
                                    mid: "001LAek00rNr4U",
                                    name: "The Black Seeds"
                                }
                            ],
                            size128: 4538072,
                            size320: 11344747,
                            size5_1: 0,
                            sizeape: 32859593,
                            sizeflac: 33484137,
                            sizeogg: 6468685,
                            songid: 104926816,
                            songmid: "000D43mq25rPTi",
                            songname: "Dust and Dirt",
                            songorig: "Dust and Dirt",
                            songtype: 0,
                            strMediaMid: "000D43mq25rPTi",
                            stream: 7,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 546947,
                            albummid: "000rSD7q1sEl4B",
                            albumname: "Escape From Babylon",
                            alertid: 100002,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 254,
                            isonly: 1,
                            label: "4611686018427388160",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 121008,
                                    mid: "004D79xq1VuEyg",
                                    name: "Alborosie"
                                }
                            ],
                            size128: 4079951,
                            size320: 10239328,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5795114,
                            songid: 5859069,
                            songmid: "004CgTpc4BYxaj",
                            songname: "No Cocaine",
                            songorig: "No Cocaine",
                            songtype: 0,
                            strMediaMid: "004CgTpc4BYxaj",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 131279,
                            albummid: "001mFMBN0kDoxi",
                            albumname: "Proxima Estacion: Esperanza",
                            alertid: 11,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 240,
                            isonly: 0,
                            label: "4611686018427518976",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 61293,
                                    mid: "0005PdQd4ZkIhd",
                                    name: "Manu Chao"
                                }
                            ],
                            size128: 3843031,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 1644337,
                            songmid: "002TIxc32EFWAg",
                            songname: "Me Gustas Tu",
                            songorig: "Me Gustas Tu",
                            songtype: 0,
                            strMediaMid: "002TIxc32EFWAg",
                            stream: 9,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 223241,
                            albummid: "002aXmk64JPnuo",
                            albumname: "Soul Fire: An Introduction To Lee Scratch Perry",
                            alertid: 11,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 207,
                            isonly: 0,
                            label: "4611686018427387984",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 31256,
                                    mid: "001nsz2w3PS4rv",
                                    name: "Lee Perry"
                                }
                            ],
                            size128: 3319339,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 2814295,
                            songmid: "001YzI2U1jvslY",
                            songname: "I Chase The Devil",
                            songorig: "I Chase The Devil",
                            songtype: 0,
                            strMediaMid: "001YzI2U1jvslY",
                            stream: 1,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 2018564,
                            albummid: "000vv1K82V0sek",
                            albumname: "Here Comes Trouble",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 234,
                            isonly: 1,
                            label: "0",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 169238,
                                    mid: "0027mO5f4Eh6Rt",
                                    name: "Chronixx"
                                }
                            ],
                            size128: 3755645,
                            size320: 9388690,
                            size5_1: 0,
                            sizeape: 28072649,
                            sizeflac: 28132889,
                            sizeogg: 5422908,
                            songid: 201957701,
                            songmid: "003OofAX139ryO",
                            songname: "Here Comes Trouble",
                            songorig: "Here Comes Trouble",
                            songtype: 0,
                            strMediaMid: "003OofAX139ryO",
                            stream: 0,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 34565,
                            albummid: "003mFcSM3qDTkM",
                            albumname: "Radio",
                            alertid: 100002,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 233,
                            isonly: 1,
                            label: "4611686018427520016",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12989,
                                    mid: "003LWJkL2xbQnM",
                                    name: "Ky-mani Marley"
                                }
                            ],
                            size128: 3738192,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 425119,
                            songmid: "003IWbw50ZOKj1",
                            songname: "Hustler",
                            songorig: "Hustler",
                            songtype: 0,
                            strMediaMid: "003IWbw50ZOKj1",
                            stream: 4,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 2053433,
                            albummid: "0033LwhM1YsJDx",
                            albumname: "Unplugged On Strawberry Hill / Reggae Got Soul",
                            alertid: 11,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 191,
                            isonly: 1,
                            label: "0",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 31085,
                                    mid: "0046gfAs35P1e6",
                                    name: "Toots & The Maytals"
                                }
                            ],
                            size128: 3065646,
                            size320: 7663320,
                            size5_1: 0,
                            sizeape: 20542027,
                            sizeflac: 20671859,
                            sizeogg: 4116036,
                            songid: 202254240,
                            songmid: "000nFZry1doTjc",
                            songname: "Never Grow Old",
                            songorig: "Never Grow Old",
                            songtype: 0,
                            strMediaMid: "000nFZry1doTjc",
                            stream: 0,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 72462,
                            albummid: "004KVn301Fu3To",
                            albumname: "Wild And Free",
                            alertid: 11,
                            belongCD: 8,
                            cdIdx: 0,
                            interval: 210,
                            isonly: 0,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8187,
                                    mid: "003wTgoV15oU6p",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 3374010,
                            size320: 8434660,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5038602,
                            songid: 853787,
                            songmid: "001cdBWC2yUqbh",
                            songname: "Mmmm Mmmm",
                            songorig: "Mmmm Mmmm",
                            songtype: 0,
                            strMediaMid: "004XaoA03hIEz5",
                            stream: 2,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 661802,
                            albummid: "001MQOmX196Nk7",
                            albumname: "Chimes of Freedom: The Songs of Bob Dylan Honoring 50 Years of Amnesty International",
                            alertid: 100002,
                            belongCD: 12,
                            cdIdx: 0,
                            interval: 163,
                            isonly: 1,
                            label: "4611686018427387984",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8187,
                                    mid: "003wTgoV15oU6p",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 2617248,
                            size320: 6581617,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 3901020,
                            songid: 7252860,
                            songmid: "002Hd6Yu4aevDL",
                            songname: "Blowin' In The Wind",
                            songorig: "Blowin' In The Wind",
                            songtype: 0,
                            strMediaMid: "002Hd6Yu4aevDL",
                            stream: 2,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 2132,
                            albummid: "0014JwE43Cewp2",
                            albumname: "Boombastic",
                            alertid: 100002,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 248,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 373,
                                    mid: "003GzM0V2ASdtn",
                                    name: "Shaggy"
                                }
                            ],
                            size128: 3979617,
                            size320: 9948701,
                            size5_1: 0,
                            sizeape: 28071600,
                            sizeflac: 28094492,
                            sizeogg: 5775248,
                            songid: 106585860,
                            songmid: "003sdJYr3dMkf0",
                            songname: "Boombastic",
                            songorig: "Boombastic",
                            songtype: 0,
                            strMediaMid: "003sdJYr3dMkf0",
                            stream: 0,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 527671,
                            albummid: "0000m7ws0RFVB0",
                            albumname: "Only Man In The World",
                            alertid: 100002,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 213,
                            isonly: 1,
                            label: "4611686018427387920",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 42366,
                                    mid: "0030lQPW0xHIcD",
                                    name: "Anuhea"
                                },
                                {
                                    id: 39539,
                                    mid: "0035GK9O2cUBW9",
                                    name: "Tarrus Riley"
                                }
                            ],
                            size128: 3409609,
                            size320: 8542723,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4814333,
                            songid: 5640793,
                            songmid: "002D5FMt1u6CnW",
                            songname: "Only Man In The World",
                            songorig: "Only Man In The World",
                            songtype: 0,
                            strMediaMid: "002D5FMt1u6CnW",
                            stream: 1,
                            switch: 636675,
                            type: 0,
                            vid: "p001215km1f"
                        },
                        {
                            albumdesc: "",
                            albumid: 210288,
                            albummid: "002IIINf4HIkwa",
                            albumname: "Love Is My Religion",
                            alertid: 11,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 224,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8187,
                                    mid: "003wTgoV15oU6p",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 3592627,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 2689432,
                            songmid: "004Teexj3LRKdE",
                            songname: "Beach In Hawaii",
                            songorig: "Beach In Hawaii",
                            songtype: 0,
                            strMediaMid: "004Teexj3LRKdE",
                            stream: 8,
                            switch: 1128211,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 156574,
                            albummid: "001zEc3j0ZTe8A",
                            albumname: "Street Life",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 191,
                            isonly: 0,
                            label: "4611686018427539472",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 9215,
                                    mid: "002nzxAB2lv185",
                                    name: "Beenie Man"
                                }
                            ],
                            size128: 3072240,
                            size320: 7680240,
                            size5_1: 0,
                            sizeape: 21353406,
                            sizeflac: 21782394,
                            sizeogg: 4270628,
                            songid: 2051481,
                            songmid: "001VTjkT3v8Gjm",
                            songname: "Street Life",
                            songorig: "Street Life",
                            songtype: 0,
                            strMediaMid: "001VTjkT3v8Gjm",
                            stream: 4,
                            switch: 3221303,
                            type: 0,
                            vid: "k0016fk8j7k"
                        },
                        {
                            albumdesc: "",
                            albumid: 987578,
                            albummid: "002k1LtB1b7dfv",
                            albumname: "Smash Hits",
                            alertid: 11,
                            belongCD: 13,
                            cdIdx: 0,
                            interval: 223,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 24775,
                                    mid: "0037UvKZ1DnfqA",
                                    name: "Steel Pulse"
                                }
                            ],
                            size128: 3572119,
                            size320: 8929938,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6002382,
                            songid: 102399558,
                            songmid: "000i7Qrj2XqpJy",
                            songname: "Leggo Beast",
                            songorig: "Leggo Beast",
                            songtype: 0,
                            strMediaMid: "000i7Qrj2XqpJy",
                            stream: 8,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 122930,
                            albummid: "002f7TNe0hrCaF",
                            albumname: "Nile",
                            alertid: 100002,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 234,
                            isonly: 1,
                            label: "4611686018427523088",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 13131,
                                    mid: "0001aQW70E8Whs",
                                    name: "Patrice"
                                }
                            ],
                            size128: 3758923,
                            size320: 9397100,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4846589,
                            songid: 1525771,
                            songmid: "004C0sOc3drzLs",
                            songname: "Soulstorm",
                            songorig: "Soulstorm",
                            songtype: 0,
                            strMediaMid: "004C0sOc3drzLs",
                            stream: 10,
                            switch: 636675,
                            type: 0,
                            vid: "i0022xz5dsz"
                        },
                        {
                            albumdesc: "",
                            albumid: 435398,
                            albummid: "0023io9r221pTa",
                            albumname: "You Girl (feat. Ne-Yo) - Single",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 245,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 373,
                                    mid: "003GzM0V2ASdtn",
                                    name: "Shaggy"
                                },
                                {
                                    id: 7144,
                                    mid: "000AIwoO1CXHCg",
                                    name: "Ne-Yo"
                                }
                            ],
                            size128: 3923676,
                            size320: 9808751,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5380296,
                            songid: 4996851,
                            songmid: "000G4MGj3RVKT2",
                            songname: "You Girl",
                            songorig: "You Girl",
                            songtype: 0,
                            strMediaMid: "000G4MGj3RVKT2",
                            stream: 8,
                            switch: 3225399,
                            type: 0,
                            vid: "a0013k53vhu"
                        },
                        {
                            albumdesc: "",
                            albumid: 756922,
                            albummid: "002zP8Ng1tLBl5",
                            albumname: "The Original Music Factory Collection: Reggae",
                            alertid: 11,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 246,
                            isonly: 0,
                            label: "4611686018427518976",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 705,
                                    mid: "000FtIxl4DdhMA",
                                    name: "Gregory Isaacs"
                                }
                            ],
                            size128: 3940859,
                            size320: 9851297,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5354426,
                            songid: 8254063,
                            songmid: "002Pz7YK315y5c",
                            songname: "House of the Rising Sun",
                            songorig: "House of the Rising Sun",
                            songtype: 0,
                            strMediaMid: "002Pz7YK315y5c",
                            stream: 2,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 45704,
                            albummid: "000LS2jg3s8LBG",
                            albumname: "Legend: The Best Of Bob Marley And The Wailers",
                            alertid: 11,
                            belongCD: 15,
                            cdIdx: 0,
                            interval: 211,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11036,
                                    mid: "002FIKJs2pOaTl",
                                    name: "Bob Marley"
                                }
                            ],
                            size128: 3385353,
                            size320: 8462930,
                            size5_1: 0,
                            sizeape: 20585169,
                            sizeflac: 20982237,
                            sizeogg: 5186370,
                            songid: 106704519,
                            songmid: "004IJZWH2ROq7A",
                            songname: "Jamming",
                            songorig: "Jamming",
                            songtype: 0,
                            strMediaMid: "004IJZWH2ROq7A",
                            stream: 0,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1065863,
                            albummid: "004ApeZ71xFwsi",
                            albumname: "Youth",
                            alertid: 100002,
                            belongCD: 7,
                            cdIdx: 0,
                            interval: 240,
                            isonly: 1,
                            label: "4611686018427519056",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 10200,
                                    mid: "002uhZEM1Ipk2L",
                                    name: "MatisYahu"
                                }
                            ],
                            size128: 3845476,
                            size320: 9613313,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5651755,
                            songid: 103172551,
                            songmid: "0026hfn24YoEGS",
                            songname: "Jerusalem (Album Version)",
                            songorig: "Jerusalem",
                            songtype: 0,
                            strMediaMid: "0026hfn24YoEGS",
                            stream: 3,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 527842,
                            albummid: "001QKEMz4BhQqv",
                            albumname: "Kingdom Of Zion",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 199,
                            isonly: 1,
                            label: "4611686018427388176",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 121008,
                                    mid: "004D79xq1VuEyg",
                                    name: "Alborosie"
                                }
                            ],
                            size128: 3186356,
                            size320: 7994136,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4629697,
                            songid: 5642558,
                            songmid: "0009kif74JqAAc",
                            songname: "Kingdom of Zion",
                            songorig: "Kingdom of Zion",
                            songtype: 0,
                            strMediaMid: "0009kif74JqAAc",
                            stream: 2,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1114968,
                            albummid: "003LyVtB35sPhf",
                            albumname: "Sun Is Shining",
                            alertid: 11,
                            belongCD: 13,
                            cdIdx: 0,
                            interval: 131,
                            isonly: 0,
                            label: "4611686018429620304",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11036,
                                    mid: "002FIKJs2pOaTl",
                                    name: "Bob Marley"
                                }
                            ],
                            size128: 2099661,
                            size320: 5248774,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 1965536,
                            songid: 103830212,
                            songmid: "003ZxnQQ1hk2H2",
                            songname: "Sun Is Shining",
                            songorig: "Sun Is Shining",
                            songtype: 0,
                            strMediaMid: "003ZxnQQ1hk2H2",
                            stream: 8,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 319850,
                            albummid: "0027oGoN3M4fnz",
                            albumname: "The Very Best Of Eek-A-Mouse Vol.2",
                            alertid: 11,
                            belongCD: 7,
                            cdIdx: 0,
                            interval: 232,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 93833,
                                    mid: "003YmQhf0W5zeo",
                                    name: "Eek A Mouse"
                                }
                            ],
                            size128: 3714281,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 3764376,
                            songmid: "004bGcSa3owq4n",
                            songname: "Ganja Smuggling",
                            songorig: "Ganja Smuggling",
                            songtype: 0,
                            strMediaMid: "004bGcSa3owq4n",
                            stream: 10,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 51002,
                            albummid: "000A1ruv4QIKkY",
                            albumname: "Child of a King",
                            alertid: 100002,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 240,
                            isonly: 1,
                            label: "4611686018427388176",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 10252,
                                    mid: "0031dbkQ17G2ro",
                                    name: "Luciano"
                                }
                            ],
                            size128: 3848400,
                            size320: 9620625,
                            size5_1: 0,
                            sizeape: 28233751,
                            sizeflac: 28575556,
                            sizeogg: 5284664,
                            songid: 1328379,
                            songmid: "0023Q6eM2ZGGnn",
                            songname: "So Much Goin on",
                            songorig: "So Much Goin on",
                            songtype: 0,
                            strMediaMid: "0023Q6eM2ZGGnn",
                            stream: 2,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1956240,
                            albummid: "000HKQ172LTq7k",
                            albumname: "The Best Of Inner Circle",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 226,
                            isonly: 1,
                            label: "0",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 1935,
                                    mid: "000yZ3Nn2LnaIr",
                                    name: "Inner Circle"
                                },
                                {
                                    id: 32784,
                                    mid: "00391wAn1YYwhx",
                                    name: "Lady Saw"
                                }
                            ],
                            size128: 3618990,
                            size320: 9047026,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5501183,
                            songid: 201531084,
                            songmid: "003tjSM03A9ziT",
                            songname: "Sweat (A La La La La Long)",
                            songorig: "Sweat (A La La La La Long)",
                            songtype: 0,
                            strMediaMid: "003tjSM03A9ziT",
                            stream: 0,
                            switch: 3745591,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 45893,
                            albummid: "000l0K8Y4EPPmx",
                            albumname: "不速之客",
                            alertid: 11,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 260,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8693,
                                    mid: "002EsYhB2XgVe5",
                                    name: "Jimmy Cliff"
                                }
                            ],
                            size128: 4173783,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 549416,
                            songmid: "004KCpdO1dFMM8",
                            songname: "Rivers Of Babylon",
                            songorig: "Rivers Of Babylon",
                            songtype: 0,
                            strMediaMid: "004KCpdO1dFMM8",
                            stream: 1,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 51399,
                            albummid: "001GztcI0Go9Vc",
                            albumname: "20th Century Masters: The Millennium Collection - The Best Of Third World",
                            alertid: 11,
                            belongCD: 7,
                            cdIdx: 0,
                            interval: 207,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 17713,
                                    mid: "0049vDOu1ec0J9",
                                    name: "Third World"
                                }
                            ],
                            size128: 3323153,
                            size320: 8307316,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5161953,
                            songid: 604563,
                            songmid: "00116dnz0an978",
                            songname: "Reggae Ambassador",
                            songorig: "Reggae Ambassador",
                            songtype: 0,
                            strMediaMid: "001G7BpY42ah2W",
                            stream: 6,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 100449,
                            albummid: "0019eFW22rtzcI",
                            albumname: "Strength to Survive",
                            alertid: 11,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 253,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 42530,
                                    mid: "001l0JiL1f93m7",
                                    name: "SOJA"
                                }
                            ],
                            size128: 4058698,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 1188847,
                            songmid: "000Skwti0UStiW",
                            songname: "Not Done Yet",
                            songorig: "Not Done Yet",
                            songtype: 0,
                            strMediaMid: "000Skwti0UStiW",
                            stream: 9,
                            switch: 1128211,
                            type: 0,
                            vid: "m00178iaupd"
                        },
                        {
                            albumdesc: "",
                            albumid: 100430,
                            albummid: "001TJF2O4AUYe6",
                            albumname: "KuschelRock 25",
                            alertid: 11,
                            belongCD: 3,
                            cdIdx: 0,
                            interval: 237,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 738,
                                    mid: "002WBIBr2aFjJW",
                                    name: "Seal"
                                }
                            ],
                            size128: 3795753,
                            size320: 9495257,
                            size5_1: 0,
                            sizeape: 28298656,
                            sizeflac: 28650697,
                            sizeogg: 5875672,
                            songid: 1188509,
                            songmid: "00416MBB49CPKy",
                            songname: "Wedding Day (Duet With Heidi)",
                            songorig: "Wedding Day (Duet With Heidi)",
                            songtype: 0,
                            strMediaMid: "00416MBB49CPKy",
                            stream: 10,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 45704,
                            albummid: "000LS2jg3s8LBG",
                            albumname: "Legend: The Best Of Bob Marley And The Wailers",
                            alertid: 11,
                            belongCD: 4,
                            cdIdx: 0,
                            interval: 181,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11036,
                                    mid: "002FIKJs2pOaTl",
                                    name: "Bob Marley"
                                }
                            ],
                            size128: 2910293,
                            size320: 7251916,
                            size5_1: 0,
                            sizeape: 20448531,
                            sizeflac: 21135225,
                            sizeogg: 4434066,
                            songid: 547424,
                            songmid: "004Kr4of3S383B",
                            songname: "Three Little Birds",
                            songorig: "Three Little Birds",
                            songtype: 0,
                            strMediaMid: "004Kr4of3S383B",
                            stream: 6,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 101064,
                            albummid: "001J363q1UXyed",
                            albumname: "Doo-Wops & Hooligans (Deluxe Version)",
                            alertid: 11,
                            belongCD: 8,
                            cdIdx: 0,
                            interval: 229,
                            isonly: 0,
                            label: "4611686018435911696",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 21414,
                                    mid: "001F1svH2tTpsC",
                                    name: "Bruno Mars"
                                },
                                {
                                    id: 10886,
                                    mid: "003ztvNq1SvFXx",
                                    name: "Damian Marley"
                                }
                            ],
                            size128: 3668889,
                            size320: 9155017,
                            size5_1: 0,
                            sizeape: 26028112,
                            sizeflac: 26648430,
                            sizeogg: 4950214,
                            songid: 726294,
                            songmid: "0044dXES498dfM",
                            songname: "Liquor Store Blues",
                            songorig: "Liquor Store Blues",
                            songtype: 0,
                            strMediaMid: "0044dXES498dfM",
                            stream: 1,
                            switch: 3225399,
                            type: 0,
                            vid: "a002209gs3h"
                        },
                        {
                            albumdesc: "",
                            albumid: 8832,
                            albummid: "003Xw1GI0nYJ7Z",
                            albumname: "Goleo VI Presents His 2006 FIFA World Cup Hits",
                            alertid: 11,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 220,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 10886,
                                    mid: "003ztvNq1SvFXx",
                                    name: "Damian Marley"
                                },
                                {
                                    id: 17963,
                                    mid: "00439ziG2lAqe4",
                                    name: "Stephen Marley"
                                },
                                {
                                    id: 8187,
                                    mid: "003wTgoV15oU6p",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 3521271,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 106870,
                            songmid: "003j0kTn2Ia1Fa",
                            songname: "Could You Be Loved",
                            songorig: "Could You Be Loved",
                            songtype: 0,
                            strMediaMid: "003j0kTn2Ia1Fa",
                            stream: 8,
                            switch: 1124115,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 45704,
                            albummid: "000LS2jg3s8LBG",
                            albumname: "Legend: The Best Of Bob Marley And The Wailers",
                            alertid: 11,
                            belongCD: 5,
                            cdIdx: 0,
                            interval: 257,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11036,
                                    mid: "002FIKJs2pOaTl",
                                    name: "Bob Marley"
                                }
                            ],
                            size128: 4116380,
                            size320: 10290473,
                            size5_1: 0,
                            sizeape: 27229725,
                            sizeflac: 28020703,
                            sizeogg: 6516883,
                            songid: 106692755,
                            songmid: "000LplO01JFEdb",
                            songname: "Buffalo Soldier",
                            songorig: "Buffalo Soldier",
                            songtype: 0,
                            strMediaMid: "000LplO01JFEdb",
                            stream: 0,
                            switch: 3225399,
                            type: 0,
                            vid: "h0011j53dvp"
                        },
                        {
                            albumdesc: "",
                            albumid: 58728,
                            albummid: "002TyFWK3jDP6J",
                            albumname: "The Love & War Masterpeace - Deluxe Version",
                            alertid: 11,
                            belongCD: 16,
                            cdIdx: 0,
                            interval: 321,
                            isonly: 0,
                            label: "4611686018427392016",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12526,
                                    mid: "000ynCa01MEpzG",
                                    name: "Raheem DeVaughn"
                                }
                            ],
                            size128: 5146265,
                            size320: 12865135,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 6933137,
                            songid: 694275,
                            songmid: "000nPKjR2CxtEz",
                            songname: "Revelations 2010 Ft. Damian Ma",
                            songorig: "Revelations 2010 Ft. Damian Ma",
                            songtype: 0,
                            strMediaMid: "0047LBLU1PwwOP",
                            stream: 3,
                            switch: 3221303,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 95022,
                            albummid: "003fbeRb1N2Tg4",
                            albumname: "Playlist-The Very Best Of Wyclef Jean",
                            alertid: 11,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 109,
                            isonly: 1,
                            label: "4611686018427388944",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12246,
                                    mid: "0047NBei1wcwTk",
                                    name: "Wyclef Jean"
                                }
                            ],
                            size128: 1757454,
                            size320: 4392697,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 2440085,
                            songid: 102690266,
                            songmid: "000TKdWY05FgbC",
                            songname: "Knockin' On Heaven's Door (Album Version)",
                            songorig: "Knockin' On Heaven's Door",
                            songtype: 0,
                            strMediaMid: "000TKdWY05FgbC",
                            stream: 2,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 128680,
                            albummid: "0014NOIl42k9jm",
                            albumname: "Journey",
                            alertid: 11,
                            belongCD: 13,
                            cdIdx: 0,
                            interval: 247,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12989,
                                    mid: "003LWJkL2xbQnM",
                                    name: "Ky-mani Marley"
                                }
                            ],
                            size128: 3960815,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 1604413,
                            songmid: "004aLs7s37hhwT",
                            songname: "Warriors",
                            songorig: "Warriors",
                            songtype: 0,
                            strMediaMid: "004aLs7s37hhwT",
                            stream: 10,
                            switch: 1128211,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1190568,
                            albummid: "0025SCxa0CwkUh",
                            albumname: "Revelation Part 1: The Root Of Life",
                            alertid: 100002,
                            belongCD: 14,
                            cdIdx: 0,
                            interval: 251,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 17963,
                                    mid: "00439ziG2lAqe4",
                                    name: "Stephen Marley"
                                }
                            ],
                            size128: 4021091,
                            size320: 10052051,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5835801,
                            songid: 104866106,
                            songmid: "003Imsyz3N6DWV",
                            songname: "Now I Know (Album Version)",
                            songorig: "Now I Know",
                            songtype: 0,
                            strMediaMid: "003Imsyz3N6DWV",
                            stream: 8,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 435441,
                            albummid: "00024qqy3d4XYZ",
                            albumname: "RIOT (feat.Damian Marley) - Single",
                            alertid: 11,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 199,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 8064,
                                    mid: "003hdvHN1nYWt0",
                                    name: "Sean Paul"
                                },
                                {
                                    id: 10886,
                                    mid: "003ztvNq1SvFXx",
                                    name: "Damian Marley"
                                }
                            ],
                            size128: 3201465,
                            size320: 8001256,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4248180,
                            songid: 4997144,
                            songmid: "000sCCt03MKNmp",
                            songname: "RIOT",
                            songorig: "RIOT",
                            songtype: 0,
                            strMediaMid: "000sCCt03MKNmp",
                            stream: 1,
                            switch: 3225399,
                            type: 0,
                            vid: "z0013nhrtq5"
                        },
                        {
                            albumdesc: "",
                            albumid: 458653,
                            albummid: "001KbCXQ1JQmLS",
                            albumname: "Magic In The Air (feat. Chawki)",
                            alertid: 100002,
                            belongCD: 1,
                            cdIdx: 0,
                            interval: 232,
                            isonly: 1,
                            label: "4611686018427387920",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 4069,
                                    mid: "004WZW3605PfYy",
                                    name: "Magic System"
                                },
                                {
                                    id: 119440,
                                    mid: "001vMQWS24AWdX",
                                    name: "Schawkie Roth"
                                }
                            ],
                            size128: 3728489,
                            size320: 9320783,
                            size5_1: 0,
                            sizeape: 30700119,
                            sizeflac: 30782865,
                            sizeogg: 5689075,
                            songid: 5214934,
                            songmid: "004UsGl70gk6Tk",
                            songname: "Magic In The Air",
                            songorig: "Magic In The Air",
                            songtype: 0,
                            strMediaMid: "001Sx67M3omSfZ",
                            stream: 3,
                            switch: 636675,
                            type: 0,
                            vid: "i0017j17zry"
                        },
                        {
                            albumdesc: "",
                            albumid: 1033529,
                            albummid: "004epAzX0gmReB",
                            albumname: "The Wide World Over: A 40 Year Celebration",
                            alertid: 11,
                            belongCD: 19,
                            cdIdx: 0,
                            interval: 262,
                            isonly: 1,
                            label: "4611686018429485072",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 1000133,
                                    mid: "00420aSr3GwuHx",
                                    name: "The Chieftains featuring Ziggy Marley"
                                },
                                {
                                    id: 178770,
                                    mid: "001q8Mk01x3MWf",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 4208825,
                            size320: 10521471,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5979573,
                            songid: 102802689,
                            songmid: "003IL00L4ANTSe",
                            songname: "Redemption Song (New Release)",
                            songorig: "Redemption Song",
                            songtype: 0,
                            strMediaMid: "003IL00L4ANTSe",
                            stream: 9,
                            switch: 3749687,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 140071,
                            albummid: "0037Aeoi4TANBS",
                            albumname: "Masquerade",
                            alertid: 100002,
                            belongCD: 8,
                            cdIdx: 0,
                            interval: 226,
                            isonly: 1,
                            label: "4611686018427388944",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 12246,
                                    mid: "0047NBei1wcwTk",
                                    name: "Wyclef Jean"
                                }
                            ],
                            size128: 3622706,
                            size320: 9056479,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 5169978,
                            songid: 1779780,
                            songmid: "0039heI83NQvOW",
                            songname: "Party Like I Party",
                            songorig: "Party Like I Party",
                            songtype: 0,
                            strMediaMid: "0039heI83NQvOW",
                            stream: 1,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 789427,
                            albummid: "002o46k22asWA4",
                            albumname: "Awake",
                            alertid: 100002,
                            belongCD: 2,
                            cdIdx: 0,
                            interval: 339,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 28294,
                                    mid: "001dXXpt0ekmPN",
                                    name: "Julian Marley"
                                }
                            ],
                            size128: 5430773,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 9238341,
                            songmid: "000l1DPB2QnpY9",
                            songname: "Boom Draw",
                            songorig: "Boom Draw",
                            songtype: 0,
                            strMediaMid: "000l1DPB2QnpY9",
                            stream: 7,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1716636,
                            albummid: "001Iurh81NraAK",
                            albumname: "The Complete Concert at Oakland Auditorium, Ca. Nov 30th, 1979 (Doxy Collection, Remastered, Live on Fm Broadcasting)",
                            alertid: 100002,
                            belongCD: 10,
                            cdIdx: 0,
                            interval: 445,
                            isonly: 1,
                            label: "4611686018427518992",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 11036,
                                    mid: "002FIKJs2pOaTl",
                                    name: "Bob Marley"
                                }
                            ],
                            size128: 7127500,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 109448016,
                            songmid: "002OX0bQ3vavIL",
                            songname: "No Woman No Cry",
                            songorig: "No Woman No Cry",
                            songtype: 0,
                            strMediaMid: "002OX0bQ3vavIL",
                            stream: 0,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 1064568,
                            albummid: "002Lt78l1cVYKs",
                            albumname: "Cats and Dogs: The Revenge of Kitty Galore",
                            alertid: 100002,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 173,
                            isonly: 1,
                            label: "4611686018427387920",
                            msgid: 14,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 1,
                                payinfo: 1,
                                payplay: 0,
                                paytrackmouth: 1,
                                paytrackprice: 200,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 178770,
                                    mid: "001q8Mk01x3MWf",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 2779724,
                            size320: 6948867,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 4573067,
                            songid: 103155677,
                            songmid: "002Jejsb0DkzeJ",
                            songname: "Friend",
                            songorig: "Friend",
                            songtype: 0,
                            strMediaMid: "002Jejsb0DkzeJ",
                            stream: 8,
                            switch: 636675,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 204491,
                            albummid: "000svvuh10xjHe",
                            albumname: "FIFA 06",
                            alertid: 11,
                            belongCD: 9,
                            cdIdx: 0,
                            interval: 211,
                            isonly: 0,
                            label: "4611686018427387920",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 10886,
                                    mid: "003ztvNq1SvFXx",
                                    name: "Damian Marley"
                                }
                            ],
                            size128: 3380691,
                            size320: 0,
                            size5_1: 0,
                            sizeape: 0,
                            sizeflac: 0,
                            sizeogg: 0,
                            songid: 2566172,
                            songmid: "000vtBPh2RNAi6",
                            songname: "Welcome To Jamrock",
                            songorig: "Welcome To Jamrock",
                            songtype: 0,
                            strMediaMid: "000vtBPh2RNAi6",
                            stream: 1,
                            switch: 1128211,
                            type: 0,
                            vid: ""
                        },
                        {
                            albumdesc: "",
                            albumid: 480026,
                            albummid: "002GBmfG33kaNe",
                            albumname: "Fly Rasta",
                            alertid: 11,
                            belongCD: 6,
                            cdIdx: 0,
                            interval: 202,
                            isonly: 0,
                            label: "4611686018427518992",
                            msgid: 0,
                            pay: {
                                payalbum: 0,
                                payalbumprice: 0,
                                paydownload: 0,
                                payinfo: 0,
                                payplay: 0,
                                paytrackmouth: 0,
                                paytrackprice: 0,
                                timefree: 0
                            },
                            preview: {
                                trybegin: 0,
                                tryend: 0,
                                trysize: 0
                            },
                            rate: 0,
                            singer: [
                                {
                                    id: 178770,
                                    mid: "001q8Mk01x3MWf",
                                    name: "Ziggy Marley"
                                }
                            ],
                            size128: 3249026,
                            size320: 8122222,
                            size5_1: 0,
                            sizeape: 23509171,
                            sizeflac: 23686266,
                            sizeogg: 4639206,
                            songid: 102631339,
                            songmid: "003YPYcr0dZU76",
                            songname: "You",
                            songorig: "You",
                            songtype: 0,
                            strMediaMid: "003YPYcr0dZU76",
                            stream: 6,
                            switch: 3225399,
                            type: 0,
                            vid: ""
                        }
                    ],
                    visitnum: 1010726,
                    cmtnum: 0,
                    buynum: 0,
                    scoreavage: "0.0",
                    scoreusercount: 0
                }
            ],
            realcdnum: 1
        }
}