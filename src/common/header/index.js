/**
 * @author zhouzh
 * @date 2018/11/7 10:48 PM
 */
import React,{ Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

import { CSSTransition } from 'react-transition-group';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active:false
        };

        this.hanldeFocus = this.hanldeFocus.bind(this);
        this.hanldeBlur = this.hanldeBlur.bind(this);
    }

    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.state.active}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch
                            onFocus={this.hanldeFocus}
                            onBlur={this.hanldeBlur}
                            className= {this.state.active ? 'active' : ''}/>
                        </CSSTransition>
                        <i className= {this.state.active ? 'iconfont active' : 'iconfont'}>&#xe62b;</i>
                    </SearchWrapper>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className='write'>
                        <i className='iconfont'>&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    hanldeFocus(){
        this.setState({
            active:true
        });
    }

    hanldeBlur(){
        this.setState({
            active:false
        });
    }
}

export default Header;

