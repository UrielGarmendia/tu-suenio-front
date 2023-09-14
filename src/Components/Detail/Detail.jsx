import { useEffect } from 'react';

//****IMPORTACIONES SUGERIDAS****//
//import { useDispatch, useSelector } from 'react-redux';
//import { getAlcanciaById, resetAlcancia } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './detail.module.css';

import imagen from './alcancia_prueba.jpg';

const Detail = () => {

    const navigate = useNavigate();

//****MAS IMPORTACIONES SUGERIDAS****//
    //const { id } = useParams(); 

    //const alcancia = useSelector((state) => state.alcanciaById);
    //const dispatch = useDispatch();

    //useEffect(() => {
    //    dispatch(getAlcanciaById(id));
    //    return (
    //        dispatch(resetAlcancia())
    //    )
    //},[]);

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className={styles.cont}>
            <button className={styles.close_button} onClick={handleClick}>X</button>
            <div className={styles.general_cont}>
                <div className={styles.image_cont}>
                    <img src={imagen} alt={'alcancia.name'} className={styles.image}/>
                </div>
                <div className={styles.info_cont}>
                    <h2>{"Alcancia cerdito canchero"}</h2>
                    <h4 className={styles.description}>Descripción:</h4>
                    <p>Esta es una breve descripción de la alcancia del chanchito canchero</p>
                    <div className={styles.separador}></div>
                    <h4>+ Tamaños:</h4>
                    <div className={styles.tamaños}>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Chiquitín</button>
                            <ul className={styles.ul}>
                                <li>alto 10cm</li>
                                <li>ancho 10cm</li>
                                <li>largo 10cm</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Pequeño</button>
                            <ul className={styles.ul}>
                                <li>alto 12cm</li>
                                <li>ancho 13cm</li>
                                <li>largo 14cm</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Mediano</button>
                            <ul className={styles.ul}>
                                <li>alto 15cm</li>
                                <li>ancho 13cm</li>
                                <li>largo 16cm</li>
                            </ul>
                        </div>
                        <div className={styles.size_item}>
                            <button className={styles.size_buttons}>Grande</button>
                            <ul className={styles.ul}>
                                <li>alto 23cm</li>
                                <li>ancho 21cm</li>
                                <li>largo 23cm</li>
                            </ul>
                        </div>
                    </div>
                    <h4>+ Categoria: Super heroes, Disney</h4>
                    <h4>+ Stock: {"6 unidades"}</h4>
                    <div className={styles.separador}></div>
                    <div className={styles.button_cart_cont}>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;