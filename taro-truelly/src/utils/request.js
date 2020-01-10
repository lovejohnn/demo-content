// 封装请求的工具函数
import Taro from '@tarojs/taro'
import api from '../constants/api'

export function getJSON(url, data) {
    return Taro.request({ url: url, data: data, method: 'GET' });
}

export function postJSON(url, data){
    return Taro.request({url,data,method:'POST'})
}


//测试使用
//获取话题列表
/* export async function getTopics(){
  let result =  await getJSON(api.topics).catch((err)=>{
      console.log('出错了哦',err)
  });
  console.log(result);
  console.log('数据在这里')
  return result;
} */


