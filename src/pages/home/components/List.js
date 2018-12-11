/**
 * @author zhouzh
 * @date 2018/12/4 10:55 PM
 */
import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { list,pageNo,getMoreList } = this.props;
    return (
      <Fragment>
        {
          list.map((item,index) => {
            return (
              <ListItem key={ index }>
                <img className='pic' src={ item.get('url') } alt="pic"/>
                <ListInfo>
                  <h3 className='title'>{ item.get('title') }</h3>
                  <p className='desc'>{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={ () => getMoreList(pageNo) }>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state)=> ({
    list:state.getIn(['home','articleList']),
    pageNo:state.getIn(['home','pageNo'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(pageNo){
    dispatch(actionCreators.getMoreList(pageNo));
  }
});

export default connect(mapState,mapDispatch)(List);

