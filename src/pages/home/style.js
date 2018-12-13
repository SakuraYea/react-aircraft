/**
 * @author zhouzh
 * @date 2018/12/4 10:37 PM
 */

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float:left;
  margin-left: 15px;
  padding-top: 25px;
  width: 625px;
  .banner-img{
    display: block;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color:#000;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    float: left;
    display:block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
   overflow:hidden;
   padding:20px 0;
   border-bottom:1px solid #dcdcdc;
   .pic{
      display:block;
      width:125px;
      height:100px;
      float:right;
      border-radius:10px;
   }
`;

export const ListInfo = styled.div`
  width:490px;
  float:left;
  .title{
    line-height: 27px;
    font-size:18px;
    font-weight: bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom:10px;
  background:#ddd url(${(props) => props.url});
  background-size: contain;
`;

export const LoadMore = styled.div`
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right:100px;
  bottom:100px;
  width:80px;
  height:80px;
  line-height:80px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
  cursor: pointer;
`;


