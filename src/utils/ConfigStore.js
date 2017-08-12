import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import rootReducer from '../reducers/rootReducer';

const logger = createLogger();

export default (initialState) => {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			thunk,
			logger,
			promise
		)
	);
}
