export const ContentType = {
    JSON: 'application/json',
    FORM_DATA: 'application/form-data',
    FORM_URLENCODED: 'application/x-www-form-urlencoded',
}

export const CodeMsg: { [key: number]: string } = {
    1001: '请先登录',
    1002: '用户验证失败，请重新登录',
    2001: '邮箱或密码有误',
    2002: '验证码有误',
    2003: '验证码已过期',
}
