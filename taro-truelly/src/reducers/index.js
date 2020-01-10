import { combineReducers } from 'redux'
import menu from './menu'
import {topics} from './topics'
export default combineReducers({
  menu,
  topics
})
