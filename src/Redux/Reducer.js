import { ALCANCIAS } from "./actions-types";

const initialState = {
    AllAlcancias: [],
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case ALCANCIAS:
            return {
                ...state,
                AllAlcancias: payload
            }

        default:
            return {...state}
    }
}

export default reducer;