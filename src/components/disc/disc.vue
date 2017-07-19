<template>
    <transition name="slide">
        <music-list
            :title="title"
            :bg-image="bgImage"
            :songs="songs" ></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    import {getSongList} from 'src/api/recommend'
    import {createSong} from 'src/common/js/song'
    // import {ERR_OK} from 'src/api/config'
    import MusicList from 'src/components/music-list/music-list.vue'
    export default {
        data() {
            return {
                songs: []
            }
        },
        computed: {
            title() {
                return this.disc.dissname
            },
            bgImage() {
                return this.disc.imgurl
            },
            ...mapGetters([
                'disc'
            ])
        },
        created() {
            this._getSongList()
        },
        methods: {
            _getSongList() {
                if (!this.disc.dissid) {
                    this.$router.push('/recommend')
                    return
                }
                this.songs = this._normalizeSongs(getSongList(this.disc.dissid).cdlist[0].songlist)
//                getSongList(this.disc.dissid).then((res) => {
//                    if (res.code === ERR_OK) {
//                        console.log(res.cdlist[0].songlist)
//                        // this.songs = this._normalizeSongs(res.cdlist[0].songlist)
//                    }
//                })
            },
            _normalizeSongs(list)
            {
                let ret = []
                list.forEach((musicData) => {
                    if (musicData.songid && musicData.albumid)
                    {
                        ret.push(createSong(musicData))
                    }
                })
                return ret
            }
        },
        components: {
            MusicList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"
    .slide-enter-active,.slide-leave-active
        transition all 0.3s
    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)
</style>