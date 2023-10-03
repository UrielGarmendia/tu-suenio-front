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
  DELETE_PRODUCT,
  FILTERED_BY_SIZE,
  PRODUCTS_BY_CATEGORIEANDSIZE,
  CLEAN_DETAIL,
  ACTUALIZAR_PRODUCTO,
  GET_USERS,
  CREATE_CATEGORIA,
  DELETE_CATEGORIE,
  GET_ORDERS,
  GET_ORDERS_ID,
  GET_REVIEWS,
  USERS_BY_NAME,
  USERS,
} from "./actions-types";
import axios from "axios";

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

export function cleanDetail() {
  return {
    type: CLEAN_DETAIL,
  };
}

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
export const createCategoria = (newCategorie) => {
  return async function (dispatch) {
    const response = await axios.post(
      `https://tu-suenio-back.onrender.com/categorie/create`,
      newCategorie
    );
    return dispatch({
      type: CREATE_CATEGORIA,
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
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://tu-suenio-back.onrender.com/products?name=${name}`
      );
      dispatch({
        type: BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("No hay alcancias con ese nombre");
    }
  };
};

export const ordenamiento = (event) => {
  return { type: ORDERED_BY, payload: event };
};

export const filtered = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/filter/categorie/${id}`
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
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/filter/size/${size}`
      );
      return dispatch({
        type: FILTERED_BY_SIZE,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const ProductsByCategoryAndSize = (id, size) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/filter/combined/${id}/${size}`
      );
      return dispatch({
        type: PRODUCTS_BY_CATEGORIEANDSIZE,
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

export const uploadStorage = (cart) => {
  return {
    type: LOCAL_STORAGE,
    payload: cart,
  };
};
export const actualizarProduct = (id, updatedProductData) => {
  try {
    return async function (dispatch) {
      await axios.put(
        `https://tu-suenio-back.onrender.com/products/${id}`,
        updatedProductData
      );
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/products`
      );
      return dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteProduct = (id) => {
  try {
    return async function (dispatch) {
      await axios.delete(`https://tu-suenio-back.onrender.com/products/${id}`);
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/products`
      );
      return dispatch({
        type: DELETE_PRODUCT,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteCategorie = (id) => {
  try {
    return async function (dispatch) {
      await axios.delete(`https://tu-suenio-back.onrender.com/categorie/${id}`);
      const { data } = await axios(
        `https://tu-suenio-back.onrender.com/categorie`
      );
      return dispatch({
        type: DELETE_CATEGORIE,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "https://tu-suenio-back.onrender.com/user"
      );
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getReviews = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://tu-suenio-back.onrender.com/review/product/${id}`
      );
      return dispatch({
        type: GET_REVIEWS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const getOrders = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "https://tu-suenio-back.onrender.com/order"
      );
      return dispatch({
        type: GET_ORDERS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getOrdersById = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://tu-suenio-back.onrender.com/order/${id}`
      );
      return dispatch({
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const userByName = (name) => {
  return { type: USERS_BY_NAME, payload: name };
};

export const takeAllUsersBack = () => {
  return { type: USERS };
};
