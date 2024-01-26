import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userFetchReducer from "../reducers/user";
import userExperiencesReducer from "../reducers/experiences";
import postFetchReducer from "../reducers/post";
import commentsReducer from "../reducers/comments";

const mainReducer = combineReducers({
    user: userFetchReducer,
    experiences: userExperiencesReducer,
    post: postFetchReducer,
    comments: commentsReducer,
})

const store = configureStore({
    reducer: mainReducer
})

export default store