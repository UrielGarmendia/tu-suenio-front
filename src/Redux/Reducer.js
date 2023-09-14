import { Alcancias } from "./actions-types";

const initialState = {
    AllAlcancias: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Alcancias:
            return {
                ...state,
                AllAlcancias: payload
            }

        default:
            return { ...state }
    }
}

export default reducer;