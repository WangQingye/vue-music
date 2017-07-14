/**
 * Created by wqy on 2017/7/14.
 */

import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state, singer)
    {
        state.singer = singer
    }
}

export default mutations