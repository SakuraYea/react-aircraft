/**
 * @author zhouzh
 * @date 2018/11/7 10:53 PM
 */
import styled from 'styled-components';
import logo from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logo});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    background:blue;
`;

