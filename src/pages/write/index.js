/**
 * @author zhouzh
 * @date 2018-12-31 17:54
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Write extends Component {
  render() {
    const { loginFlag } = this.props;
    if(loginFlag){
      return (
        <div>
          写文章页面
        </div>
      )
    }else{
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state) => ({
  loginFlag:state.getIn(['login','login'])
});

export default connect(mapState,null)(Write);

