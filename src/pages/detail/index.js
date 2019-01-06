/**
 * @author zhouzh
 * @date 2018/12/4 10:26 PM
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {
  DetailWrapper,
  Header,
  Content
} from "./style";

import { actionCreators } from "./store";

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{ this.props.title }</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.changeDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
  changeDetail(id){
    dispatch(actionCreators.changeDetail(id));
  }
});

export default connect(mapState,mapDispatch)(withRouter(Detail));

