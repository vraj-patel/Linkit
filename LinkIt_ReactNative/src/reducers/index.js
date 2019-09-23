import { combineReducers } from 'redux'
import footerIconsReducer from './footerIconsReducer'
import formsStatusReducer from './formsStatusReducer'
import currBodyInfoReducer from './currBodyInfoReducer'
import groupsReducer from './groupsReducer'

export default combineReducers({
    footerIconsReducer,
    formsStatusReducer,
    currBodyInfoReducer,
    groupsReducer
})