


import { combineReducers } from 'redux'

import userReducer from './user/userReducer'

const rootReducer = combineReducers({

  user1: userReducer
})

export default rootReducer
