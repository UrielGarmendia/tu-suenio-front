import { ALCANCIAS ,DETAIL , CATEGORIES, BY_NAME , CREATE_ALCANCIAS,} from "./actions-types";

const initialState = {
    AllAlcancias: [],
    detail: {},
    categories: [],
    allByName: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case ALCANCIAS:
            return {
                ...state,
                AllAlcancias: action.payload, 
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