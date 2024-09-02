import { combineReducers } from 'redux';
import { USER } from './action';



//存放我們接收 action 後的處理方法
let defaultUser = { name: "Louis", age: 100, sex: "M" }
// 會有兩個參數(第一個為初始值，第二個為 action)
function user(state = defaultUser, action) {
    switch (action.type) {
        case USER:
            return action.data;
        default:
            return state;
    }
}
const reducers = combineReducers({ user })

export default reducers