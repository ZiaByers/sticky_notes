import { combineReducers } from 'redux'
import notes from './notes'
import nextId from './nextId'
import filter from './filter'

const rootReducer = combineReducers({
  notes,
  nextId,
  filter,
})

export default rootReducer
