import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Classify from '../../components/main/classify/Classify.jsx'

const Main = (props) => {
    // 状态
    const { maindata } = props
    // action 
    const { getMainDataDispatch } = props
    const { classify=[] } = maindata

    // console.log(maindata, '////////////');
    useEffect(() => {
        if(!maindata.length) {
            getMainDataDispatch()
        }
    },[])
    return (
        <>
            <Scroll
                direction={"vertical"}
                refresh={false}
            >
                <div>
                    <Classify classify={classify}/>
                </div>
            </Scroll>
        </>
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