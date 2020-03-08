//封装一个 ajax 请求的函数模块
import axios from 'axios'

export default function ajax(url, data = {}, type = "GET") {
    if (type === 'GET') {
        //data:{username:tom,password:134}
        //paramStr:uesrname=tom&password=123

        //拼串
        let paramStr = ''
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'

        })
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length - 1);
        }
        //发送 GET 请求
        return axios.get(url + '?' + paramStr)
    } else {
        //发送 POST 请求
        return axios.post(url, data)
    }
}