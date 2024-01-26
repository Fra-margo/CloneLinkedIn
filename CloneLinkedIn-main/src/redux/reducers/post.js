import { GET_POST_FETCH } from "../actions";

const initialState = {
    postFetch: []
}

const postFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_FETCH:
            return {
                ...state,
                postFetch: action.payload
            }
        default:
            return state
    }
}

export default postFetchReducer