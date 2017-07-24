/**
 * Created by wqy on 2017/7/14.
 */
export const singer = state => state.singer
export const disc = state => state.disc
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const topList = state => state.topList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = (state) => {
    return state.sequenceList[state.currentIndex] || {}
}
export const searchHistory = state => state.searchHistory
