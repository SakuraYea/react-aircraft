/**
 * @author zhouzh
 * @date 2018/11/7 10:48 PM
 */
import React,{ Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav
} from './style'

class Header extends Component {
    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>hee</Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;

