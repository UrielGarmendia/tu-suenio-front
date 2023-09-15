import { ALCANCIAS, DETAIL, CATEGORIES, BY_NAME } from "./actions-types";

const initialState = {
    AllAlcancias: [],
    detail: {},
    categories: [],
    allByName: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALCANCIAS:
            return {
                ...state,
                AllAlcancias: payload
            }
        
        case DETAIL:
            return {
                ...state,
                detail: payload
            }

        case CATEGORIES:
            const allCategories = payload.map(el => el.name);
            return {
                ...state,
                categories: allCategories
            }

        case BY_NAME:
            return {
                ...state,
                allByName: payload
            }

        default:
            return { ...state }
    }
}

export default reducer;