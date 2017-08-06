<template>
    <transition name="slide">
        <div class="add-song" v-show="showFlag" @click.stop>
            <div class="header">
                <h1 class="title">添加歌曲到列表</h1>
                <div class="close" @click="hide">
                    <i class="icon-close"></i>
                </div>
            </div>
            <div class="search-box-wrapper">
                <search-box ref="searchBox" @query="onQueryChange" placeholder="搜索歌曲"></search-box>
            </div>
            <div class="shortcut" v-show="!query"></div>
            <div class="search-result" v-show="query">
                <suggest :query="query"
                         :showSing="false"
                         @select="saveSearch"
                         @listScroll="blurInput"
                ></suggest>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import SearchBox from 'src/base/search-box/search-box.vue'
    import Suggest from 'src/components/suggest/suggest.vue'
    import {searchMixin} from 'src/common/js/mixin'

    export default {
        mixins: [searchMixin],

        data() {
            return {
                showFlag: false
            }
        },
        methods: {
            show()
            {
                this.showFlag = true
            },
            hide()
            {
                this.showFlag = false
            },
            selectSuggest()
            {

            }
        },
        components: {
            SearchBox,
            Suggest
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

    .add-song
        position fixed
        top 0
        bottom 0
        width 100%
        z-index 200
        background $color-background
        &.slide-enter-active, &.slide-leave-active
            transition all 0.3s
        &.slide-enter, &.slide-leave-text-outline
            transform: translate3d(100%, 0, 0)
        .header
            position relative
            height 44px
            text-align center
            .title
                line-height: 44px
                font-size $font-size-large
                color $color-text
            .close
                position absolute
                top 0
                right 8px
                .icon-close
                    display block
                    padding 12px
                    font-size 20px
                    color $color-theme
        .search-box-wrapper
            margin 20px
        .shortcut
            .list-wrapper
                position absolute
                top 165px
                bottom 0
                width 100%
                .list-scroll
                    height 100%
                    overflow hidden
                    .list-inner
                        padding 20px 30px
        .search-result
            position fixed
            top 124px
            bottom 0
            width 100%
        .tip-title
            text-align center
            padding 18px 0
            font-size 0
            .icon-ok
                font-size $font-size-medium
                color $color-theme
                margin-right 4px
            .text
                font-size $font-size-medium
                color $color-text
</style>