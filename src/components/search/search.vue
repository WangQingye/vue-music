<template>
	<div class="search">
		<div class="search-box-wrapper">
            <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <div class="shortcut-wrapper" v-show="!query">
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
        <div class="search-result" v-show="query">
            <suggest :query="query"></suggest>
        </div>
        <router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
    import SearchBox from 'src/base/search-box/search-box.vue'
    import {getHotKey} from 'src/api/search'
    import {ERR_OK} from 'src/api/config'
    import Suggest from 'src/components/suggest/suggest.vue'

    export default {
        created()
        {
            this._getHotKey()
        },
        data()
        {
            return {
                hotKey: [],
                query: ''
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
            },
            onQueryChange(query)
            {
                this.query = query
            }
        },
        components: {
            SearchBox,
            Suggest
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
        .search-result
            position fixed
            width 100%
            top 178px
            bottom 0
</style>