import * as actionType from './constants.js';
import { reqmain } from '../../../api/index'
//主页数据
export const changeMainData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

export const setIndex = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.SET_INDEX,
        data: data
    }
}

export const setNum = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.SET_NUM,
        data: data
    }
}

export const getMainData = () => {
    return (dispatch) => {
        reqmain()
            .then((res) => {
                // console.log(res)
                dispatch(changeMainData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了')
            })
    }
    // api

    // dispatch 同步骤 action
}