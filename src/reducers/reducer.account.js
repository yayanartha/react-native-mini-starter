import { types } from '../constants';
import initialState from './initialState';

export default function (state = initialState.account, action) {
	switch (action.type) {
		
		default:
			return state;
	}
}
