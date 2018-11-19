/**
 * @author zhouzh
 * @date 2018/11/19 11:00 PM
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
