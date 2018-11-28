/** * @author zhouzh * @date 2018/11/7 10:53 PM */import styled from 'styled-components';import logo from '../../static/logo.png';export const HeaderWrapper = styled.div`    position:relative;    height:56px;    border-bottom:1px solid #f0f0f0;`;export const Logo = styled.a`    position:absolute;    top:0;    left:0;    display:block;    width:100px;    height:56px;    background:url(${logo});    background-size:contain;`;export const Nav = styled.div`    width:960px;    height:100%;    box-sizing:border-box;    margin:0 auto;`;export const NavItem = styled.div`    color:#333;    line-height:56px;    padding:0 15px;    font-size:17px;    &.left {        float:left;    }    &.right {        float:right;        color:#969696;    }    &.active {        color: #ea6f5a;    }`;export const SearchWrapper = styled.div`   float:left;   position:relative;   .iconfont{        position:absolute;        right:5px;        bottom:5px;        width:30px;        line-height:30px;        text-align:center;        border-radius:15px;        &.active{            background:#777;            color:#fff;        }   } `;export const SearchInfo = styled.div`    position:absolute;    left:0;    top:56px;    width:240px;    padding:0 20px;    background-color: #fff;    box-shadow: 0 0 8px rgba(0,0,0,.2);`;export const SearchTitle = styled.div`    margin-top:20px;    margin-bottom:15px;    font-size:14px;    color:#969696;`;export const SearchInfoSwitch = styled.span`    float:right;    font-size:13px;    cursor: pointer;`;export const SearchInfoList = styled.div`    overflow:hidden;`;export const SearchInfoItem = styled.a`    display:block;    line-height:20px;    padding: 0 5px;    margin-right:10px;    margin-bottom:15px;     float:left;    font-size: 12px;    color: #787878;    border:1px solid #b4b4b4;    border-radius:3px;`;export const NavSearch = styled.input.attrs({    placeholder: '搜索'})`    width:160px;    height:38px;    padding:0 30px 0 20px;    margin:9px 0 0 20px;    box-sizing:border-box;    border:none;    outline:none;    border-radius:19px;    background:#eee;    font-size:14px;    color:#666;    &::placeholder{        color:#999;    }    &.active{        width:240px;    }    &.slide-enter{        transition:all .2s ease-out;    }    &.slide-enter-active{        width:240px;    }    &.slide-exit{        transition:all .2s ease-out;    }    &.slide-exit-active{        width:160px;    }`;export const Addition = styled.div`    position:absolute;    top:0;    right:0;    height:56px;`;export const Button = styled.div`    float:right;    margin-top:9px;    margin-right:20px;    padding:0 20px;    line-height:38px;    border-radius:19px;    border:1px solid #ec6149;    font-size:14px;    &.reg{        color:#ec6149;    }    &.write{        color:#fff;        background:#ec6149;    }`;