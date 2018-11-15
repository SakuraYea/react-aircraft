/**
 * @author zhouzh
 * @date 2018/11/15 10:28 PM
 */

const defaultState = {
    active:false
};

export default (state = defaultState,action) => {
    if(action.type === 'search_focus'){
        return {
            active:true
        }
    }
    if(action.type === 'search_blur'){
        return {
            active:false
        }
    }
    return state;
};
