/**
 * @author zhouzh
 * @date 2018/11/19 11:00 PM
 */
import * as constants from './constants';
const defaultState = {
    active:false
};

export default (state = defaultState,action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return {
            active:true
        }
    }
    if(action.type === constants.SEARCH_BLUR){
        return {
            active:false
        }
    }
    return state;
};
