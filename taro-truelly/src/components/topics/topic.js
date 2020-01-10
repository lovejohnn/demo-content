import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './topic.less'
export default class Topic extends Component {
    componentDidMount() {

    }
    render() {
        let { item } = this.props;
        return (

            <View className='container'>
                <Image className="head-img" src={item.author ? item.author.avatar_url : ''} ></Image>
                <View className="topics-content">
                    <View>
                        <Text>
                            {
                                item.top ? <Text className="zhiding">置顶</Text> : item.tab === 'ask' ? <Text className='ask'>问答</Text> : <Text className='share'>分享</Text>
                            }
                        </Text>
                        <Text className="title">{item.title}</Text>
                    </View>
                    <View className="topics-info">
                        <Text>{item.author.loginname}</Text>
                        <Text>{item.reply_count}/{item.visit_count}</Text>
                        <Text>创建时间{item.create_at}</Text>
                    </View>
                </View>
            </View>

        )
    }
}