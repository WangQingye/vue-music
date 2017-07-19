<template>
    <transition name="slide">
        <div id="test" style="width: 100%; height: 100%; background-color: red"></div>
        <music-list :title="title"
                    :bg-image="bgImage"
        ></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import MusicList from 'src/components/music-list/music-list.vue'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            title() {
                return this.topList.topTitle
            },
            bgImage() {
                return this.topList.picUrl
            },
            ...mapGetters([
                'topList'
            ])
        },
        created() {
            console.log('created')
        },
        components: {
            MusicList
        },
        watch: {
            topList()
            {
                console.log('111', this.topList)
            }
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s ease

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>