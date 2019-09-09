import {combineReducers} from 'redux'
import home from '../home/reduce'
import action from '../action/reduce'

const rootReducer = combineReducers({
    home,
    action
})
export default rootReducer;