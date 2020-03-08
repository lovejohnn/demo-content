
import { combineReducers } from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST,
    RECEIVE_MSG_LIST,
    RECEIVE_MSG,
    READ_MSG
} from './action-types'
import { getRedirectTo } from '../utils/index'
//包含n个 reducer 函数：根据老的 state 和指定的action返回一个新的 state
//需要合并 reducer

// function xxx(state = 0, action) {
//     return state;
// }

// function yyy(state = 0, action) {
//     return state;
// }

//管理后台返回的数据  
const initUser = {
    username: '', //用户名
    type: '',  //用户类型  dashen laoban
    msg: '',  //错误提示信息
    redirectTo: ''//需要自动重定向的路由路径
}

const initUserList = {
    userList: [],  //用户列表
}

const initMessageLIst = {
    users: {},// 所有的聊天用户
    chatMsgs: [],//所有的聊天信息
    unReadCount: 0, //消息总数
}

//产生user状态的 reducer
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS://data 是user
            const { type, header } = action.data;
            return { ...action.data, redirectTo: getRedirectTo(type, header) };
        //对应四个界面
        case ERROR_MSG: //data 是  msg
            return { ...state, msg: action.data };

        case RECEIVE_USER://data 是user   //全部的路由权限交给 mian 去做
            return action.data;
        case RESET_USER://data 是user
            return { ...initUser, msg: action.data };
        //对应四个界面
        default:
            return state;
    }
}
//用户列表的 reducer
function userList(state = initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data; //data 为 userList
        default:
            return state;
    }
}

//用户所有聊天记录的 reducer
function userMessage(state = initMessageLIst, action) {
    switch (action.type) {
        case RECEIVE_MSG_LIST:  //action.data   {users,chatMsg}
            const { users, chatMsgs, userid } = action.data;
            return {
                users, chatMsgs, unReadCount: chatMsgs.reduce((preTotal, msg) => preTotal + (!msg.read && msg.to === userid ? 1 : 0), 0)
            };
        case RECEIVE_MSG://action.data ==chatMsg
            const { chatMsg, from } = action.data;  //from就是userid

            return {
                users: state.users,
                chatMsgs: [...state.chatMsgs, chatMsg],
                unReadCount: state.unReadCount + (!chatMsg.read && chatMsg.to === from ? 1 : 0)
            };

        case READ_MSG:
            const { unReadCount, me, to } = action.data;
            state.chatMsgs.forEach(msg => {
                if (msg.me === me && msg.to === to && !msg.read) {
                    msg.read = true
                }
            })
            return {
                users: state.users,
                chatMsgs: state.chatMsgs.map(msg => {
                    if (msg.me === me && msg.to === to && !msg.read) { // 需要更新
                        return { ...msg, read: true }
                    } else {// 不需要
                        return msg
                    }
                }),
                unReadCount: state.unReadCount - unReadCount
            };
        default:
            return state;
    }
}

export default combineReducers(
    {
        // xxx,
        // yyy
        user,
        userList,
        userMessage
    }
)

//向外暴露的状态的结构  {user:{}}

