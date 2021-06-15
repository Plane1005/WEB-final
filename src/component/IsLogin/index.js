import cookie from 'react-cookies'

//存储用户头像的地址
export var AVATAR_URL =''

// 获取当前用户cookie
export const loginUser = () => {
    return cookie.load('userInfo')
}

// 用户登录，保存cookie
export const onLogin = (user) => {
    console.log(user);
    cookie.save('userInfo', user, { path: '/' })
}

// 用户登出，删除cookie
export const logout = () => {
    cookie.remove('userInfo', { path: '/' })
    window.location.href = '/Login'
    AVATAR_URL = ''
}

// 保存头像地址信息
export const saveAvatar = (data) => {
    AVATAR_URL = data
}

export const getAvatar = ()=>{
    return AVATAR_URL
}