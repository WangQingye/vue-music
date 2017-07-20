<template>
	<div class="search">
		<div class="search-box-wrapper">
            <search-box ref="searchBox"></search-box>
        </div>
        <div class="shortcut-wrapper">
            <div class="shortcut">
                <div class="hot-key">
                    <h1 class="title"></h1>
                    <ul>
                        <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                            <span>{{item.k}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	</div>
</template>

<script type="text/ecmascript-6">
    import SearchBox from 'src/base/search-box/search-box.vue'
    import {getHotKey} from 'src/api/search'
    import {ERR_OK} from 'src/api/config'
    export default {
        created()
        {
            this._getHotKey()
        },
        data()
        {
            return {
                hotKey: []
            }
        },
        methods:
        {
            _getHotKey()
            {
                getHotKey().then((res) => {
                    if (res.code === ERR_OK)
                    {
                        this.hotKey = res.data.hotkey.slice(0, 10)
                    }
                })
            },
            addQuery(query)
            {
                this.$refs.searchBox.setQuery(query)
            }
        },
        components: {
            SearchBox
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

    .search
        .search-box-wrapper
            margin 20px
        .shortcut-wrapper
            position fixed
            top 178px
            bottom 0
            width 100%
        .shortcut
            height 100%
            overflow hidden
            .hot-key
                margin 0 20px 20px 20px
                .title
                    margin-bottom 20px
                    font-size $font-size-medium
                    color $color-text-l
                .item
                    display inline-block
                    padding 5px 10px
                    margin 0 20px 10px 0
                    border-radius 6px
                    background $color-highlight-background
                    font-size $font-size-medium
                    color $color-text-d
</style>