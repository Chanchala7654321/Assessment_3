export const authInitialState = {
    isAuthenticated: false,
    currentUser: null
};

export const authReducer = (state, action) => {

    switch (action.type) {

        case 'LOGIN_USER':
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null
            };

        default:
            return state;
    }
};