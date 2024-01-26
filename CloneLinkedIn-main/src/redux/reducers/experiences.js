import { GET_USER_EXPERIENCES } from "../actions";

const initialState = {
    experiences: []
}

const userExperiencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload
            }
        default:
            return state
    }
}

export default userExperiencesReducer