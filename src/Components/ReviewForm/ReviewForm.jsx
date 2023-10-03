import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from "react-redux";
import styles from "./reviewForm.module.css";
import { getReviews } from '../../Redux/actions';

const color = {
    yellow: "#c4b700",
    grey: "#808080"
}

const ReviewForm = ({infoUser, id, alcancia, isOpen, closeForm}) => {

    if(!isOpen) return null;

    const stars = Array(5).fill(0);

    const dispatch = useDispatch();

    const [ratingValue, setRatingValue] = useState(0); //acá almacenamos el valor de las estrellas
    const [hoverValue, setHoverValue] = useState(undefined); 
    const [comment, setComment] = useState(""); //este es el comentario

    const handleClick = value => {
        setRatingValue(value);
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
        })
    };

    const handleFormClick = (e) => e.stopPropagation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("https://tu-suenio-back.onrender.com/review/create", 
            { 
                comment: comment, 
                rating: ratingValue, 
                userId: infoUser.id, 
                productId: id 
            })
            showAlert();
            closeForm(false);
            dispatch(getReviews(id));
        } catch (error) {
            alert(error.message);
        }; 
    };

    return (
        <div className={styles.cont} onClick={()=>closeForm(false)}>
            <form className={styles.form} onClick={handleFormClick} onSubmit={handleSubmit}>
                <h3 className={styles.title}>Opiná sobre {alcancia}</h3>
                <div className={styles.stars}>
                    {stars.map((__, index) => {
                        return (
                            <FaStar 
                                className={styles.star} 
                                key={index}
                                color={(ratingValue || hoverValue) > index ? color.yellow : color.grey}
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