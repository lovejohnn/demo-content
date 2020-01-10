const TOPICS_STATE = {
    page: 1, //默认显示的页数
    limit: 20,
    list: [], //存储当前加载的数据
}

export function topics(prestate = TOPICS_STATE, action) {
    switch (action.type) {
        case 'getTopicsList': return { ...prestate, list: action.list }
        case 'getNextTopics': return { ...prestate, list: prestate.list.concat(action.list), page: action.page }
        default: return { ...prestate }
    }
}

