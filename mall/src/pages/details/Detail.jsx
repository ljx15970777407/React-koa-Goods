import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux'
import * as actions from './store/actionCreators'
import { useLocation } from 'react-router-dom';

const Detail = (props) => {
    const { data } = props
    const { getDetailData } = props
    console.log(data, '////////////////////');
    let { pathname } = useLocation()
    let id = pathname.replace('/detail/') || undefined;
    useEffect(() => {
        if (id) {
            getDetailData(id)
        }
    }, [])
    return (
        <>
        </>
    )
}

const mapStateToPorps = (state) => {
    return {
        data: state.detail.datailData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData(id) {
            dispatch(actions.getDetailData(id))
        }
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(memo(Detail)) 
