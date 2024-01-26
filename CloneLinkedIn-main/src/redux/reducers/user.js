import { GET_USER_FETCH } from "../actions";

const initialState = {
    userFetch: []
}

const userFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_FETCH:
            return {
                ...state,
                userFetch: action.payload
            }
        default:
            return state
    }
}

export default userFetchReducer