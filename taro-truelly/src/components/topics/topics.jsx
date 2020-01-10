import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { getTopicsLIst, getNextTopics } from '../../actions/topicslist'
import Topic from './topic'

@connect(function (store) {
    return { ...store.topics, currentCata: store.menu.currentCata }
}, function (dispatch) {
    // getTopicsLIst(){
    //     dispatchEvent(getTopicsLIst())
    // }
    return {
        getTopicsLIst(prams) {
            dispatch(getTopicsLIst(prams));
        },
        getNextTopics(prams) {
            dispatch(getNextTopics(prams))
        }
    }
})

export default class Topics extends Component {
    componentWillMount() {
        let { page, limit, currentCata } = this.props;
        this.props.getTopicsLIst && this.props.getTopicsLIst({ page, limit, "tab": currentCata.key })
    }
    componentDidMount() {

    }

    //触发分页请求
    onScrollToLower() {
        console.log('onScrollToLower')
        let { page, limit, currentCata } = this.props;
        this.props.getNextTopics && this.props.getNextTopics({ page:page+1, limit, "tab": currentCata.key })
}
render() {
    let { list } = this.props;
    return (

        <ScrollView style={{ height: '650px' }} scrollY={true} onScrollToLower={this.onScrollToLower.bind(this)}>
            {
                list.map(item => <Topic item={item} />)
            }
        </ScrollView>
    )
}
}