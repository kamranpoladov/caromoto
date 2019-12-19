export const userLogIn = (username = '') => ({
    type: 'USER_LOGIN',
    username
});

export const userLogOut = () => ({
    type: 'USER_LOGOUT'
});