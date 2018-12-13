/**
 * @author zhouzh
 * @date 2018/12/4 10:20 PM
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

import { actionCreators } from './store';

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="pic" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/af5d55e899ff5e06b90fee32c5403772cc9f6e04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.show ? <BackTop onClick={ this.handleScrollTop }>返回顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTop);
  }

  bindEvent() {
    window.addEventListener('scroll',this.props.changeScrollTop);
  }
}

const mapState = (state) => ({
    show:state.getIn(['home','show'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTop(){
        if(document.documentElement.scrollTop > 200){
          dispatch(actionCreators.changeScroll(true));
        }else{
          dispatch(actionCreators.changeScroll(false));
        }
    }
});

export default connect(mapState,mapDispatch)(Home);
