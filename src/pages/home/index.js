/**
 * @author zhouzh
 * @date 2018/12/4 10:20 PM
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

import { actionCreators } from './store';

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends Component {
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    }
});

export default connect(null,mapDispatch)(Home);
