/**
 * @author zhouzh
 * @date 2018/12/11 10:37 PM
 */
import axios from "axios";
import * as contants from "./contants";
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type:contants.CHAGNE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
});

const moreList = (list,pageNo) => ({
  type:contants.MORE_LIST_DATA,
  list:fromJS(list),
  pageNo:pageNo
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = (pageNo) => {
  return (dispatch) => {
    axios.get('/api/moreList.json?pageNo=' + pageNo).then(res => {
      const result = res.data.data;
      console.log(result);
      dispatch(moreList(result,pageNo+1));
    })
  }
};

export const changeScroll = (show) => ({
  type:contants.CHANGE_SCROLL_TOP,
  show
});