/**
 * Created by wqy on 2017/7/14.
 */

import * as types from './mutation-types'
import {playMode} from 'src/common/js/config'
import {shuffle} from 'src/common/js/util'

export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    // 随机的时候列表已经变了
    if (state.mode === playMode.random)
    {
        let randomList = shuffle(list)
        commit(types.SET_PLAY_LIST, randomList)
        index = randomList.indexOf(list[index])
    } else
    {
        commit(types.SET_PLAY_LIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING, true)
}

export const randomPlay = function ({commit}, {list}) {
    commit(types.SET_PLAY_MODE, playMode.random)
    commit(types.SET_SEQUENCE_LIST, list)
    let randomList = shuffle(list)
    commit(types.SET_PLAY_LIST, randomList)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING, true)
}