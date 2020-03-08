//这是大神主界面路由容器组件
import React, { Component } from 'react'
import Userlist from '../../components/uesr-list/user-list'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/actions'
class Dashen extends Component {
    componentDidMount() {
        this.props.getUserList('laoban')
    }
    render() {
     
        
        return (
            <div>
                <Userlist userList={this.props.userList}></Userlist>
            </div>
        )
    }
}
export default connect(
    state => ({
        userList: state.userList,//这个state.userList是表明哪个reducer的数据
    }),
    {
        getUserList
    }
)(Dashen)