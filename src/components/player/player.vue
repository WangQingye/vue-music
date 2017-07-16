<template>
    <div class="player">
        <div class="normal-player" v-show="fullScreen">
            播放器
        </div>
        <div class="mini-player" v-show="!fullScreen"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'fullScreen',
                'playList'
            ])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"
</style>