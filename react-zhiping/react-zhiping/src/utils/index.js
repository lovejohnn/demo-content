// 用户主界面路由  
// dashen /dashen
//laoban /laoban
// 用户信息是否需要完善
//dashen/dasheninfo
//laoban /laobaninfo
//判断是否已经完善信息：user.header是否有值
//判断用户类型：user.type
//判断路由路径
export function getRedirectTo(type, header) {
    let path = '';
    //type
    if (type === 'laoban') {
        path = '/laoban';
    } else {
        path = '/dashen';
    }
    //header
    if (!header) { //没有值， 返回信息完善页面的 path
        path += 'info'
    }
    return path;
}