import * as actionTypes from './constants' 
import { reqdetail } from '../../../api/index'

export const changeDetailData = (data) => {
    return {
        type: actionTypes.CHANGE_DETAIL_DATA,
        data
    }
}

export const getDetailData = (id) => {
    return (dispatch) => {
        reqdetail(id)  
            .then(data => {
                console.log(data, '///////////////')
                dispatch(changeDetailData(data.data.data))
            })
    }
}