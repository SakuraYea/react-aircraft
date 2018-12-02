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
    SearchInfo,
    SearchTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Header extends Component {
    searchInfo() {
        const { active,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10 ; i++) {
                pageList.push(
                    <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
                );
            }
        }
        if(active || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >
                    <SearchTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => handleChangePage(page,totalPage) }>换一批</SearchInfoSwitch>
                    </SearchTitle>
                    <SearchInfoList>
                     { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render(){
        const { active,hanldeFocus,hanldeBlur } = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={active}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={hanldeFocus}
                                onBlur={hanldeBlur}
                                className= {active ? 'active' : ''}/>
                        </CSSTransition>
                        <i className= {active ? 'iconfont active' : 'iconfont'}>&#xe62b;</i>
                        { this.searchInfo() }
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


const mapStateToProps = (state)=> {
    return {
        active:state.getIn(['header','active']),
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        hanldeFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        hanldeBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);

