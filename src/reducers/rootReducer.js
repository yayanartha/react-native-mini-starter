import { combineReducers } from 'redux';
import account from './reducer.account';

const rootReducer = combineReducers({
	account,
});

export default rootReducer;
