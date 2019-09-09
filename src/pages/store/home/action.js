
import { createAction } from 'redux-actions'
import * as T from './actionTypes.js'
import { HomeRestService } from '../../../api/apiService'


export const getListDataActionUp = createAction(T.MARKET_TYPE_INCREASE)

export const getListDataActionDown = createAction(T.MARKET_TYPE_REDUCE)

export const getInfo = createAction(T.GET_INFO, params => HomeRestService.getInfo(params))
export const getList = createAction(T.GET_LIST, params => HomeRestService.getList(params))

// export const getInfo = createAction(T.GET_INFO, () => {
//     return HomeRestService.getInfo().then(payload => {
//         console.log(payload, "222222")
//         return payload
//     })
// })
