import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useEffect, useState } from "react";
import { getReviews } from "../../Redux/actions";
import axios from "axios";
import styles from "./reviews.module.css";
import AllReviews from "./AllReviews";

const color = {
    yellow: "#c4b700",
    grey: "#808080"
}

const Reviews = ({id, alcancia, infoUser}) => {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const reviews = useSelector(state => state.reviews);

    useEffect(() => {
        dispatch(getReviews(id))
    },[]);

    const stars = Array(5).fill(0);

    const threeReviews = reviews.slice(0, 3);

    return (
        <div className={styles.cont}>
            <h2 className={styles.title}>Comentarios</h2>
            {threeReviews.length > 0 ? (
            threeReviews?.map((review) => (
                <div key={review.id} className={styles.opinion}>
                    <div className={styles.name_date}>                 
                        <h4 className={styles.name}>{review?.userId}</h4> 
                        <p className={styles.date}>{review?.date.slice(0, 10)}</p>
                    </div>
                    <div className={styles.stars}>
                        {stars.map((__, index) => {
                            return (
                                <FaStar 
                                    className={styles.star} 
                                    key={index}
                                    color={review?.rating > index ? color.yellow : color.grey} 
                                />
                            )
                        })}
                    </div>
                    <p className={styles.text}>{review?.comment}</p>
                </div>
            ))
            ) : (<p>Aún no hay comentarios</p>)            
            }
            {reviews.length > 3 ? 
                <span className={styles.showAllComments} onClick={()=>setIsCommentsOpen(true)}>
                Mostrar todos los comentarios
            </span> :
            <div></div>
            }
            <AllReviews reviews={reviews} stars={stars} isCommentsOpen={isCommentsOpen} closeComments={()=>setIsCommentsOpen(false)}/>
            <button className={styles.button} onClick={()=>setIsOpen(true)}>Deja tu comentario</button>
            <ReviewForm id={id} infoUser={infoUser} isOpen={isOpen} alcancia={alcancia} closeForm={()=>setIsOpen(false)}/>
        </div>
    );
};

export default Reviews;