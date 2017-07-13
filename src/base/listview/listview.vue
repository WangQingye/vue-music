<template>
    <scroll class="listview" :data="data" ref="listview">
        <ul>
            <li v-for="group in data" class="list-group" ref="listGroup">
                <h2 class="list-group-title">{{group.title}}</h2>
                <ul>
                    <li v-for="item in group.items" class="list-group-item">
                        <img class="avatar" v-lazy="item.avatar">
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="list-shortcut"
             @touchstart="onShortcutTouchStart"
             @touchmove.stop.prevent="onShortcutTouchMove"
        >
            <ul>
                <li v-for="(item, index) in showcutList" :data-index="index" class="item">{{item}}</li>
            </ul>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'src/base/scroll/scroll.vue'
    import {getData} from 'src/common/js/dom'

    export default {
        created() {
            this.touch = {}
        },
        props: {
          data: {
              type: Array,
              default: []
          }
        },
        computed: {
            showcutList()
            {
                return this.data.map((group) => {
                    return group.title.substr(0, 1)
                })
            }
        },
        methods: {
            onShortcutTouchStart(e)
            {
                let anchorIndex = getData(e.target, 'index')
                let firstTouch = e.touches[0]
                this.touch.y1 = firstTouch.pageY
                this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex], 0)
            },
            onShortcutTouchMove(e)
            {

            }
        },
        components: {
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

    .listview
        position relative
        width 100%
        height 100%
        overflow hidden
        background $color-background
        .list-group
            padding-bottom 30px
            .list-group-title
                height 30px
                line-height 30px
                padding-left 20px
                font-size $font-size-small
                color $color-text-l
                background $color-highlight-background
            .list-group-item
                display flex
                align-items center
                padding 20px 0 0 30px
                .avatar
                    width 50px
                    height 50px
                    border-radius 50%
                .name
                    margin-left 20px
                    color $color-text-l
                    font-size $font-size-medium
        .list-shortcut
            position: absolute
            z-index: 30
            right: 0
            top: 50%
            transform: translateY(-50%)
            width: 20px
            padding: 20px 0
            border-radius: 10px
            text-align: center
            background: $color-background-d
            font-family: Helvetica
            .item
                padding: 3px
                line-height: 1
                color: $color-text-l
                font-size: $font-size-small
                &.current
                    color: $color-theme

</style>