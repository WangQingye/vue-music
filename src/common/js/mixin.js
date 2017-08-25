/**
 * Created by wqy on 2017/7/19.
 */
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {playMode} from 'src/common/js/config'
import {shuffle} from 'src/common/js/util'

export const playListMixin = {
    computed:
    {
        ...mapGetters([
            'playList'
        ])
    },
    mounted()
    {
        this.handlePlayList(this.playList)
    },
    activated()
    {
        this.handlePlayList(this.playList)
    },
    watch: {
        playList(newVal)
        {
            this.handlePlayList(newVal)
        }
    },
    methods: {
        handlePlayList()
        {
            throw new Error('component must implement handlePlayList method')
        }
    }
}

// 播放列表公用
export const playerMixin = {

    computed: {
        iconMode()
        {
            return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random '
        },
        ...mapGetters([
            'sequenceList',
            'currentSong',
            'playList',
            'mode',
            'favoriteList'
        ])
    },
    methods: {

        // 改变播放方式
        changeMode()
        {
            const mode = (this.mode + 1) % 3
            this.setPlayMode(mode)
            let list = null
            if (mode === playMode.random)
            {
                list = shuffle(this.sequenceList)
            } else
            {
                list = this.playList
            }
            console.log(this.currentSong.name)
            this.resetCurrentIndex(list)
            this.setSequenceList(list)
            console.log(this.currentSong.name)
        },
        resetCurrentIndex(list)
        {
            let index = list.findIndex((item) => {
                return item.name === this.currentSong.name
            })
            console.log('list', list[index].name)
            this.setCurrentIndex(index)
        },
        getFavoriteIcon(song)
        {
            return this.isFavorite(song) ? 'icon-favorite' : 'icon-not-favorite'
        },
        toggleFavorite(song)
        {
            console.log('toggle')
            if (this.isFavorite(song))
            {
                console.log('is')
                this.deleteFavoriteList(song)
            } else {
                console.log('not')
                this.saveFavoriteList(song)
            }
        },
        isFavorite(song)
        {
            const index = this.favoriteList.findIndex((item) => {
                return item.id === song.id
            })
            return index > -1
        },
        ...mapMutations({
            setPlayingState: 'SET_PLAYING',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setPlayMode: 'SET_PLAY_MODE',
            setSequenceList: 'SET_SEQUENCE_LIST'
        }),
        ...mapActions([
            'saveFavoriteList',
            'deleteFavoriteList'
        ])
    }
}

// 搜索相关公用
export const searchMixin = {
    data() {
        return {
            query: '',
            refreshDelay: 100
        }
    },
    computed: {
        ...mapGetters([
            'searchHistory'
        ])
    },
    methods: {
        saveSearch()
        {
            this.saveSearchHistory(this.query)
        },
        blurInput()
        {
            this.$refs.searchBox.blur()
        },
        onQueryChange(query)
        {
            this.query = query
        },
        addQuery(query)
        {
            this.$refs.searchBox.setQuery(query)
        },
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory'
        ])
    }
}
