import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';
import styles from "./reviewForm.module.css";

const color = {
    yellow: "#c4b700",
    grey: "#808080"
}

const ReviewForm = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const stars = Array(5).fill(0);

    const [currentValue, setCurrentValue] = useState(0); //acá almacenamos el valor de las estrellas
    const [hoverValue, setHoverValue] = useState(undefined); 
    const [comment, setComment] = useState(""); //este es el comentario

    const handleClick = value => {
        setCurrentValue(value);
    };
    
    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleChange = event => {
        setComment(event.target.value);
    }

    const showAlert = () => {
        Swal.fire({
            toast: true,
            icon: "success",
            title: "Gracias por dejar tu comentario",
            showConfirmButton: true,
            position: "center",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(-1);
            }
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear(); 
        const currentDate = `${day}/${month}/${year}`;
        //dispatch(actionDeCreacion(comment, currentDate, currentValue, idUser??, idProduct));
        showAlert();
    };

    return (
        <div className={styles.cont}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.title}>Opiná sobre {"Alcancia de Spiderman"}</h3>
                <div className={styles.stars}>
                    {stars.map((__, index) => {
                        return (
                            <FaStar 
                                className={styles.star} 
                                key={index}
                                color={(currentValue || hoverValue) > index ? color.yellow : color.grey}
                                onClick={()=>{handleClick(index + 1)}} 
                                onMouseOver={()=>{handleMouseOver(index + 1)}}
                                onMouseLeave={()=>{handleMouseLeave}}
                            />
                        )
                    })}
                </div>
                <textarea 
                    className={styles.textarea} 
                    rows={5}
                    placeholder="Deja tu comentario aquí" 
                    value={comment}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type='submit' className={styles.button}>Enviar</button>
            </form>
        </div>
    );
};

export default ReviewForm;