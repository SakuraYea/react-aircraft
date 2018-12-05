/**
 * @author zhouzh
 * @date 2018/12/4 10:55 PM
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map(item => {
            return (
              <TopicItem key={ item.get('id') }>
                <img className="topic-pic" src={ item.get('url') } alt="pic"/>
                { item.get('title') }
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state)=> ({
  list:state.getIn(['home','topicList'])
});

export default connect(mapState,null)(Topic);

