import { Alcancias } from "./actions-types";
import axios from "axios";

//Obtener lo que seria todas las alcancias
export const allAlcancias = () => {
    try {
        return async function(dispatch) {
            const { data } = await axios("https://fakestoreapi.com/products");
            return dispatch({
                type: Alcancias,
                payload: data
            })
        }    
    } catch (error) {
        console.log(error.message);
    }
}
