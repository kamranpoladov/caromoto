const userReducerDefaultState = {
    username: '',
    tokenIssueTime: ''
};

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                username: action.username,
                tokenIssueTime: Date.now()
            }
        case 'USER_LOGOUT':
            return {
                state: userReducerDefaultState
            }
        default:
            return state;
    };
};