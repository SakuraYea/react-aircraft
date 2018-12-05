/**
 * @author zhouzh
 * @date 2018/12/5 11:29 PM
 */
import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList: [{
      id:1,
      title:'社会热点',
      url:'http://upload.jianshu.io/publication/image/223e5396-6c3a-4003-86fb-f42a42e73f28'
    },{
      id:2,
      title:'阅读',
      url:'http://upload.jianshu.io/publication/image/b3d2135b-3c0f-45c7-8428-6bc0d7539ca3'
    }]
});

export default (state = defaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
};

