import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import styles from "./Reviews.module.css";

const color = {
    yellow: "#c4b700",
    grey: "#808080"
}

const Reviews = (props) => {

    const { id } = props;

    const navigate = useNavigate();

    //const reviews = useSelector(state => state.reviews)

    const stars = Array(5).fill(0);

    /*Las reviews están hardcodeadas para que se vean tres por el momento*/
    const reviews = Array(4).fill(0);
    const threeReviews = reviews.slice(0, 3);

    const handleNavigate = () => {
        navigate(`/reviewForm/${id}`);
    };

    return (
        <div className={styles.cont}>
            <h2 className={styles.title}>Comentarios</h2>
            {threeReviews.map((review) => (
                <div key={review.id} className={styles.opinion}>
                    <div className={styles.name_date}>                 
                        <h4 className={styles.name}>{"Joan Jaramillo"}</h4> 
                        <p className={styles.date}>{"25/09/2023"}</p>
                    </div>
                    <div className={styles.stars}>
                        {stars.map((__, index) => {
                            return (
                                <FaStar 
                                    className={styles.star} 
                                    key={index}
                                    color={review.stars > index ? color.yellow : color.grey} 
                                />
                            )
                        })}
                    </div>
                    <p className={styles.text}>{"Este es el comentario que dejó el usuario Joan Jaramillo"}</p>
                </div>
            ))}
            {reviews.length > 3 ? 
                <span className={styles.showAllComments} onClick={"acá va una función que lleve a todos los comment de la alcancia"}>
                Mostrar todos los comentarios
            </span> :
            <div></div>
            }
            <button className={styles.button} onClick={handleNavigate}>Deja tu comentario</button>
        </div>
    );
};

export default Reviews;