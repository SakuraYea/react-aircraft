/**
 * @author zhouzh
 * @date 2018/12/4 10:56 PM
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  RecommendWrapper,
  RecommendItem
} from '../style';

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map(item => {
            return (
              <RecommendItem key={ item.get('id') } url={ item.get('url') }/>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state)=> ({
  list:state.getIn(['home','recommendList'])
});

export default connect(mapState,null)(Recommend);
