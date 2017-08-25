<template>
    <transition name="list-fade">
        <div class="playlist" v-show="showFlag" @click="hide">
            <div class="list-wrapper" @click.stop>
                <div class="list-header">
                    <h1 class="title">
                        <i @click="changeMode" class="icon" :class="iconMode"></i>
                        <span class="text" v-html="modeText"></span>
                        <span class="clear" @click="showConfirm"><i class="icon-clear"></i></span>
                    </h1>
                </div>
                <scroll ref="listContent" :data="sequenceList" class="list-content" :refreshDelay="refreshDelay">
                    <transition-group name="list" tag="ul">
                        <li :key="item.id" ref="listItem" @click="selectItem(item, index)" class="item" v-for="(item, index) in sequenceList">
                            <i class="current" :class="getCurrentIcon(item)"></i>
                            <span class="text">{{item.name}}</span>
                            <span @click.stop="toggleFavorite(item)" class="like">
                                <i :class="getFavoriteIcon(item)"></i>
                            </span>
                            <span class="delete" @click.stop="deleteOne(item)"><i class="icon-delete"></i></span>
                        </li>
                    </transition-group>
                </scroll>
                <div class="list-operate">
                    <div class="add">
                        <i class="icon-add"></i>
                        <span @click.stop="addSong" class="text">添加歌曲到队列</span>
                    </div>
                </div>
                <div class="list-close" @click="hide">
                    <span>关闭</span>
                </div>
            </div>
            <confirm ref="confirm" @confirm="confirmClear" text="是否清空播放列表" confirmBtnText="清空"></confirm>
            <add-song ref="addSong"></add-song>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex'
    import {playMode} from 'src/common/js/config'
    import Scroll from 'src/base/scroll/scroll.vue'
    import AddSong from 'src/components/add-song/add-song.vue'
    import Confirm from 'src/base/confirm/confirm.vue'
    import {playerMixin} from 'src/common/js/mixin'

    export default
    {
        mixins: [playerMixin],

        data() {
            return {
                showFlag: false,
                refreshDelay: 100
            }
        },
        computed: {
            modeText() {
                return this.mode === playMode.sequence ? '顺序播放' : this.mode === playMode.random ? '随机播放' : '单曲循环'
            }
        },
        methods: {
            show()
            {
                this.showFlag = true
                setTimeout(() => {
                    this.$refs.listContent.refresh()
                    this.scrollToCurrent(this.currentSong)
                }, 20)
            },
            hide()
            {
                this.showFlag = false
            },
            getCurrentIcon(item)
            {
                if (this.currentSong.id === item.id)
                {
                   return 'icon-play'
                }
                return ''
            },
            selectItem(item, index)
            {
                if (this.mode === playMode.random)
                {
                    index = this.sequenceList.findIndex((song) => {
                        return song.id === item.id
                    })
                }
                this.setCurrentIndex(index)
                this.setPlayingState(true)
            },
            scrollToCurrent(current)
            {
                let index = this.sequenceList.findIndex((song) => {
                    return current.id === song.id
                })
                console.log(current.name)
                this.$refs.listContent.scrollToElement(this.$refs.listItem[index])
            },
            deleteOne(item)
            {
                this.deleteSong(item)
                if (!this.playList.length)
                {
                    this.hide()
                }
            },
            showConfirm()
            {
                this.$refs.confirm.show()
            },
            confirmClear()
            {
                this.deleteSongList()
                this.hide()
            },
            addSong()
            {
                this.$refs.addSong.show()
            },
            ...mapActions([
                'deleteSong',
                'deleteSongList'
            ])
        },
        watch: {
            currentSong(newSong, oldSong)
            {
                if (this.showFlag || newSong.id !== oldSong.id)
                {
                    setTimeout(() => {
                        this.scrollToCurrent(newSong)
                    }, 20)
                }
            }
        },
        components: {
            Scroll,
            AddSong,
            Confirm
        }
    }
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
        &.list-fade-enter, &.list-fade-leave-to
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
                        transition all 0.1s linear
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
