/**
 * Created by wqy on 2017/7/14.
 */

import * as types from './mutation-types'
import {playMode} from 'src/common/js/config'
import {shuffle} from 'src/common/js/util'
import {saveSearch, deleteSearch, clearSearch, savePlay, saveFavorite, deleteFavorite} from 'src/common/js/cache'

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

// 往列表中插入或删除一首歌
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
export const deleteSong = function ({commit, state}, song) {
    let playlist = state.playList.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex

    let pIndex = findIndex(playlist, song)
    playlist.splice(pIndex, 1)
    let sIndex = findIndex(sequenceList, song)
    sequenceList.splice(sIndex, 1)

    if (currentIndex > pIndex || currentIndex === playlist.length)
    {
        currentIndex--
    }

    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_PLAY_LIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)

    if (!playlist.length)
    {
        commit(types.SET_PLAYING, false)
    } else
    {
        commit(types.SET_PLAYING, true)
    }
}
// 清空播放列表
export const deleteSongList = function ({commit}) {
    commit(types.SET_SEQUENCE_LIST, [])
    commit(types.SET_PLAY_LIST, [])
    commit(types.SET_CURRENT_INDEX, -1)
    commit(types.SET_PLAYING, false)
}
// 保存搜索历史
export const saveSearchHistory = function ({commit}, query) {
    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

// 删除搜索历史
export const deleteSearchHistory = function ({commit}, query) {
    commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}
// 清空搜索历史
export const clearSearchHistory = function ({commit}) {
    commit(types.SET_SEARCH_HISTORY, clearSearch())
}

// 保存播放记录
export const savePlayHistory = function ({commit}, song) {
    commit(types.SET_PLAY_HISTORY, savePlay(song))
}

// 收藏歌曲
export const saveFavoriteList = function ({commit}, song) {
    commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}
// 取消收藏歌曲
export const deleteFavoriteList = function ({commit}, song) {
    commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}