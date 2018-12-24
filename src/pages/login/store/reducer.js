/**
 * @author zhouzh
 * @date 2018-12-24 21:34
 */
import { fromJS } from 'immutable';
import * as constants from "./constants";
const defaultState = fromJS({
  login: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login',true);
    default:
      return state;
  }
};

