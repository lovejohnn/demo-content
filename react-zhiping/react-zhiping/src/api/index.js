// 返回值都是 promise
import ajax from './ajax'
//注册接口
// const baseUrl = 'localhost:4000'
const baseUrl = '';
export const reqRegister = (user) => ajax(baseUrl + '/register', user, 'POST')
//登录接口
export function reqLogin({ username, password }) {
    return ajax(baseUrl + '/login', { username, password }, 'POST')
}
//更新用户接口
export const reqUpdateUser = (user) => ajax(baseUrl + '/update', user, 'POST')
//获取用户信息接口
export const reqGetUser = () => ajax('/user')
//获取指定类型用户列表
export const reqUserList = (type) => ajax('/userlist', { type });
//获取当前用户的聊天消息列表
export const reqMessageList = () => ajax('/msglist')

// 修改指定消息为已读  from 发送信息的用户id
export const reqFixRead = (from) =>  ajax('/readmsg', {from}, "POST")
