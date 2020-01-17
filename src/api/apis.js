import axios from "axios";
import qs from 'qs'
export let IP ='http://192.168.43.47:80';
// export let IP ='http://127.0.0.1:80';
// export let IP ='http://192.168.43.47:80';
let req=axios.create({
    // baseURL:'http://127.0.0.1:80',//设置默认请求地址
    baseURL:IP,//设置默认请求地址
    timeout:10000//设置超时时间 10秒钟
})
//acc  用户名,  pwd  密码
export function login(acc,pwd) {//登录请求封装
    return req.post('/login.php',qs.stringify( {acc,pwd} ) )
}
//注册
export function reg(acc,pwd) {
    return req.post('/reg.php',qs.stringify({acc,pwd}))
}

//猜你喜欢
export function gethouselist() {
    return req.get('/gethouselist.php')
}

//获取验证码
export function getValitecode() {
    return req.get('/valitecode.php')
}
