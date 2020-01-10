import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu'
import Topics from '../../components/topics/topics'
import { AtButton } from 'taro-ui'

class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount(){

  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>  
    
        <Menu />
        <Topics />
      </View>
    )
  }
}

export default Index
