import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    num: 99,
    index: 0 // tabbar哪个被激活？ 核心状态 
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.SET_INDEX:
            return {...state, index: action.data}
        case actionTypes.SET_NUM:
            return {...state, num: action.data}
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        default:
            return state;
    }
}
export default reducer;