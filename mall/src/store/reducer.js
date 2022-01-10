import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as serverReducer } from '../pages/server/store/index'




export default combineReducers({
    main: mainReducer,
    server: serverReducer
});