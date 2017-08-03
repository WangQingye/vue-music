<template>
    <transition name="list-fade">
        <div class="playlist">
            <div class="list-wrapper">
                <div class="list-header">
                    <h1 class="title">
                        <i class="icon"></i>
                        <span class="text"></span>
                        <span class="clear"><i class="icon-clear"></i></span>
                    </h1>
                </div>
                <div class="list-content">
                    <ul>
                        <li class="item">
                            <i class="current"></i>
                            <span class="text"></span>
                            <span class="like">
                                <i class="icon-not-favorite"></i>
                            </span>
                            <span class="delete"><i class="icon-delete"></i></span>
                        </li>
                    </ul>
                </div>
                <div class="list-operate">
                    <div class="add">
                        <i class="icon-add"></i>
                        <spn class="text"></spn>
                    </div>
                </div>
                <div class="list-close">
                    <span>关闭</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

    .playlist
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 200
        background-color $color-background-d
        &.list-fade-enter-active, &.list-fade-leave-active
            transition opacity 0.3s
            .list-wrapper
                transition all 0.3s
        &.list-fade-enter, &.list-fade-leave-top
            opacity 0
            .list-wrapper
                transfrom translate3d(0, 100%, 0)
        .list-wrapper
            position absolute
            left 0
            bottom 0
            width 100%
            background-color $color-highlight-background
            .list-header
                position relative
                padding 20px 30px 10px 20px
                .title
                    display flex
                    align-items center
                    .icon
                        margin-right 10px
                        font-size 30px
                        color $color-theme-d
                    .text
                        flex 1
                        font-size $font-size-medium
                        color $color-text-l
                    .clear
                        extend-click()
                        .icon-clear
                            font-size $font-size-medium
                            color $color-text-d
            .list-content
                max-height 240px
                overflow hidden
                .item
                    display flex
                    align-items center
                    height 40px
                    padding 0 30px 0 20px
                    overflow hidden
                    &.list-enter-active, &.list-leave-active
                        transition all 0.1s
                    &.list-enter, &.list-leave-to
                        height 0
                    .current
                        flex 0 0 20px
                        width 20px
                        font-size $font-size-small
                        color $color-theme-d
                    .text
                        flex 1
                        no-wrap()
                        font-size $font-size-medium
                        color $color-text-d
                    .like
                        extend-click()
                        margin-right 15px
                        font-size $font-size-small
                        color $color-theme
                        .icon-favorite
                            color $color-sub-theme
                    .delete
                        extend-click()
                        font-size $font-size-small
                        color $color-theme
            .list-operate
                width 140px
                margin 20px auto 30px auto
                .add
                    display flex
                    align-items center
                    padding 8px 16px
                    border 1px solid $color-text-l
                    border-radius 100px
                    color $color-text-l
                    .icon-add
                        margin-right 5px
                        font-size $font-size-small-s
                    .text
                        font-size $font-size-small
            .list-close
                text-align center
                line-height 50px
                background $color-background
                font-size $font-size-medium-x
                color $color-text-l
</style>
