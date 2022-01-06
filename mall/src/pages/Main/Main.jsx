import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Classify from 
    '../../components/main/classify/Classify.jsx'
import RotationChart from 
    '../../components/main/rotationChart/RotationChart.jsx'
import MenuBar from 
    '../../components/main/menuBar/MenuBar.jsx'
import ImgList from 
    '../../components/main/imgList/ImgList.jsx'

const Main = (props) => {
    // 状态
    const { maindata } = props
    // action 
    const { getMainDataDispatch } = props
    const { classify=[], rotationImg=[], menuBarData={} } = maindata

    // console.log(maindata, '////////////');
    useEffect(() => {
        if(!maindata.length) {
            getMainDataDispatch()
        }
    },[])
    return (
        <div className='main'>
            <Scroll
                direction={"vertical"}
                refresh={false}
            >
                <div className='main-padding'>
                    <Classify classify={classify}/>
                    <RotationChart rotationImg={rotationImg}/>
                    <MenuBar menuBarData={menuBarData}/>
                    <ImgList />
                </div>
            </Scroll>
        </div>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
          
            dispatch(actionTypes.getMainData())
        }
    }
}
const mapStateToPorps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
export default connect(mapStateToPorps, mapStateToDispatch)(Main)