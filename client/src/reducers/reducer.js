import { combineReducers } from "redux";
import accountsReducer from './accountsReducer';
import infoReducer from './infoReducer';
import ordersReducer from './ordersReducer';
import todosReducer from './todosReducer';


const reducer = combineReducers({
    info: infoReducer,
    accounts: accountsReducer,
    orders: ordersReducer,
    todos: todosReducer
})

export default reducer;