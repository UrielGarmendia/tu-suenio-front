import {
  ALCANCIAS,
  DETAIL,
  CATEGORIES,
  BY_NAME,
  CREATE_ALCANCIAS,
  ORDERED_BY,
  FILTERED_BY,
  CLEAN_FILTERS
} from "./actions-types";

const initialState = {
  AllAlcancias: [],
  copyAllAlcancias: [],
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
        copyAllAlcancias: action.payload
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
    case ORDERED_BY:
      return {
        ...state,
        AllAlcancias: action.payload
      }
    case FILTERED_BY:
      return {
        ...state,
        AllAlcancias: action.payload
      }
    case CLEAN_FILTERS:
      return {
        ...state,
        AllAlcancias: state.copyAllAlcancias
      }
    default:
      return state;
  }
};

export default reducer;
