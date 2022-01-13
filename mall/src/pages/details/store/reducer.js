import * as actionTypes from './constants'

const defaultState = {
    datailData: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            return {
                    ...state,
                    datailData: action.data
            }
        default:
            return state
    }
}

export default reducer