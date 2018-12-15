/**
 * @author zhouzh
 * @date 2018/12/11 10:37 PM
 */
import axios from 'axios';
import * as contants from './contants';

export const getDetail = (title,content) => ({
  type:contants.CHANGE_DETAIL,
  title,
  content
});

export const changeDetail = (id)=> {
  return (dispatch) => {
      axios.get('/api/detail.json?id='+id).then(res => {
        const result = res.data.data;
        dispatch(getDetail(result.title,result.content));
      });
  }
};