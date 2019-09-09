

import { handleActions } from 'redux-actions'
import * as T from './actionTypes.js'

const initialState = {
  isBool: false
}

export default handleActions({
    [T.GET_SHOW_DETAIL]: {
        next(state, { payload }) {
            return {
              ...state,
              isBool: !state.isBool
            }
        }
    }
}, initialState)