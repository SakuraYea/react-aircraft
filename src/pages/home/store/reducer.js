/**
 * @author zhouzh
 * @date 2018/12/5 11:29 PM
 */
import { fromJS } from 'immutable';
import * as contants from "./contants";
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    pageNo:1,
    show:false,
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case contants.CHAGNE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case contants.MORE_LIST_DATA:
      return state.merge({
        pageNo: fromJS(action.pageNo),
        articleList: state.get('articleList').concat(action.list),
      });
    case contants.CHANGE_SCROLL_TOP:
      return state.set('show',action.show);
    default:
      return state;
  }
};

