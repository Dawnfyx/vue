import Cookies from 'js-cookie'

const TokenKey = 'Admin-Toke'

export function getToken(){
    return Cookies.get(TokenKey)
}

export function setToken(){
    return Cookies.set(TokenKey, token)
}

export function removeToken(){
    return Cookies.remove(TokenKey)
}