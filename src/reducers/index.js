import { combineReducers } from 'redux';
import { taskManager } from './taskManager';

const rootReducer = combineReducers({
  taskManager,
});

export default rootReducer;
