/**
 * @author zhouzh
 * @date 2018-12-24 21:34
 */

import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type:constants.CHANGE_LOGIN,
  value:true
});

export const login = (accout,password)=> {
  return (dispatch) => {
    axios.get(`/api/login.json?accout=${accout}&password=${password}`).then(res => {
      const result = res.data.data;
      if(result){
        dispatch(changeLogin());
      }else{
        alert('fail');
      }
    });
  }
};

