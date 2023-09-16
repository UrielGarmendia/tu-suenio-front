<<<<<<< HEAD
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detail } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import UndoIcon from '@mui/icons-material/Undo';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './detail.module.css';
=======
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./detail.module.css";
>>>>>>> 97566e5aa8bf1e448be8699788384e24d6d4c8cc

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const alcancia = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detail(id));
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

<<<<<<< HEAD
    return (
        <div className={styles.cont}>
            <button className={styles.close_button} onClick={handleClick}><UndoIcon/></button>
            <div className={styles.general_cont}>
                <div className={styles.image_cont}>
                    <img src={alcancia.image} alt={alcancia.name} className={styles.image}/>
                </div>
                <div className={styles.info_cont}>
                    <h2>{alcancia.name}</h2>
                    <h4 className={styles.description}>Descripción:</h4>
                    <p>{alcancia.description}</p>
                    <div className={styles.separador}></div>
                    <h4>+ Tamaños:</h4>
                    <div className={styles.tamaños}>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Chiquitín</button>
                            <ul className={styles.ul}>
                                <li>alto 10cm</li>
                                <li>ancho 10cm</li>
                                <li>largo 10cm</li>
                                <li className={styles.price}>$ 35.000</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Pequeño</button>
                            <ul className={styles.ul}>
                                <li>alto 12cm</li>
                                <li>ancho 13cm</li>
                                <li>largo 14cm</li>
                                <li className={styles.price}>$ 45.000</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Mediano</button>
                            <ul className={styles.ul}>
                                <li>alto 15cm</li>
                                <li>ancho 13cm</li>
                                <li>largo 16cm</li>
                                <li className={styles.price}>$ 55.000</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Grande</button>
                            <ul className={styles.ul}>
                                <li>alto 23cm</li>
                                <li>ancho 21cm</li>
                                <li>largo 23cm</li>
                                <li className={styles.price}>$ 95.000</li>
                            </ul>
                        </div>
                    </div>
                    <h4>+ Categoria:{alcancia.id_categorie || " No se encontraron categorías"}</h4>
                    <h4>+ Stock: {alcancia.stock || 0} unidades</h4>
                    <div className={styles.separador}></div>
                    <div className={styles.button_cart_cont}>
                        <button>Agregar al  <AddShoppingCartIcon/></button>
                    </div>
                </div>
=======
  return (
    <div className={styles.cont}>
      <button className={styles.close_button} onClick={handleClick}>
        <UndoIcon />
      </button>
      <div className={styles.general_cont}>
        <div className={styles.image_cont}>
          <img
            src={alcancia[0].image}
            alt={alcancia[0].name}
            className={styles.image}
          />
        </div>
        <div className={styles.info_cont}>
          <h2>{alcancia[0].name}</h2>
          <h4 className={styles.description}>Descripción:</h4>
          <p>{alcancia[0].description}</p>
          <div className={styles.separador}></div>
          <h4>+ Tamaños:</h4>
          <div className={styles.tamaños}>
            <div className={styles.size_item}>
              <button className={styles.size_buttons}>Chiquitín</button>
              <ul className={styles.ul}>
                <li>alto 10cm</li>
                <li>ancho 10cm</li>
                <li>largo 10cm</li>
                <li className={styles.price}>$ 35.000</li>
              </ul>
            </div>
            <div className={styles.size_item}>
              <button className={styles.size_buttons}>Pequeño</button>
              <ul className={styles.ul}>
                <li>alto 12cm</li>
                <li>ancho 13cm</li>
                <li>largo 14cm</li>
                <li className={styles.price}>$ 45.000</li>
              </ul>
            </div>
            <div className={styles.size_item}>
              <button className={styles.size_buttons}>Mediano</button>
              <ul className={styles.ul}>
                <li>alto 15cm</li>
                <li>ancho 13cm</li>
                <li>largo 16cm</li>
                <li className={styles.price}>$ 55.000</li>
              </ul>
            </div>
            <div className={styles.size_item}>
              <button className={styles.size_buttons}>Grande</button>
              <ul className={styles.ul}>
                <li>alto 23cm</li>
                <li>ancho 21cm</li>
                <li>largo 23cm</li>
                <li className={styles.price}>$ 95.000</li>
              </ul>
            </div>
>>>>>>> 97566e5aa8bf1e448be8699788384e24d6d4c8cc
          </div>
          <h4>
            + Categoria:{" "}
            {alcancia[0].Categories[0].name || " No se encontraron categorías"}
          </h4>
          <h4>+ Stock: {alcancia[0].stock || 0} unidades</h4>
          <div className={styles.separador}></div>
          <div className={styles.button_cart_cont}>
            <button>
              Agregar al <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
