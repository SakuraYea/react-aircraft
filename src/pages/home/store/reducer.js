/**
 * @author zhouzh
 * @date 2018/12/5 11:29 PM
 */
import { fromJS } from 'immutable';
import * as contants from "./contants";
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[]
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case contants.CHAGNE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state;
  }
};

