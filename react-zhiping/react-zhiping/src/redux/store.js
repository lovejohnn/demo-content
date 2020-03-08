//  redux 最核心的管理对象模块
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'


import { composeWithDevTools } from 'redux-devtools-extension'  //包安装似乎有点问题
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

//export default createStore(reducers, applyMiddleware(thunk));