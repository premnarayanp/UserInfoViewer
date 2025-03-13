import { ADD_USER_LIST, SET_USER_INDEX } from "../actions/actionTypes";

const initialState = {
    users: [],
    userIndex: 0,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_LIST:
            return {...state, users: action.payload }; // Store full user list
        case SET_USER_INDEX:
            return {...state, userIndex: action.payload }; // Update index
        default:
            return state;
    }
};

export default userReducer;



// // redux/reducers/userReducer.js
// import { ADD_USER_LIST, SET_USER_INDEX } from "../actions/actionTypes";

// const initialState = {
//     users: [],
//     userIndex: 0,
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_USER_LIST:
//             return {...state, users: action.payload };
//         case SET_USER_INDEX:
//             return {...state, userIndex: action.payload };
//         default:
//             return state;
//     }
// };

// export default userReducer;