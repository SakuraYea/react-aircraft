/**
 * @author zhouzh
 * @date 2018/11/15 10:26 PM
 */

import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers());

export default store;
