import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Cookies from 'js-cookie'  //可以操作前端cookie的对象 set() get() remove()
import { getRedirectTo } from '../../utils/index'
import { getUser } from '../../redux/actions'
import '../../assets/css/index.css'
import { Button } from 'antd-mobile'

import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from '../personal/personal'
import Navfooter from '../../components/nav-footer/nav-footer'
import NotFound from '../../components/not-found/not-found'
import Chat from '../chat/chat'

import {initIo} from '../../redux/actions'

class Main extends Component {
    state={
        from:'',
        content:''
    }
    navList = [
        {
            path: '/laoban', // 路由路径 
            component: Laoban, title: '大神列表', icon: 'dashen', text: '大神',
        },
        {
            path: '/dashen', // 路由路径 
            component: Dashen, title: '老板列表', icon: 'laoban', text: '老板',
        },
        {
            path: '/message', // 路由路径 
            component: Message, title: '消息列表', icon: 'message', text: '消息',
        }, {
            path: '/personal', // 路由路径 
            component: Personal, title: '用户中心', icon: 'personal', text: '个人',
        }]
    componentDidMount() {
        //登录过(cookie中有userid)，但没有登录(redux管理的user中没有_id)，发请求获取对应的user 
        const userid = Cookies.get('userid');
        const { _id } = this.props.user;
        if (userid && !_id) {
            //发送异步请求，获取 user 信息
            // console.log('发送ajax请求获取user')
            this.props.getUser()
          
           
        }
       
    }
    render() {
        //检测用户是否登录，如果没有自动重定向到登录路由
        //读取cookie 中的 userid
        const userid = Cookies.get('userid');
        //如果没有，自动重定向到登录界面
        if (!userid) {
            return <Redirect to='/login' />
        }
        //如果有，读取redux 中的user 状态
        const { user } = this.props;
        // debugger
        //如果user 有没有_id,返回null（不做任何显示）
        if (!user._id) {
            return null;
        } else {
            //如果有_id，显示对应的界面

            //如果请求根路径，根据user 的 type和 header 来计算出一个重定向的路由路径，并自动重定向
            let path = this.props.location.pathname;
            if (path === '/') {
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path} />
            }
        }

        //拿到当前路由路径
        const path = this.props.location.pathname;

        //拿到列表对象
        const { navList } = this;
        //判断是否是给点路径
        const current = navList.find((nav) => path === nav.path)
        if (current) {
            if (user.type == 'laoban') {
                navList[1].hide = true
            }
            if (user.type == 'dashen') {
                navList[0].hide = true
            }
        }


         
        return (
            <div>

                {current ? <Button type="primary" className="stickey-header" >{current.title}</Button> : null}
                <Switch>
                    {
                        navList.map((nav) => {
                            return <Route path={nav.path} component={nav.component} key={nav.path} />
                        })
                    }
                    <Route path='/laobaninfo' component={LaobanInfo} />
                    <Route path='/dasheninfo' component={DashenInfo} />
                    <Route path='/chat/:userid' component={Chat} />
                    <Route component={NotFound} />
                </Switch>
                {current ? <Navfooter navList={navList} /> : null}
            </div>
        );
    }
}

export default connect(
    (state) => ({ user: state.user }),
    { getUser }
)(Main);

//实现自动登录
// 一：componentDidMount()
    // 1. 登录过（cookie中有userid），但没有登录（redux管理的user中没有_id) 发请求获取对应的user
// 二:render
    // 2. 如果 cookie中没有 userid，直接重定向到 login
    // 3. 判断 redux 管理的 user中是否有 _id，如果没有，暂时不做任何显示
    // 4. 如果有，说明当前已经登录，显示对应的界面(这里需要判断用户类型，可以根据对应的界面路由显示，但是请求的是根路径又要进行处理)
    // 5. 如果请求根路径：根据 user 的 type 和 header 来计算出一个重定向的路由路由，并自动重定向到指定路由
