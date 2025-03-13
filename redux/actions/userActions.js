// redux/actions/userActions.js
import { ADD_USER_LIST, SET_USER_INDEX } from "./actionTypes";

export const addUserList = (users) => ({
    type: ADD_USER_LIST,
    payload: users,
});

export const setUserIndex = (index) => ({
    type: SET_USER_INDEX,
    payload: index,
});