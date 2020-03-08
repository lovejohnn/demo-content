import io from 'socket.io-client'
import {
    reqLogin,
    reqRegister,
    reqUpdateUser,
    reqGetUser,
    reqUserList,
    reqMessageList,
    reqFixRead,
} from '../api/index'
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

import { getLastMsgs } from '../containers/message/message'

// 包含n个action creator 
// 异步 action
// 同步 action

// 授权成功的同步 action
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
// 错误提示信息的同步 action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg }) //way 1
//const errorMsg = (msg) => ({ type: ERROR_MSG, msg })  //way 2
//接收用户的同步 actoin
const recieveUser = (user) => ({ type: RECEIVE_USER, data: user })
//重置用户的 同步action
export const resetUser = (msg) => ({ type: RESET_USER, data: msg })
//获取用户列表的 同步action
const recieveUserList = (userList) => ({ type: RECEIVE_USER_LIST, data: userList });

const recieveMessageList = ({ users, chatMsgs, userid }) => ({ type: RECEIVE_MSG_LIST, data: { users, chatMsgs, userid } })
const recieveMessage = (chatMsg, from) => ({ type: RECEIVE_MSG, data: { chatMsg, from } })

const readmsg = ({ me, to, unReadCount }) => ({ type: READ_MSG, data: { me, to, unReadCount } })

export const initIo = (dispatch, from) => {
    //单列对象
    //1. 创建对象之前：判断对象是否已经存在，只有在不存在才去创建
    //2. 创建对象之后：保存对象

    //1. 创建对象之前：判断对象是否已经存在，只有在不存在才去创建
    if (!io.socket) {
        //连接服务器，得到与服务器的连接对象
        io.socket = io('ws://localhost:4000')
        //判断监听，接收服务器发送的消息
        console.log(`我开启了server---${from}的监听`)
        io.socket.on(`server${from}`, function (chatMsg) {
            console.log('浏览器接收的消息', chatMsg, from)
            //当接收到了自己的消息时 chatMsg的from是自己的 userid时候，就保存信息
            //更新自己发给别人的消息，更新自己收到别人的消息
            if (chatMsg.from == from || chatMsg.to == from) {  //因为自己收不到自己发给自己的信息。所以在sendMsg中做 派发事件
                dispatch(recieveMessage(chatMsg, from))
                //重新排序显示消息
                getLastMsgs(chatMsg, from)
            }
        })
    }
}

//获取聊天信息列表的函数
async function getMessageList(dispatch, from) {
    initIo(dispatch, from)
    const response = await reqMessageList()
    const result = response.data;
    if (result.code === 0) {
        //分发一个action
        const { users, chatMsgs } = result.data;
        dispatch(recieveMessageList({ users, chatMsgs, userid: from }))//from就是自己，也是userid
    }
}

//更新未读消息列表
export const readMsg = (me,to) => { //这里的from是target
    return async dispatch => {
        //发起请求
        const response = await reqFixRead(to)
        
        const result = response.data;
        if (result.code === 0) {
            let unReadCount = result.data;
          
            dispatch(readmsg({ me, to, unReadCount }))
          
        }
    }
}

//用户发送信息的异步 action
export const sendMsg = (from, to, content) => {
    return dispatch => {
        console.log('browserMessage发送成功', from, to, content)
        dispatch(recieveMessage({ read: true, from, to, content, chat_id: [from, to].sort().join('_'), create_time: new Date().getTime() }, from))
        io.socket.emit('browserMessage', { from, to, content })
    }
}

//注册异步 action
export const register = (user) => {
    const { username, password, password2, type } = user;
    //做表单的前台验证
    if (password !== password2) {
        return errorMsg('2次密码要一致')
    }
    if (!username) {
        return errorMsg('用户名必须要指定')
    }

    //因为是一个 异步 action
    // return 的是一个 函数，
    return async dispatch => {
        //发送注册的异步请求

        //promise 的写法
        //  reqRegister(user).then( response => {
        //      const result = response.data // {code:0/1,data:user,msg:''}
        //  } )

        //await async 的写法
        const response = await reqRegister({ username, password, type });//一旦这条语句写了 await 这个语句的所在函数就必须写上 async
        const result = response.data; // {code:0/1,data:user,msg:''}
        if (result.code === 0) {//成功

            getMessageList(dispatch, result.data._id)//注册后登陆，获取用户聊天信息
            //分发 授权成功的同步 action
            dispatch(authSuccess(result.data))

        } else {//失败，会有msg
            //分发 错误提示信息的同步 action
            dispatch(errorMsg(result.msg))
        }
    }
}

//登录异步 action
export const login = (user) => {
    const { username, password } = user;
    //做表单的前台验证
    if (!username) {
        return errorMsg('用户名必须要指定')
    }
    if (!password) {
        return errorMsg('密码必须要指定')
    }
    //因为是一个 异步 action
    // return 的是一个 函数，
    return async dispatch => {
        //发送登录的异步请求
        //await async 的写法
        const response = await reqLogin(user);//一旦这条语句写了 await 这个语句的所在函数就必须写上 async
        const result = response.data;
        if (result.code === 0) {//成功
            getMessageList(dispatch, result.data._id)//注册后登陆，获取用户聊天信息
            //分发同步的  actino
            dispatch(authSuccess(result.data))

        } else {//失败，会有msg
            //分发同步的  actino
            dispatch(errorMsg(result.msg))
        }
    }
}


//更新用户的异步 action
export const updateUser = (user) => {


    return async (dispatch) => {
        const response = await reqUpdateUser(user);
        const result = response.data;
        if (result.code === 0) {//成功
            //分发同步的  actino
            dispatch(recieveUser(result.data))
        } else {//失败，会有msg
            //分发同步的  actino
            dispatch(resetUser(result.msg))
        }
    }
}

//获取用户信息异步action
export const getUser = () => {
    return async dispatch => {
        //发起异步请求
        const response = await reqGetUser();
        const result = response.data;
        if (result.code === 0) {
            getMessageList(dispatch, result.data._id)//注册后登陆，获取用户聊天信息
            //成功，返回信息
            dispatch(recieveUser(result.data))
        } else {
            //失败，返回失败信息
            dispatch(resetUser(result.msg))
        }
    }
}
//获取用户列表的异步action
export const getUserList = (type) => {
    return async dispatch => {
        //发起异步请求
        const response = await reqUserList(type);
        const result = response.data;
        if (result.code === 0) {
            //成功，返回信息
            dispatch(recieveUserList(result.data))
        }
    }
}

