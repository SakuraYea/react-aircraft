/**
 * @author zhouzh
 * @date 2018/11/19 11:00 PM
 */
import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    active:false
});

export default (state = defaultState,action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('active',true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('active',false);
    }
    return state;
};
