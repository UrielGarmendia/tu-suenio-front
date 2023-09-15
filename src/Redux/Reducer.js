import {
  ALCANCIAS,
  DETAIL,
  CATEGORIES,
  BY_NAME,
  CREATE_ALCANCIAS,
} from "./actions-types";

const initialState = {
  AllAlcancias: [],
  detail: {},
  categories: [],
  allByName: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALCANCIAS:
      return {
        ...state,
        AllAlcancias: action.payload,
      };

    case DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case BY_NAME:
      return {
        ...state,
        AllAlcancias: action.payload,
      };
    case CREATE_ALCANCIAS:
      return {
        ...state,
        AllAlcancias: [...state.AllAlcancias, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
