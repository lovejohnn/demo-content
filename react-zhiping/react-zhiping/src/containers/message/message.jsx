/*对话消息列表组件
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'
const Item = List.Item
const Brief = Item.Brief

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTime(number, format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

//数据转化  
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
//测试
//formatTime(sjc,'Y/M/D h:m:s'));//转换为日期：2017/03/03 03:03:03
//formatTime(sjc, 'h:m'));//转换为日期：03:03

export function getLastMsgs(chatMsgs, userid) {
    //1. 筛选出每个组 用一个对象存储  {chat_id:lastMSg}
    //2.筛选出每个组的lastMsg，然后组成一个数组
    //3排序，按每个lastMsg的创建时间进行排序
    if(!chatMsgs){
        return;
    }
    const lastMsgObjs = {}
    //遍历出每组lastMsg数据
    Array.from(chatMsgs).forEach(msg => {
        //遍历时添加属性，统计
        if (msg.to === userid && !msg.read) {
            msg.unReadCount = 1
        } else {
            msg.unReadCount = 0
        }


        const chatId = msg.chat_id;
        let lastMsg = lastMsgObjs[chatId];
        if (!lastMsg) { //没有   这里就是0 or 1
            lastMsgObjs[chatId] = msg
        } else {  //有
            const unReadCount = lastMsg.unReadCount
            if (msg.create_time > lastMsg.create_time) {
                lastMsgObjs[chatId] = msg
                //累加unReadCount并保存在最新的lastMsg上
                lastMsgObjs[chatId].unReadCount = unReadCount + msg.unReadCount;
            }
        }
    })
    //得到所有lastMsg的数组
    let lastMsgs = Object.values(lastMsgObjs);
    //对数组进行排序（按create_tiem降序）
    lastMsgs.sort(function (m1, m2) { //如果结果<0,m1前面
        return m2.create_time - m1.create_time
    })
    // //转换数组里面的时间戳为日期
    // lastMsgs.map(msg => {
    //     msg.create_time = formatTime(msg.create_time, 'Y/M/D h:m:s')

    // })
    return lastMsgs;
}
class Message extends Component {
    toChat = () => {

    }
    render() {
        const { user } = this.props;
        let { users, chatMsgs } = this.props.userMessage;
        //对chatMsgs根据chat_id 进行每个用户聊天分组
        //取出每个组的最后一条，进行排序，显示最新的消息
        //users[id].header  id:to就是对面的
        //对chatMsgs 按chat_id进行分组
        let lastMsgs = getLastMsgs(chatMsgs, user._id)
      

        return (
            <List style={{ marginTop: 50, marginBottom: 50 }}>
                {
                    lastMsgs.map(msg => {
                        const targetUser = msg.to === user._id ? users[msg.from] : users[msg.to];
                        const targetUserId = msg.to === user._id ? msg.from : msg.to;
                        return (
                            <Item
                                extra={<Badge text={msg.unReadCount} />}
                                thumb={
                                    targetUser ?
                                        require(`../../assets/images/headers/${targetUser.header?targetUser.header:'头像1'}.png`)
                                        :
                                        require(`../../assets/images/headers/头像1.png`)
                                }
                                arrow='horizontal'
                                onClick={() => { this.props.history.push(`/chat/${targetUserId}`) }}
                            >

                                <Brief>{users[msg.to === user._id ? msg.from : msg.to].username}</Brief>
                                {msg.content}
                            </Item>
                        )
                    })

                }
            </List>
        )
    }
}

export default connect(
    (state) => ({
        user: state.user, userMessage: state.userMessage
    }),
    {

    }
)(Message)