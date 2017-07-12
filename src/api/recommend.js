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

export function getDiscList () {
	// const url = '/api/getDiscList'
	// const data = Object.assign({}, commonParams, {
	// 	platform: 'yqq',
	// 	hostUin: 0,
	// 	loginUin: 0,
	// 	sin: 0,
	// 	ein: 29,
	// 	sortId: 5,
	// 	needNewCode: 0,
	// 	categoryId: 10000000,
	// 	rnd: Math.random()
	// })
	/**
	 * 没取到数据很烦，暂时先用假数据
	 * */
	// return axios.get(url, {
	// 	params: data
	// }).then((res) => {
	// 	return Promise.resolve(res.data)
	// })
	return {
		"categoryId": 10000000,
		"ein": 29,
		"list": [
			{
				"commit_time": "2017-01-15",
				"createtime": "2017-01-15",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "开心地笑",
					"qq": 1776206658,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "3245155185",
				"dissname": "〈藏语〉在离天堂最近的地方，听经幡在风中",
				"imgurl": "http://p.qpic.cn/music_cover/1HFn1Rm4ztLiaPmN5cz0jGwMeRdB51OJNicmTVEkzOersU4ooxzuUNBw/600?n=1",
				"introduction": "西藏，多少人在向往。总是会听到身边的朋友：一生一定要去一趟西藏当你背起登山包问",
				"listennum": 241694,
				"score": 0,
				"version": 9
			},
			{
				"commit_time": "2016-12-11",
				"createtime": "2016-12-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "Holt",
					"qq": 836791930,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "846143343",
				"dissname": "听！那是来自苏格兰高地的风声",
				"imgurl": "http://p.qpic.cn/music_cover/9s8qhUCdhaJxWbibVsXbJlymyosnj2HCugicVRoPW07wtAYDj3jicLLbA/600?n=1",
				"introduction": "本期给小伙伴们推荐来自苏格兰高山地区的纯正风笛&#126;&#60;br&#62;我懒，以下全是复制来的&#126;  虽然",
				"listennum": 137643,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "Eight&#32;Weeks",
					"qq": 1057027131,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1167578487",
				"dissname": "欧美丨声线撩人，一秒倾心的男女对唱",
				"imgurl": "http://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDLwKZibvv3Q9XQkLY5BkhW9K5f2eGJysU8fg/600?n=1",
				"introduction": "音乐是心灵的直接“语言”，是听觉的艺术，是心情的艺术，更是灵魂的完美表现。歌单中",
				"listennum": 234699,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-04-12",
				"createtime": "2017-04-12",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "１&#39;s&#32;&#32;&#32;ヽ",
					"qq": 544169694,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2055914711",
				"dissname": "粤语独白：说的比唱的还动人",
				"imgurl": "http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT4N3AHWQicXzkUBSicz54phSYERNJOz4OW3Q/600?n=1",
				"introduction": "喜欢听粤语歌，绵绵的语调，越听越心动，许多粤语歌里带着缠绵深情的独白，听起来，比",
				"listennum": 200489,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "陈大笑",
					"qq": 956511791,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1126087770",
				"dissname": "『古风』凄凄思慕任留恋，阑珊过往笙踏歌",
				"imgurl": "http://p.qpic.cn/music_cover/ZDLEKeREib5g7SWB7wGCZEAKW2X2icN9gaDcyYRnz5CiaXPJvEBBZ79RQ/600?n=1",
				"introduction": "谁将烟焚散，散了纵横的牵绊。听弦断，断那三千痴缠。坠花湮，湮没一朝风涟。花若怜",
				"listennum": 75220,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "许菲妮",
					"qq": 778583474,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2066162771",
				"dissname": "「电子音乐」性感声线诱惑销魂，勾人耳目",
				"imgurl": "http://p.qpic.cn/music_cover/icVSvicxhfMd52Ukbibm9UOt4pFvO39m3mr1T5SdA0tSiaMdWOOe9SDI0g/600?n=1",
				"introduction": "各位小伙伴，大家好首先感谢大家的支持本期小伴伙们耳朵有福了本期主题&#32;“性感”歌",
				"listennum": 108453,
				"score": 0,
				"version": 6
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "QQ音乐人",
					"qq": 3393466915,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2372550215",
				"dissname": "中国摇滚&#32;&#124;&#32;红旗下的黄金一代",
				"imgurl": "http://p.qpic.cn/music_cover/qTKgAXria5IC0DIibN2H9Eiak8nq2ibn4MMJ9h8uemP4xClCveUSIrDQGQ/600?n=1",
				"introduction": "20世纪90年代，中国摇滚音乐历经短暂的爆发之后，进入了长久的沉眠。但这十年，在特殊",
				"listennum": 28109,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-10",
				"createtime": "2017-07-10",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "掌心薔薇開",
					"qq": 301096031,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1168680484",
				"dissname": "治愈系：唯美钢琴，时间的艺术",
				"imgurl": "http://p.qpic.cn/music_cover/e8Jvd83AZrRbhqofb1ES4J8TQ5zfETBbhmHkUhDicHPPQkrY6YRKWicA/600?n=1",
				"introduction": "音乐表达出来的是一种情绪，一种氛围，而每个人受多重因素影响所能感受的也不同。而黑",
				"listennum": 52006,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "伊人独醉",
					"qq": 1414855896,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2667970558",
				"dissname": "【日本Top35】经典动漫电影&#45;原声带",
				"imgurl": "http://p.qpic.cn/music_cover/eO1iarCrMC5jNLJicQibtNolrOvS4QQ8tX4U8uiceprHvPrdpicHNX8K2UA/600?n=1",
				"introduction": "1《千与千寻》该片折射出了很多道理2003年获奥斯卡最佳长篇动画奖，是历史上第一部，至",
				"listennum": 40969,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "鹿泺",
					"qq": 1134746874,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2067055844",
				"dissname": "7月12日｜永远15岁的吃货殿下生日快乐",
				"imgurl": "http://p.qpic.cn/music_cover/zvTEv4nf24OhibNkHicltqWASn6quUDoVypYPphyCJSqq56ZheJrkP0w/600?n=1",
				"introduction": "天依儿生日快乐！话说天依有没有注意到我对《喵呜不帕》的评论日期是520哦～祝我永远",
				"listennum": 33152,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "迷幻",
					"qq": 2486402296,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2672245431",
				"dissname": "成人世界的童话镇：我的扫帚只能清理垃圾堆",
				"imgurl": "http://p.qpic.cn/music_cover/jNQC9CSKrxZdkMjvHC4nwnkK1kEGGiaG8IL0ibMW3yffhdNh2Gsd0Cww/600?n=1",
				"introduction": "《童话镇》是独立音乐人暗杠的原创作品，是一首由斗鱼观众作词，暗杠小发作曲，主播和",
				"listennum": 17793,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "随风",
					"qq": 3153936651,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1170293601",
				"dissname": "最悠久爵士音乐节：Montreux&#32;Jazz&#32;2017阵容",
				"imgurl": "http://p.qpic.cn/music_cover/zQaicIWxK9eIGux02nRsJycz70cRibwKeCicD1CeM4mqOO28NXpv0kJLA/600?n=1",
				"introduction": "THE 2017 LINEUP&#60;br&#62;&#60;br&#62;ALA&#46;NI&#60;br&#62;ALBIN DE LA SIMONE&#60;br&#62;ALDOUS HARDING&#60;br&#62;ALT&#45;J&#60;br&#62;AMBROSE AKINMUSIRE&#60;br&#62;ÂME&#60;br&#62;A",
				"listennum": 20874,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-11",
				"createtime": "2017-07-11",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "魔境仙踪",
					"qq": 2168328674,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2056135122",
				"dissname": "西北民歌，一声吆喝的酣畅",
				"imgurl": "http://p.qpic.cn/music_cover/COXrdTQykNfK2FHPjhcSnMapgGmwHRjMudK5eXIB3RduodB2psABDQ/600?n=1",
				"introduction": "西北的地理环境造就了多样的景色，让我们在这趟旅程中任性地享受着大自然的鬼斧神工，",
				"listennum": 47384,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-10",
				"createtime": "2017-07-10",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "Allen",
					"qq": 3024244602,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1472425879",
				"dissname": "不敢想象：假如华语乐坛没有这50位作曲人",
				"imgurl": "http://p.qpic.cn/music_cover/ibntviciboJuwCoCNK8ibZkjesbeBcPVgx4SxfTmb9lJaXAuLU7yEGwf9A/600?n=1",
				"introduction": "简介：前部分为香港10大作曲人&#60;br&#62;后面是内地加台湾加最近有很惊艳作品的作曲人，独立音",
				"listennum": 1987959,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-10",
				"createtime": "2017-07-10",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "Pchueng",
					"qq": 2168499104,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2067922290",
				"dissname": "华语说唱界的冰镇牛奶，大笑是不是你？",
				"imgurl": "http://p.qpic.cn/music_cover/1jL46ZxbJU24cibibFibZ8vekSDmv49slSUJcOkcdMf3c8MppVY7triccA/600?n=1",
				"introduction": "大约在上世纪90年代，嘻哈文化进入中国，但发展一直非常缓慢，《中国有嘻哈》却是今年",
				"listennum": 77992,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-10",
				"createtime": "2017-07-10",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "私はとても良いです",
					"qq": 3342379852,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1472417861",
				"dissname": "《悟空传》上映：盘点以西游记为原型的影视",
				"imgurl": "http://p.qpic.cn/music_cover/ZUBQpASRAicibpY9a3gJPTeeCFiaCyNNKvtEQ3hPQiaHbdGJg3aqfhZOlQ/600?n=1",
				"introduction": "《悟空传》是新丽电影、磨铁娱乐和上海三次元影业  联合出品的奇幻电影，由郭子健执",
				"listennum": 65613,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-10",
				"createtime": "2017-07-10",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "我是个讲道理的人",
					"qq": 2523668458,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "3269700004",
				"dissname": "我们的影视曲专业户胡夏先生",
				"imgurl": "http://p.qpic.cn/music_cover/rbKoTQdkPFC5FFC95YibQL3LibnkR97syk9iaQ3WeLw7TJicc3DfFP2LCg/600?n=1",
				"introduction": "2011年九把刀电影《那些年，我们一起追的女孩》主题曲，收录在《那些年，我们一起追的",
				"listennum": 37646,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "十梦九你",
					"qq": 674637574,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2066471816",
				"dissname": "宛如细雨的女声让人沉醉在那股凉意中",
				"imgurl": "http://p.qpic.cn/music_cover/zmsrxiclIyfL4fvWRkSgicZQSicBLCAIofrt8sfowGUwdxoZIoafTE8bg/600?n=1",
				"introduction": "有时候会被一首歌的旋律触动心灵，勾起心里很多很多沉寂的往事，那些女嗓会让你情不自",
				"listennum": 165274,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "LAN费曼",
					"qq": 3527181498,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "3269178393",
				"dissname": "50张最佳英伦摇滚专辑：美国杂志Pitchfork",
				"imgurl": "http://p.qpic.cn/music_cover/bExxovQqJ1rzMJ7pblQUuwC9HlxMJKT6AOnDKOgqHNYVsKicCojecEg/600?n=1",
				"introduction": "Pitchfork&#58; The 50 Best Britpop &#60;br&#62;详情看官网，有写明哪些专辑&#60;br&#62;&#60;br&#62;pitchfork评选50张最佳英伦",
				"listennum": 525257,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "嘻哈RAP",
					"qq": 3436190788,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "3269290586",
				"dissname": "你还记得22年前仙剑奇侠传带来的感动吗&#63;",
				"imgurl": "http://p.qpic.cn/music_cover/5FKwW48K0SKzFf7JsuMqicRIYn3XKAVgnjabico8MFd2XUv7YNdrficOw/600?n=1",
				"introduction": "封面好难找到我喜欢的，呜呜呜，编辑好坑啊，一直让我改，第一次做歌单，不知道该怎么",
				"listennum": 368543,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "。。。",
					"qq": 3043667928,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "3269279742",
				"dissname": "《我为歌狂》重制，回顾那些暴露年龄的动漫",
				"imgurl": "http://p.qpic.cn/music_cover/ia1BhHY0pBXp25tpaaiaCzRdNB7v8nvl58e4aZIWJIEH8INvNXyxf10g/600?n=1",
				"introduction": "记得第一次看好像还是小学5年级，第一次看偶像剧般的动漫。被楚天歌和叶峰帅的不要不",
				"listennum": 301423,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-07",
				"createtime": "2017-07-07",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "梦想家",
					"qq": 2468098375,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2372544942",
				"dissname": "Melanie&#32;Martinez&#32;｜病娇少女的黑暗狂想曲",
				"imgurl": "http://p.qpic.cn/music_cover/QO5xXgIicpcC5IGXW8d8sdAKvZdFR59iaLoUCNoqbxlAopwibOrZLhibdA/600?n=1",
				"introduction": "&#35;安利&#35;&#60;br&#62;MelanieMartinez牙缝妹，绵羊音暗黑萝莉。&#60;br&#62;她的每一首歌都是一部暗黑童话，讲述",
				"listennum": 245239,
				"score": 0,
				"version": 15
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "洋洋是最好的同事",
					"qq": 3380894062,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "1471890606",
				"dissname": "小学音乐教材收录：小朋友们表示我会我自豪",
				"imgurl": "http://p.qpic.cn/music_cover/zWCNLN3V0q2gPozlT2JcfUrBDaTB2UDnujiapABvXbwLBaicaeJsB5ww/600?n=1",
				"introduction": "老师常说，学习要学会提前预习，音乐课也是啊！提前学会这些儿歌，上课的时候，其他小",
				"listennum": 108355,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "李狗蛋",
					"qq": 1602037810,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "874845619",
				"dissname": "妈妈歌单常备&#58;幼龄儿歌大全",
				"imgurl": "http://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1UgpMfJ7RDC8VJ4bZxJAkooUMslyC2A1uAA/600?n=1",
				"introduction": "歌单挑选的都是我小时候听过的儿歌，即使到了现在我还是听喜欢的。这些都是适合儿童听",
				"listennum": 94393,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "到底是谁，在背后说我帅",
					"qq": 3257673805,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2372552655",
				"dissname": "诗与远方音乐节：关于诗歌与音乐的对话",
				"imgurl": "http://p.qpic.cn/music_cover/Epqq26mXexIV5ibAPicN4vMuvuAevqDEFviblXcMDibJSHbmrnibbvcxkiaQ/600?n=1",
				"introduction": "7月7日&#45;9日，这是一场关于诗歌与音乐的对话：李宇春、许巍、袁娅维、陈粒、赵照、泰然",
				"listennum": 331211,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "Slash&#39;",
					"qq": 985774836,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2671606219",
				"dissname": "公告牌2017上半年50首最佳单曲",
				"imgurl": "http://p.qpic.cn/music_cover/QfajxhgxowAzrpZibBoKo9dEgltlyDIOqxia33MvyAVahCfdicXnB5ibVA/600?n=1",
				"introduction": "2017,6,5&#32;Billboard官网公布了2017上半年最佳50首单曲，Calvin&#32;feat&#46;Frank&#32;Ocean&#32;和Migos的Slide尽管在Top&#32;1",
				"listennum": 431005,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "天天困成狗",
					"qq": 2368857126,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2671608256",
				"dissname": "迷糊红娘小狐妖，正太道士没节操",
				"imgurl": "http://p.qpic.cn/music_cover/s6ib7KHLTqdrU3UxaGALxNcp1AXhqnRDb0FDGibLavgApO5R0o150WqQ/600?n=1",
				"introduction": "人妖之恋，前世羁绊续缘今生，今生爱恋弥补遗憾。迷糊萝莉小狐妖，正太道士没节操。自",
				"listennum": 150671,
				"score": 0,
				"version": 4
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "那些青春",
					"qq": 2024645790,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "874822820",
				"dissname": "「器乐演奏」来自云南少数民族的民间艺术",
				"imgurl": "http://p.qpic.cn/music_cover/QQbibbIDN8VRUfbV7ZCWm5H0BIWXbwibQKtcfia7Przak1P2yGTEO8h9A/600?n=1",
				"introduction": "有人说你如果要了解一个地方，一定不能去热闹繁华的地方，只有融入当地的生活，文化，",
				"listennum": 23387,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "内蒙古国南海岸Rapper",
					"qq": 2646281350,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "874822699",
				"dissname": "日本妹纸唱英文歌还能这么好听？",
				"imgurl": "http://p.qpic.cn/music_cover/5WLIDrC37KeWOaoot77zK3K0o6ovN9a3FLrmmj00ZuN0mSeVajybjw/600?n=1",
				"introduction": "在日本音乐开始逐渐走向世界的过程中，越来越多的歌手开始演唱英文歌曲，现在就让我们",
				"listennum": 99986,
				"score": 0,
				"version": 0
			},
			{
				"commit_time": "2017-07-06",
				"createtime": "2017-07-06",
				"creator": {
					"avatarUrl": "",
					"followflag": 0,
					"isVip": 0,
					"name": "二七",
					"qq": 928619736,
					"singerid": 0,
					"singermid": "",
					"type": 0
				},
				"dissid": "2669974570",
				"dissname": "百首电子纯音&#32;&#58;&#32;纯澈之海，静静谧听",
				"imgurl": "http://p.qpic.cn/music_cover/etRVVF7aQu1fex4ZQECBHe1pUibj72HRlfNoh4S9QCgWBdrql4D5icmA/600?n=1",
				"introduction": "电子热浪席卷全球，不过大多都听的人声电子，但人声电子也会听多。不防来听听电子纯音",
				"listennum": 2259751,
				"score": 0,
				"version": 1
			}
		],
		"sin": 0,
		"sortId": 5,
		"sum": 20029,
		"uin": 100000
	}
}