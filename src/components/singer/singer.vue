<template>
	<div class="singer">
        <list-view :data="singers"></list-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import {getSingerList} from 'src/api/singer'
	import {ERR_OK} from 'src/api/config'
    import Singer from 'src/common/js/singer'
    import ListView from 'src/base/listview/listview.vue'
	const HOT_NAME = '热门'
	const HOT_LENGTH = 10
    export default {
		data() {
		  	return {
				singers: []
			}
		},
		created() {
		    this._getSingerList()
		},
		methods: {
		    _getSingerList()
            {
			    getSingerList().then((res) => {
					if (res.code === ERR_OK)
					{
					  	this.singers = this._normalizeSinger(res.data.list)
					}
				})
		    },
		    _normalizeSinger(list)
			{
			  	let map = {
			  	  	hot: {
			  	  	  	title: HOT_NAME,
						items: []
					}
				}
				list.forEach((item, index) => {
			  	  	if (index < HOT_LENGTH)
					{
					  	map.hot.items.push(new Singer({
                            id: item.Fsinger_mid,
                            name: item.Fsinger_name
                        }))
					}
					const key = item.Findex
                    if (!map[key])
                    {
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
				})
                // 给map中的abcd排序
                let hot = []
                let ret = []
                for (let key in map)
                {
                    let val = map[key]
                    if (val.title.match(/[a-zA-Z]/))
                    {
                        ret.push(val)
                    } else if (val.title === HOT_NAME)
                    {
                        hot.push(val)
                    }
                }
                ret.sort((a, b) => {
			  	    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                })
                return hot.concat(ret)
			}
		},
        components: {
		    ListView
        }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

    .singer
        position fixed
        top 88px
        bottom 0
        width 100%
</style>