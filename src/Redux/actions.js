import {
  ALCANCIAS,
  CREATE_ALCANCIAS,
  DETAIL,
  CATEGORIES,
  BY_NAME,
  ORDERED_BY,
  FILTERED_BY,
  CLEAN_FILTERS,
  CART_SHOPING,
  DELETE_ITEM_CART,
  LOCAL_STORAGE,
  FILTERED_BY_SIZE,
  PRODUCTS_BY_CATEGORIEANDSIZE,
} from "./actions-types";
import axios from "axios";

console.log();

// Obtener lo que serían todas las alcancías
export const allAlcancias = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        "https://tu-suenio-back.onrender.com/products"
      );
      return dispatch({
        type: ALCANCIAS,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const detail = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/products/${id}`
      );
      return dispatch({
        type: DETAIL,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
export const createAlcancias = (newProduct) => {
  return async function (dispatch) {
    const response = await axios.post(
      `https://tu-suenio-back.onrender.com/products/create`,
      newProduct
    );
    return dispatch({
      type: CREATE_ALCANCIAS,
      payload: response.data,
    });
  };
};

export const categories = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        "https://tu-suenio-back.onrender.com/categorie"
      );
      return dispatch({
        type: CATEGORIES,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const byName = (name) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/?name=${name}`
      );
      return dispatch({
        type: BY_NAME,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const ordenamiento = (event) => {
  try {
    return async function (dispatch) {
      if (event === "A-Z") {
        const { data } = await axios(
          "https://tu-suenio-back.onrender.com/sort/alp-asc"
        );
        return dispatch({
          type: ORDERED_BY,
          payload: data,
        });
      } else if (event === "Z-A") {
        const { data } = await axios(
          "https://tu-suenio-back.onrender.com/sort/alp-desc"
        );
        return dispatch({
          type: ORDERED_BY,
          payload: data,
        });
      } else if (event === "A") {
        const { data } = await axios(
          "https://tu-suenio-back.onrender.com/sort/price-asc"
        );
        return dispatch({
          type: ORDERED_BY,
          payload: data,
        });
      } else if (event === "D") {
        const { data } = await axios(
          "https://tu-suenio-back.onrender.com/sort/price-desc"
        );
        return dispatch({
          type: ORDERED_BY,
          payload: data,
        });
      }
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const filtered = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/${id}`
      );
      return dispatch({
        type: FILTERED_BY,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
export const filterBySize = (size) => {
  return async function (dispatch) {
    try {
      const { data } = await axios (`https://tu-suenio-back.onrender.com/filter/size/${size}`);
      return dispatch({
        type: FILTERED_BY_SIZE, 
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};
export const ProductsByCategoryAndSize = (id,size) => {
  return async function (dispatch) {
    try {
      const { data } = await axios (`https://tu-suenio-back.onrender.com/filter/combined/${id}/${size}`);
      return dispatch({
        type:PRODUCTS_BY_CATEGORIEANDSIZE, 
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const cleanFilters = () => {
  return { type: CLEAN_FILTERS };
};

export const CartShopping = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/products/${id}`
      );
      return dispatch({
        type: CART_SHOPING,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteItemCart = (cart) => {
  return {
    type: DELETE_ITEM_CART,
    payload: cart,
  };
};
