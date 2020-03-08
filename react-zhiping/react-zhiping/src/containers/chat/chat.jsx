/*对话聊天的路由组件
*/
import React, { Component } from 'react'
import { NavBar, List, InputItem, Grid, Icon } from 'antd-mobile'
import './chat.css'
import { connect } from 'react-redux'
import { sendMsg,readMsg } from '../../redux/actions'

import QueueAnim from 'rc-queue-anim';

import '../../assets/css/index.css'
const Item = List.Item
class Chat extends Component {
    state = {
        content: '',//用户输入信息
        isShowBQ: false, //是否渲染表情
    }
    send = () => {
        //获取信息 from to content
        const from = this.props.user._id;
        const to = this.props.match.params.userid;
        const content = this.state.content.trim();
        if (content) {
            //发送信息
            this.props.sendMsg(from, to, content)
            this.setState({ content: '', isShowBQ: false })
        }
    }
    onhide = () => {
        this.setState({ isShowBQ: false })
    }
    keyDownHeadle = (e) => {
        console.log(e)
    }
    componentWillMount() {
        this.emojis = [
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐',
            '😀', '😅', '😍', '😐'
        ]
        this.emojis = this.emojis.map(value => ({ text: value }))




    }
    componentDidMount() {
        //初始化显示列表，滑动到最底部
        window.scrollTo(0, document.body.scrollHeight);
        //监听键盘事件
        document.addEventListener("keydown", this.onKeyDown)

        const me = this.props.user._id;
        const to = this.props.match.params.userid
        
        //更新未读消息数据
        this.props.readMsg(me,to)

    }
    componentDidUpdate() {
        //更新显示列表时，滑动到最底部
        window.scrollTo(0, document.body.scrollHeight);
    }
    componentWillUnmount() {
        //卸载时 取消监听事件
        document.removeEventListener("keydown", this.onKeyDown)

        const me = this.props.user._id;
        const to = this.props.match.params.userid
        //更新未读消息数据
        this.props.readMsg(me,to)
    }
    //键盘事件
    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 13://回车事件
            console.log('我回车了')
            this.send();
                break
        }
    }
    turnShow = () => {
        const showOrHide = !this.state.isShowBQ;
        this.setState({ isShowBQ: showOrHide })
        if (showOrHide) {
            // 异步手动派发 resize 事件,解决表情列表显示的 bug
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'))
            }, 0)
        }

    }
    render() {
        //获取信息 from to content
        const { user } = this.props
        const { users, chatMsgs } = this.props.userMessage;
     

        //获取到聊天id
        const me = user._id
        if (!users[me]) {  //如果还没有获取到数据，不做任何显示
            return null;
        }
        const target = this.props.match.params.userid;
        const messageid = [me, target].sort().join('_');

        //过滤到聊天id 对应聊天记录
        const newChat = chatMsgs.filter((chat) => (messageid == chat.chat_id))


        //得到聊天用户头像
        const targetheader = users[target].header;
        const targetHeaderText = targetheader ? require(`../../assets/images/headers/${targetheader}.png`) : null;
        const meHeader = user.header;

        const meHeaderText = meHeader ? require(`../../assets/images/headers/${meHeader}.png`) : null;


        return (
            <div id='chat-page' onKeyDown={this.keyDownHeadle}>
                <NavBar
                    icon={<Icon type="left" onClick={() => { this.props.history.goBack() }} />}
                    className='stickey-header'
                >
                    {users[target].username}
                </NavBar>
                <List style={{ marginTop: 50, marginBottom: 50 }}>
                <QueueAnim delay={10} className="queue-simple">
                    {
                        newChat.map((chat) => {
                            if (chat.to == me) {  //怎么知道对方发给我的
                                return (
                                    <Item
                                        key={chat._id}
                                        thumb={targetHeaderText}
                                    >
                                        {chat.content}

                                    </Item>
                                )
                            } else {
                                return (

                                    <Item
                                        key={chat._id}
                                        className='chat-me'
                                        extra={<img src={meHeaderText}></img>}
                                    >
                                        {chat.content}
                                    </Item>
                                )
                            }
                        })
                    }
                    </QueueAnim>


                </List>
                <div className='am-tab-bar'>
                    <InputItem
                        placeholder="请输入"
                        extra={
                            <span>
                                <span onClick={this.turnShow}>😀</span>
                                &nbsp;
                            <span onClick={this.send}>发送</span>
                            </span>
                        }
                        value={this.state.content}
                        onChange={(val) => { this.setState({ content: val }) }}
                        onFocus={this.onhide}
                    />
                    {
                        this.state.isShowBQ ?
                            <Grid
                                data={this.emojis}
                                columnNum={8}
                                carouselMaxRow={4}
                                isCarousel={true}
                                onClick={(item) => {
                                    this.setState({ content: this.state.content + item.text })
                                }}
                            />
                            :
                            null
                    }


                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user, userMessage: state.userMessage
    }), {
    sendMsg,readMsg
}
)(Chat)