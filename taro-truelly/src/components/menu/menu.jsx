import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './menu.less'
import { showDrawer, changeCata, hideDrawer } from '../../actions/menu'
import { AtButton, AtDrawer } from 'taro-ui'


//第一个函数是把我们的 store 转换为 props mapStateToprops mapdispatchToprops
//第二个函数
@connect(function (store) {
    return { ...store.menu }
}, function (dispatch) {
    //用来触发我们的逻辑
    return {
        showMenu() {
            //传统的开发： 对象
            // dispatch({type:"showDrawer"})

            //异步编程，dispatch中可以执行一个函数
            //这个函数 返回了一个函数 执行一遍，dispatch 参数
            dispatch(showDrawer())
        },
        changeCata(cata) {
            dispatch(changeCata(cata))
        },
        hideMenu() {
            dispatch(hideDrawer())
        }
    }
    // dispatch({type:'showDrawer'})
})
//把ui与逻辑分开，在 action 中写逻辑

class Menu extends Component {
    //显示抽屉
    showDrawer(event) {
        //短路表达式
        event.stopPropagation()
        this.props.showMenu && this.props.showMenu();
    }
    //取出显示列表的值
    getItem(cataData) {
        return cataData.map((item) => item.value)
    }
    //点击分类时触发
    clickCata(index) {
        let { cataData } = this.props;
        let cickCata = cataData[index]; //获取点击项的数据
        //通知我顶部的区域我改了分类，把当前显示改变
        this.props.changeCata && this.props.changeCata(cickCata);
    }
    //关闭抽屉
    closeDrawer() {
        this.props.hideMenu && this.props.hideMenu();
    }
    render() {
        let { showDrawer, cataData } = this.props;
        console.log(showDrawer, this.getItem(cataData))
        return (
            <View>
                <View className="topics-menu">
                    <Image onClick={this.showDrawer.bind(this)} className={'image'} src={require('../../asstes/img/cata.png')}></Image>
                    <Text>{this.props.currentCata ? this.props.currentCata.value : ""}</Text>
                    <Image className={'image'} src={require('../../asstes/img/login.png')}></Image>
                </View>
                <AtDrawer
                    show={showDrawer}
                    mask
                    items={this.getItem(cataData)}
                    width={'140px'}
                    onItemClick={this.clickCata.bind(this)}
                    onClose={this.closeDrawer.bind(this)}
                ></AtDrawer>
            </View>

        )
    }
}

export default Menu;