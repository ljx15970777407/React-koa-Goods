import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Scroll from '../../baseUI/scroll'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Classify from 
    '../../components/main/classify/Classify'
import RotationChart from 
    '../../components/main/rotationChart/RotationChart'
import MenuBar from 
    '../../components/main/menuBar/MenuBar'
import ImgList from 
    '../../components/main/imgList/ImgList'
import SearchInput from '../../components/SearchInput/SearchInput'
import MainPopup from '../../components/mainPopup/MainPopup'
import HomeService from '@/components/main/homeService/HomeService'
import FrameLayout from '@/components/main/frameLayout/frameLayout'
import * as api from '@/api'
import ListData from '@/components/main/listData/ListData'
import { forceCheck } from 'react-lazyload'

const Main = (props) => {
    // 状态
    let [list, setList] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [display, setDisplay] = useState(false)
    const history = useHistory()
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props
    const { classify=[],  rotationImg=[], menuBarData={} } = maindata
    let [page, setPage] = useState(1)
    console.log(maindata)
    const fetchList = () => {
        api
            .reqlist(page)
            .then(res => {
                setList([
                    ...list,
                    ...res.data.data.list
                ])
        })
    }
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
        fetchList()
    }, [])

    useEffect(() => {
        fetchList()
    }, [page])

    const handleOnclick = () => {
        // popup 组件的显示？
        setShowPopup(!showPopup)
    }
    // 上拉加载更多
    const handlePullUp = () => {
        setPage(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
    }

    return (
        <div className="main">
            <SearchInput 
                handleOnclick={() => {handleOnclick()}}
                searchBoxHandleOnclick={() => history.push('/search')}
            />
            <Scroll
                direction={"vertical"}
                refresh={false}
                onScroll={
                    (e) => {
                        // console.log(e.y)
                        if (e.y < -1142) {
                            setDisplay(true)
                        } else {
                            setDisplay(false)
                        }
                        forceCheck()
                    }
                }
                pullUp={handlePullUp}
                pullDown={handlePullDown}
                >
                <div className="main-padding">
                    <Classify classify={classify}/>
                    <RotationChart rotationImg={rotationImg}/>
                    <MenuBar menuBarData={menuBarData} />
                    <ImgList />
                    <HomeService/>
                    <FrameLayout />
                    <ListData list={list}/>
                </div>
            </Scroll>
            <MainPopup 
                handleOnclick={ handleOnclick}
                display={showPopup}/>
        </div>
    )
}
const mapStateToPorps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        }
    }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Main))