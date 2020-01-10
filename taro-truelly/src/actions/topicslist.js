import { getJSON, postJOSN } from '../utils/request'
import api from '../constants/api'


//得到首页数据
export function getTopicsLIst(params) {
    return async (dispatch) => {
        let result = await getJSON(api.topics, params)
        if (result && result.data) {
            if (result.data.success) {
                dispatch({ type: 'getTopicsList', list: result.data.data })
            }
        }

    }
}


//请求下一页数据
export function getNextTopics(params) {
    return async (dispatch) => {
        let result = await getJSON(api.topics, params)
        if (result && result.data) {
            if (result.data.success) {
                if (result.data.data.length > 0) {
                    dispatch({ type: 'getNextTopics', list: result.data.data, page: params.page })
                }

            }
        }

    }
}