import io from 'socket.io-client'

const socket = io('ws://localhost:4000')

export const sendMessage = (from, to, content) => {
    //连接服务器，得到连接对象

    //发送消息
    socket.emit(`browserMessage`, { from, to, content })
}

       //监视消息
       socket.on(`server`, function (data) {
        console.log('浏览器接收的消息', data)
     
    })
