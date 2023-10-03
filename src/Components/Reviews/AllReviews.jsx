import { FaStar } from "react-icons/fa";
import styles from "./allReviews.module.css";

const color = {
    yellow: "#c4b700",
    grey: "#808080"
};

const AllReviews = ({reviews, stars, isCommentsOpen, closeComments}) => {

    if(!isCommentsOpen) return null;

    const handleCommentsClick = (e) => e.stopPropagation();

    

  return (
    <div className={styles.cont} onClick={closeComments}>
        <div className={styles.comments_cont} onClick={handleCommentsClick}>
            <h2 className={styles.title}>Todos los comentarios</h2>
                {reviews?.map((review) => (
                    <div key={review.id} className={styles.opinion}>
                        <div className={styles.name_date}>                 
                            <h4 className={styles.name}>{review.User.name}</h4> 
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
                }
        </div>
    </div>
  )
}

export default AllReviews;