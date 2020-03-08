//选择用户头像的 UI 组件
import React, { Component } from 'react';

import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class HeaderSelector extends Component {
    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }
    state = {
        icon: null //图片对象,默认没有值的
    }
    constructor(props) {
        super(props)
        this.handerList = [];
        for (let i = 0; i < 20; i++) {
            this.handerList.push({
                icon: require(`../../assets/images/headers/头像${i + 1}.png`),//不能使用 import
                text: '头像' + (i + 1)
            })
        }
    }
    handleClick = ({text,icon}) => {
        //点击选中图片，更新图片地址，更新显示状态
        console.log(text,icon)
        //更新当前组件状态
        this.setState({
            icon
        })
        //调用函数更新父组件状态
        this.props.setHeader(text)
    }
    render() {
        const { icon } = this.state;
        const listHeader = !this.state.icon ? '请选择头像' :
            (<div>已选择头像:<img src={icon} /> </div>);
        return (

            <List renderHeader={() => listHeader} className="my-list">

                <Grid data={this.handerList} activeStyle={false} columnNum={5}
                    onClick={this.handleClick}
                />
            </List>
        );
    }
}

export default HeaderSelector;