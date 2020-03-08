import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {  login } from '../../redux/actions'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button,
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import '../../assets/css/index.css'
class Login extends Component {
    state = {
        username: '', //用户名
        password: '',//密码
    }
    login = () => {
        this.props.login(this.state)
    }
    handleChange = (name, val) => {
        // console.log('name', name)
        // console.log('val', val)

        //更新状态
        this.setState({
            [name]: val
        })
    }
    toRegister = () => {
        this.props.history.push('./register');
    }
    render() {
        const { msg, redirectTo } = this.props.user;
        //如果redirectTo 有值，就需要重定向到 redirectTo 值所在地方
        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }
        return (
            <div>
                <NavBar>江&nbsp;湖&nbsp;直&nbsp;聘</NavBar>
                <Logo type="small" />
                <WingBlank>
                    <List>
                    {msg ? <div className="error-msg">{msg}</div> : null}
                        <InputItem onChange={val => { this.handleChange('username', val) }} placeholder="请输入姓名">用户姓名:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={val => { this.handleChange('password', val) }} placeholder="请输入登录密码">登录密码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                       
                        
                        <Button type="primary" onClick={this.login}>登录</Button>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default connect(
    state=>(
        { user: state.user } 
    ),
    {  login }
)(Login);