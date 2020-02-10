import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { cryptoReducer } from './reducers/crypto';

const rootReducer = combineReducers({
  crypto: cryptoReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
