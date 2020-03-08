import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderSelector from '../../components/header-selector/headerSelector'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { updateUser } from '../../redux/actions'

class LaobanInfo extends Component {
    state = {
        header: '', //头像名称
        post: '', //职位
        info: '', //个人或职位简介
        company: '', //公司名称
        salary: ''  //月薪
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
        const {header, type} = this.props.user;
        if(header){
            const path = type==='laoban'?'/laoban':'dashen';
            return <Redirect to={path} />
        }

        return (
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
               
                <InputItem placeholder="请输入职位" onChange={val => { this.handleChange('post', val) }}>招聘职位:</InputItem>
                <InputItem placeholder="请输入公司名称" onChange={val => { this.handleChange('company', val) }}>公司名称:</InputItem>
                <InputItem placeholder="请输入职位薪资" onChange={val => { this.handleChange('salary', val) }}>职位薪资:</InputItem>

                <TextareaItem title="职位要求:"
                    rows={3}
                    placeholder="请输入职位要求"
                    onChange={val => { this.handleChange('info', val) }}
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
)(LaobanInfo)