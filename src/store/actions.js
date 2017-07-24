/**
 * Created by wqy on 2017/7/14.
 */

import * as types from './mutation-types'
import {playMode} from 'src/common/js/config'
import {shuffle} from 'src/common/js/util'
import {saveSearch} from 'src/common/js/cache'

function findIndex(list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}

// 点击播放
export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_PLAY_LIST, list)
    if (state.mode === playMode.random) {
        let randomList = shuffle(list)
        commit(types.SET_SEQUENCE_LIST, randomList)
        index = findIndex(randomList, list[index])
    } else {
        commit(types.SET_SEQUENCE_LIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING, true)
}

// 随机播放
export const randomPlay = function ({commit}, {list}) {
    commit(types.SET_PLAY_MODE, playMode.random)
    commit(types.SET_PLAY_LIST, list)
    let randomList = shuffle(list)
    commit(types.SET_SEQUENCE_LIST, randomList)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING, true)
}

// 往列表中插入一首歌
export const insertSong = function ({commit, state}, song) {
    let playlist = state.playList.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex

    // 记录当前歌曲
    let currentSong = playlist[currentIndex]
    // 查看当前列表是否已经有这首歌
    let fpIndex = findIndex(playlist, song)
    // 因为是插入歌曲，所以序号需要加1
    currentIndex++
    playlist.splice(currentIndex, 0, song)
    // 如果已存在这首歌
    if (fpIndex > -1)
    {
        // 大于插入的序号
        if (currentIndex > fpIndex)
        {
            playlist.splice(fpIndex, 1)
            currentIndex--
        } else
        {
            playlist.splice(fpIndex + 1, 1)
        }
    }

    // sequenceList 同currentList
    let currentSIndex = findIndex(sequenceList, currentSong) + 1

    let fsIndex = findIndex(sequenceList, song)

    sequenceList.splice(currentIndex, 0, song)

    if (fsIndex > -1)
    {
        // 大于插入的序号
        if (currentSIndex > fsIndex)
        {
            sequenceList.splice(fsIndex, 1)
        } else
        {
            sequenceList.splice(fsIndex + 1, 1)
        }
    }

    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_PLAY_LIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING, true)
}

// 保存搜索历史
export const saveSearchHistory = function ({commit}, query) {
    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}