
//显示指定用户列表的 ui 组件
import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import './user-list.css'
const Header = Card.Header
const Body = Card.Body
 class Userlist extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }
    render() {

        return (
            <WingBlank style={{ marginTop: '50px', marginBottom: '50px' }}>
                {
                    Array.from(this.props.userList).map(user => (

                        <div key={user._id}>

                            <Card onClick={() => { this.props.history.push(`/chat/${user._id}`) }}>
                                {user.header ? <Header thumb={require(`../../assets/images/headers/${user.header}.png`)} extra={user.username} /> : <Header thumb={require(`../../assets/images/headers/头像20.png`)} extra={user.username} />}
                                <Body>
                                    <div>职位: {user.post}</div>
                                    <div>公司: {user.company}</div>
                                    <div>月薪: {user.salary}</div>
                                    <div>描述: {user.info}</div>
                                </Body>
                            </Card>
                        </div>
                    ))
                }
            </WingBlank>

        )


    }
}
export default withRouter( Userlist )
