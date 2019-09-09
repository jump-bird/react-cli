

import { handleActions } from 'redux-actions'
import * as T from './actionTypes.js'

const initialState = {
  price: 500,
  info: [],
  list: []
}

export default handleActions({
  [T.MARKET_TYPE_INCREASE]: {
    next(state, { payload }) {
      return {
        ...state,
        price: state.price += 10
      }
    }
  },
  [T.MARKET_TYPE_REDUCE]: {
    next(state, { payload }) {
      return {
        ...state,
        price: state.price -= 10
      }
    }
  },
  [T.GET_INFO]: {
    next(state, { payload }) {
      return {
        ...state,
        info: payload
      }
    }
  },
  [T.GET_LIST]: {
    next(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    }
  },
}, initialState)