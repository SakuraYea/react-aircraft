/**
 * @author zhouzh
 * @date 2018/12/11 10:37 PM
 */
import axios from "axios";
import * as contants from "./contants";

const changeHomeData = (result) => ({
  type:contants.CHAGNE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};