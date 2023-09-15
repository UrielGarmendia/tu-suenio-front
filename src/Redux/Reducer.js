import { ALCANCIAS, CREATE_ALCANCIAS } from "./actions-types";

const initialState = {
    AllAlcancias: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case ALCANCIAS:
            return {
                ...state,
                AllAlcancias: action.payload, 
            }
        case CREATE_ALCANCIAS:
            return {
                ...state,
                AllAlcancias: [...state.AllAlcancias, action.payload],
            };
        default:
            return state; 
    }
}

export default reducer;