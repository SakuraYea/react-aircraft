/**
 * @author zhouzh
 * @date 2018/11/15 10:28 PM
 */
import { combineReducers } from 'redux';

import { HeaderReducers } from '../common/header/store';

const reducer = combineReducers({
    header: HeaderReducers
});

export default reducer;