import { ALCANCIAS, CREATE_ALCANCIAS } from "./actions-types";
import axios from "axios";

// Obtener lo que serían todas las alcancías
export const allAlcancias = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("https://fakestoreapi.com/products");
      return dispatch({
        type: ALCANCIAS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
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
      type:CREATE_ALCANCIAS,
      payload: response.data,
    });
  };
};
