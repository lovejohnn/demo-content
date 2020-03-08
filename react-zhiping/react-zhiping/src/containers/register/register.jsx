import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register, login } from '../../redux/actions'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button,
    Radio
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import '../../assets/css/index.css'
const ListItem = List.Item;
class Register extends Component {
    state = {
        username: '', //用户名
        password: '',//密码
        password2: '',//确认密码
        type: 'laoban',//用户类型  laoban dashen
    }
    register = () => {
        //console.log(this.state)
        this.props.register(this.state)
    }
    handleChange = (name, val) => {
        // console.log('name', name)
        // console.log('val', val)

        //更新状态
        this.setState({
            [name]: val
        })
    }
    toLogin = () => {
        this.props.history.push('./login');
    }
    render() {
        const { type } = this.state;
        const { msg, redirectTo } = this.props.user;
        //如果redirectTo 有值，就需要重定向到 redirectTo 值所在地方
        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }
        return (
            <div>
                <NavBar>江&nbsp;湖&nbsp;直&nbsp;聘</NavBar>
                <Logo type="nomal" />
                <WingBlank>
                    <List>
                        {msg ? <div className="error-msg">{msg}</div> : null}
                        <InputItem onChange={val => { this.handleChange('username', val) }} placeholder="请输入姓名">用户姓名:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={val => { this.handleChange('password', val) }} placeholder="请输入密码">登录密码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={val => { this.handleChange('password2', val) }} placeholder="再次输入密码">确认密码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <ListItem >
                            <span >用户类型:</span>
                            &nbsp;&nbsp;&nbsp;
                                <Radio checked={type === 'laoban'} onChange={val => { this.handleChange('type', 'laoban') }} >老板</Radio>
                            &nbsp;&nbsp;&nbsp;
                                <Radio checked={type === 'dashen'} onChange={val => { this.handleChange('type', 'dashen') }}>大神</Radio>
                        </ListItem>
                        <WhiteSpace></WhiteSpace>
                        <WhiteSpace></WhiteSpace>
                        <Button type="primary" onClick={this.register}>注册</Button>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}


//包装生成一个容器组件
export default connect(
    state => ({ user: state.user }),
    { register, login }
)(Register);