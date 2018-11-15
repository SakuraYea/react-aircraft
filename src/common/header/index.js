/**
 * @author zhouzh
 * @date 2018/11/7 10:48 PM
 */
import React from 'react';
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
import { connect } from 'react-redux';

const Header = (props)=> {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.active}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            onFocus={props.hanldeFocus}
                            onBlur={props.hanldeBlur}
                            className= {props.active ? 'active' : ''}/>
                    </CSSTransition>
                    <i className= {props.active ? 'iconfont active' : 'iconfont'}>&#xe62b;</i>
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
};


const mapStateToProps = (state)=> {
    return {
        active:state.active
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        hanldeFocus(){
            const action = {
                type:'search_focus'
            };
            dispatch(action);
        },
        hanldeBlur(){
            const action = {
                type:'search_blur'
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);

