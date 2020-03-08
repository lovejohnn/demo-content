//这是个人中心主界面路由容器组件
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import Cookies from 'js-cookie'
import { resetUser } from '../../redux/actions'
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert;
class Personal extends Component {
    logout = () => {

        alert('退出', '确定退出登录吗？', [
            { text: '取消'},
            {
                text: '确定', onPress: () => {
                    //退出登录要做的事情
                    //1. 干掉 cookie 中的 userid
                    Cookies.remove('userid')
                    //2. 干掉 redux 管理的 user
                    this.props.resetUser()
                }
            },
        ]);
    }
    render() {
        const { username, type, company, header, info, post, salary } = this.props.user;
        return (
            <div >
                <Result
                    img={<img src={require(`../../assets/images/headers/${header}.png`)} style={{ width: 50 }} alt="header" />}
                    title={username} message={company}
                    style={{marginTop:'50px'}}
                />
                <List
                    renderHeader={() => type === 'laoban' ? '招聘信息' : '应聘信息'}
                >
                    <Item multipleLine>
                        <Brief>{type === 'laoban' ? '职位:' : '应聘职位:'} {post}</Brief>

                        <Brief>{type === 'laoban' ? '企业要求:' : '个人简介:'} {info}</Brief>
                        {salary ? <Brief>{type === 'laoban' ? '薪资:' : '期望薪资:'}{salary}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace />
                <List> <Button type='warning' onClick={this.logout}>退出登录</Button> </List>
            </div>
        )
    }
}
export default connect(
    state => ({
        user: state.user
    }),
    {
        resetUser
    }
)(Personal)