var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var app = express()

var apiRouter = express.Router()

apiRouter.get('/getTopList', function (req, res) {
    var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/w/toplist.html?ADTAG=newyqq.toplist&type=0&id=4',
            host: 'y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})

apiRouter.get('/lyric', function (req, res) {
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        var ret = response.data
        if (typeof ret === 'string')
        {
            var reg = /^\w+\(({[^()]+})\)$/
            var matches = ret.match(reg)
            if (matches)
            {
                ret = JSON.parse(matches[1])
            }
        }
        res.json(ret)
    }).catch((e) => {
        console.log(e)
    })
})

app.use('/api', apiRouter)
app.use(express.static('./dist'))
var port = process.env.PORT || config.build.port
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('listen at localhost:' + port)
})