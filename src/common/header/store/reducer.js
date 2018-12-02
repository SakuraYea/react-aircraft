/**
 * @author zhouzh
 * @date 2018/11/19 11:00 PM
 */
import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    active:false,
    list:[]
});

export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('active',true);
        case constants.SEARCH_BLUR:
            return state.set('active',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state;
    }
};
