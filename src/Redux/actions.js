import {
  ALCANCIAS,
  CREATE_ALCANCIAS,
  DETAIL,
  CATEGORIES,
  BY_NAME,
} from "./actions-types";
import axios from "axios";

// Obtener lo que serían todas las alcancías
export const allAlcancias = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/products");
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
      const { data } = await axios(`http://localhost:3001/products/${id}`);
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
      `http://localhost:3001/products/create`,
      newProduct
    );
    console.log(Object.keys(response));
    return dispatch({
      type: CREATE_ALCANCIAS,
      payload: response.data,
    });
  };
};

export const categories = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/categorie");
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
        `http://localhost:3001/products?name=${name}`
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
