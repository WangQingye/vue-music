/**
 * Created by wqy on 2017/7/14.
 */

import {playMode} from 'src/common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'src/common/js/cache'

const state = {
    singer: {},
    playing: false,
    fullScreen: false,
    playList: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {},
    topList: {},
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()
}

export default state