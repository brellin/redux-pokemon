import { LOGIN, GOTTEN } from "../actions"

const initialState = {
    pokemon: [],
    loggedIn: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            // console.log(action.payload)
            return {
                ...state,
                loggedIn: true
            }
        case GOTTEN:
            // console.log('should be pokemon', action.payload)
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }

}
