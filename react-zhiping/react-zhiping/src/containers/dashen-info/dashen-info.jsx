import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderSelector from '../../components/header-selector/headerSelector'
import { NavBar, InputItem, WhiteSpace, TextareaItem, Button } from 'antd-mobile'
import { updateUser } from '../../redux/actions'


class DashenInfo extends Component {
    state = {
        post: '', //职位
        info: '', //个人或职位简介
    }
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    //更新 header 状态
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    save = () => {
        this.props.updateUser(this.state);
    }
    render() {
        //如果信息已经完善，自动重定向到对应的路由路径
        const { header, type } = this.props.user;
        if (header) {
            const path = type === 'laoban' ? '/laoban' : 'dashen';
            return <Redirect to={path} />
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>

                <WhiteSpace></WhiteSpace>
                <InputItem placeholder="请输入求职岗位" onChange={(val) => { this.handleChange('post', val) }}>求职岗位:</InputItem>

                <TextareaItem title="个人介绍:"
                    rows={3}
                    placeholder="请输入个人介绍"
                    onChange={(val) => { this.handleChange('info', val) }}
                >

                </TextareaItem>
                <Button type="primary" onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { updateUser }
)(DashenInfo)