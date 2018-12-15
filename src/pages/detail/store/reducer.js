/**
 * @author zhouzh
 * @date 2018/12/5 11:29 PM
 */
import { fromJS } from 'immutable';
import * as contants from './contants';
const defaultState = fromJS({
  title:'',
  content:''
});

export default (state = defaultState,action) => {
      switch (action.type) {
        case contants.CHANGE_DETAIL:
          return state.merge({
            title:action.title,
            content:action.content
          });
        default:
          return state;
      }
};

