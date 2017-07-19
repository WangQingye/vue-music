/**
 * Created by wqy on 2017/7/14.
 */

import {playMode} from 'src/common/js/config'

const state = {
    singer: {},
    playing: false,
    fullScreen: false,
    playList: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {},
    topList: {}
}

export default state