//这是老板主界面路由容器组件
import React, { Component } from 'react'
import Userlist from '../../components/uesr-list/user-list'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/actions'
class Laoban extends Component {
    componentDidMount() {
        this.props.getUserList('dashen')
    }
    render() {
      
        if(!this.props.userList){  //没有值的时候，不显示
            return null;
        }
       
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
)(Laoban)
