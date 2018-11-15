/**
 * @author zhouzh
 * @date 2018/11/15 10:26 PM
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
