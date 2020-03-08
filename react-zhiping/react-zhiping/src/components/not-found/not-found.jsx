import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import not_found_img from './not-found.jpg'
import './not-found.css'
export default class NotFound extends Component {
    render() {
        return (
            <div className="not-index">
            <p>  无法访问此网站localhost 拒绝了我们的连接请求。</p>
            <p>请试试以下办法：</p>
            <p>检查网络连接</p>
            <p> 检查代理服务器和防火墙</p>
            <p>ERR_CONNECTION_REFUSED</p>
               <img src={ not_found_img } alt="" className='nfimg'/>
            <Button type="primary" onClick={() => this.props.history.replace("/")} className="backButton"> 回到首页 </Button>
            </div>
        )
    }
}
