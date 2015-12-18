import {START_TASK} from '../actions';

function tasks(state = [], action) {
	switch (action.type) {
		case START_TASK:
			return [...state, action.payload];
		default:
			return state;
	}
}

export default tasks;