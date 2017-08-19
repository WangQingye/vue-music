/**
 * Created by wqy on 2017/7/24.
 */
import storage from 'good-storage'

/* 内存中的key */
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 100

function insertArray (arr, val, compare, maxLen) {
    const index = arr.findIndex(compare)
    if (index === 0 || !val) return
    if (index > 0) arr.splice(index, 1)
    arr.unshift(val)
    if (maxLen && arr.length > maxLen)
    {
        arr.pop()
    }
}

function deleteFromArray (arr, compare) {
    const index = arr.findIndex(compare)
    if (index > -1)
    {
        arr.splice(index, 1)
    }
}

export function saveSearch (query) {
    let searches = storage.get(SEARCH_KEY, [])
    insertArray(searches, query, (item) => {
        return item === query
    }, SEARCH_MAX_LENGTH)
    storage.set(SEARCH_KEY, searches)
    return searches
}

export function loadSearch () {
    return storage.get(SEARCH_KEY, [])
}

export function deleteSearch (query) {
    let searches = storage.get(SEARCH_KEY, [])
    deleteFromArray(searches, (item) => {
        return item === query
    })
    storage.set(SEARCH_KEY, searches)
    return searches
}
export function clearSearch () {
    storage.remove(SEARCH_KEY)
    return []
}

export function savePlay (song) {
    let songs = storage.get(PLAY_KEY, [])
    insertArray(songs, song, (item) => {
        return item.id === song.id
    }, PLAY_MAX_LENGTH)
    storage.set(PLAY_KEY, songs)
    return songs
}

export function loadPlay () {
    return storage.get(PLAY_KEY, [])
}
export function deletePlayHistory (song) {
    let songs = storage.get(PLAY_KEY, [])
    deleteFromArray(songs, (item) => {
        return item === song
    })
    storage.set(PLAY_KEY, songs)
    return songs
}
export function clearPlayHistory () {
    storage.remove(PLAY_KEY)
    return []
}