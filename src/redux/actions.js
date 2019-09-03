const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const ADD_MESSAGE = "ADD_MESSAGE";

function loginUser (userName) {
    return {
        type: LOGIN_USER,
        userName
    };
}

function logoutUser () {
    return {
        type: LOGOUT_USER
    };
}

function addMessage (message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_MESSAGE,

    loginUser,
    logoutUser,
    addMessage
};