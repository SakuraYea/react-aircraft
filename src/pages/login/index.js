/**
 * @author zhouzh
 * @date 2018-12-19 22:52
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';
import { Redirect } from "react-router-dom";

class Login extends Component {
  render() {
    const { loginFlag } = this.props;
    if(!loginFlag){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={ (input) => { this.account = input }} />
            <Input placeholder="密码" type='password' ref={ (input) => { this.password = input }}/>
            <Button onClick={ ()=> this.props.login(this.account,this.password) }>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => ({
    loginFlag:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
  login(accountElem,passwordElem) {
    dispatch(actionCreators.login(accountElem.value,passwordElem.value));
  }
});

export default connect(mapState,mapDispatch)(Login);

