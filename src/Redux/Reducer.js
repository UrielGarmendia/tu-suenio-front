import {
  ALCANCIAS,
  DETAIL,
  CATEGORIES,
  BY_NAME,
  CREATE_ALCANCIAS,
  ORDERED_BY,
  FILTERED_BY,
  CLEAN_FILTERS,
  CART_SHOPING,
  DELETE_ITEM_CART,
  LOCAL_STORAGE,
  DELETE_PRODUCT,
  FILTERED_BY_SIZE,
  PRODUCTS_BY_CATEGORIEANDSIZE,
  CLEAN_DETAIL,
} from "./actions-types";

//Traerme el local store si esta vacio que devuelva un array
const local = JSON.parse(localStorage.getItem("cart"));
const storage = local ? local : [];

const initialState = {
  AllAlcancias: [],
  copyAllAlcancias: [],
  detail: [],
  categories: [],
  allByName: [],
  CartShopping: storage,
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

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: []
      }
  
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
      const toOrder = [...state.AllAlcancias];
      if(action.payload === "A-Z") {
        return {
          ...state,
          AllAlcancias: toOrder.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          })
        }
      };
      if(action.payload === "Z-A") {
        return {
          ...state,
          AllAlcancias: toOrder.sort((a, b) => {
            if(a.name < b.name) return 1;
            if(a.name > b.name) return -1;
            return 0;
          })
        }
      };
      if(action.payload === "D") {
        return {
          ...state,
          AllAlcancias: toOrder.sort((a, b) => b.price - a.price)
        }
      };
      if(action.payload === "A") {
        return {
          ...state,
          AllAlcancias: toOrder.sort((a, b) => a.price - b.price)
        }
      } else {
        return {...state, AllAlcancias: state.copyAllAlcancias}
      }
    case FILTERED_BY:
      return {
        ...state,
        AllAlcancias: action.payload
      }
      
      case FILTERED_BY_SIZE:
  return {
    ...state,
    AllAlcancias: action.payload,
  }
  case PRODUCTS_BY_CATEGORIEANDSIZE:
    return {
      ...state,
      AllAlcancias: action.payload,
    }
    case CLEAN_FILTERS:
      return {
        ...state,
        AllAlcancias: state.copyAllAlcancias
      }
    case CART_SHOPING:
      const found = state.CartShopping?.find(el => el.id === action.payload[0].id);
      
      if(!found) {
        const localCart = [...state.CartShopping, ...action.payload];
        localStorage.setItem("cart", JSON.stringify(localCart));
      return {
        ...state,
        CartShopping: [...state.CartShopping, ...action.payload]
      }
    } else {
      return {
        ...state,
        CartShopping: JSON.parse(localStorage.getItem("cart"))
      }
    }
    case DELETE_ITEM_CART:
      return {
        ...state,
        CartShopping: action.payload
      }
    case LOCAL_STORAGE:
      return {
        ...state,
        CartShopping: action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        AllAlcancias: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
