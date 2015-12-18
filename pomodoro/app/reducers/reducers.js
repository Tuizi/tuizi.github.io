import { combineReducers } from 'redux';
import tasks from './tasks';

const pomodoroApp = combineReducers({
	tasks
})

export default pomodoroApp;