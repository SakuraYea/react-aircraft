/**
 * @author zhouzh
 * @date 2018/11/15 10:28 PM
 */
import { combineReducers } from 'redux-immutable';

import { HeaderReducers } from '../common/header/store';
import { HomeReducers } from '../pages/home/store';
import { LoginReducers } from '../pages/login/store';
import { DetailReducers } from '../pages/detail/store';

const reducer = combineReducers({
    header: HeaderReducers,
    home: HomeReducers,
    detail: DetailReducers,
    login: LoginReducers
});

export default reducer;