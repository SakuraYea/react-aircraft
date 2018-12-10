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
    }],
    articleList: [{
      id:1,
      title:'她后悔上大学',
      desc:'方小兰从来没后悔上大学。但现在她后悔了，真的后悔。 方小兰老家在农村，住的是半泥瓦房，还有一半是木板撑起来的。那时候，她最怕下大雨，一下雨，...',
      url:'//upload-images.jianshu.io/upload_images/6840057-56ab84bbc441a96e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
      id:2,
      title:'MySQL从删库到跑路：顺丰高级工程师跑路被开除之后',
      desc:'9月19 日晚，据微博网友大佬坊间八卦爆料，顺丰的一个高级工程手误把线上系统一个库删除了，导致某项服务无法使用并持续 590 分钟。然后...',
      url:'//upload-images.jianshu.io/upload_images/10878070-b0a17c89c7f0674b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList:[{
      id:1,
      url:'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },{
      id:2,
      url:'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    }]
});

export default (state = defaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
};

