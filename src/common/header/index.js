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

class Header extends Component {
    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <NavSearch />
                        <i className='iconfont'>&#xe62b;</i>
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
}

export default Header;

