import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// import location from '../../assets/images/定位.png';
const Popupcontent = styled.div`
    position:absolute;
    height:100vh;
    width:100vw;
    background-color:rgba(0,0,0,0.1);
    .father{
        position:absolute;
        top:0px;
        right:22px;
        >span{
            position:absolute;
            right:-2px;
            top:-2px;
            display:block;
            /* width:0.2rem; */
            border-top:0.2rem solid transparent;
            border-left:0.2rem solid transparent;
            border-right:0.2rem solid transparent;
            border-bottom:0.3rem solid white;
        }
        /*  */
        .content{
            width:3rem;
            position:absolute;
            top:16px;
            right:-12px;
            background-color:white;
            .item{
                /* align-content :center; */
                padding:0.2rem ;
                font-size:0;
                /* height:0.8rem; */
                .text{
                    /* display:inline-block; */
                    /* margin-top:-2rem; */
                    /* height:0.7rem; */
                    font-size:0.38rem;
                    /* background-color:#dadedc; */
                }
            
            }
            .item:nth-child(n){
                border-bottom:1px solid #dadedc;
            }
            /* .item:last-child{
                border-bottom:0;
            } */
        }
    }
`;

const ServerPopup = (props) => {
  const history = useHistory()
  const { display } = props;
  const { handleOnclick } = props;

  console.log("props", props);

  const handleClick = (params) => {
    console.log("params", params, props)
    if (params == '/order/comfirm') {
      history.push(`/order`)
    } else {
      history.push(`${params}`)

    }
  }

  return (

    <Popupcontent onClick={() => { handleOnclick() }}
      style={display ? {} : { display: "none" }} >
      <div className="father">
        <span></span>

        <div className="content">
          <div className="item">
            <span className="text iconfont">&#xe601; &nbsp; 消息</span>
          </div>
          <div className="item">
            <span className="text iconfont" onClick={() => { handleClick('/order/all') }}>&#xe650; &nbsp; 我的订单</span>
          </div>
          <div className="item">
            <span className="text iconfont">&#xe617; &nbsp; 我的收藏</span>
          </div>
          <div className="item">
            <span className="text iconfont">&#xe622; &nbsp; 帮助中心</span>
          </div>
          <div className="item">

            <span className="text iconfont">&#xe62a; &nbsp; 发布服务</span>
          </div>
          <div className="item">

            <span className="text iconfont">&#xe641; &nbsp; 扫一扫</span>
          </div>


        </div>
      </div>
    </Popupcontent>
  )
}
export default ServerPopup;
