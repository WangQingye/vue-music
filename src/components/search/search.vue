<template>
	<div class="search">
		<div class="search-box-wrapper">
            <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
            <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :data="shortcut">
                <div>
                    <div class="hot-key">
                        <h1 class="title">热门搜索</h1>
                        <ul>
                            <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                                <span>{{item.k}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="search-history" v-show="searchHistory.length">
                        <h1 class="title">
                            <span class="text">搜索历史</span>
                            <span @click="clearSearchHistory" class="clear">
                                <i class="icon-clear"></i>
                            </span>
                        </h1>
                        <search-list @select="addQuery"
                                     @delete="deleteSearchHistory"
                                     :searches="searchHistory"></search-list>
                    </div>
                </div>
            </scroll>
        </div>
        <div ref="searchResult" class="search-result" v-show="query">
            <suggest ref="suggest" @select="saveSearch" @listScroll="blurInput" :query="query"></suggest>
        </div>
        <router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
    import SearchBox from 'src/base/search-box/search-box.vue'
    import {getHotKey} from 'src/api/search'
    import {ERR_OK} from 'src/api/config'
    import Suggest from 'src/components/suggest/suggest.vue'
    import Scroll from 'src/base/scroll/scroll.vue'
    import SearchList from 'src/base/search-list/search-list.vue'
    import {mapActions, mapGetters} from 'vuex'
    import {playListMixin} from 'src/common/js/mixin'

    export default {
        mixins: [playListMixin],
        created()
        {
            this._getHotKey()
        },
        data()
        {
            return {
                hotKey: [],
                query: '',
                refreshDelay: 20
            }
        },
        computed: {
            ...mapGetters([
                'searchHistory'
            ]),
            shortcut() {
                return this.hotKey.concat(this.searchHistory)
            }
        },
        methods:
        {
            // 因为有下部小播放器所以需要调整滚动框底部的位置
            handlePlayList(playList)
            {
                const bottom = playList.length > 0 ? '60px' : 0
                this.$refs.shortcutWrapper.style.bottom = bottom
                this.$refs.shortcut.refresh()
                this.$refs.searchResult.style.bottom = bottom
                this.$refs.suggest.refresh()
            },
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
            },
            saveSearch()
            {
                this.saveSearchHistory(this.query)
            },
            blurInput()
            {
                this.$refs.searchBox.blur()
            },
            ...mapActions([
                'saveSearchHistory',
                'deleteSearchHistory',
                'clearSearchHistory'
            ])
        },
        components: {
            SearchBox,
            Suggest,
            SearchList,
            Scroll
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
            .search-history
                position relative
                margin 0 20px
                .title
                    display flex
                    align-items center
                    height 40px
                    font-size $font-size-medium
                    color $color-text-l
                    .text
                        flex 1
                    .clear
                        extend-click()
                        .icon-clear
                            font-size $font-size-medium
                            color $color-text-d
        .search-result
            position fixed
            width 100%
            top 178px
            bottom 0
</style>