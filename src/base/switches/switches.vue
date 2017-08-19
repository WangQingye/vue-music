<template>
    <div class="">
        <ul class="switches">
            <li class="switch-item" v-for="(item, index) in switches"
                :class="{'active' : currentIndex === index}"
                @click="switchItem(index)"
            >
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            switches: {
                type: Array,
                default: []
            },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            switchItem(index)
            {
                this.$emit('switch', index)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    @import "~common/stylus/variable.styl"

    .switches
        display: flex
        align-items center
        width 240px
        margin 0 auto
        border 1px solid $color-highlight-background
        .switch-item
            flex: 1
            padding 8px
            text-align center
            font-size: $font-size-medium
            color: $color-text-d
            &.active
                background $color-highlight-background
                color: $color-text
</style>