import Slider from "react-slick"
import style from "../Slide/Slide.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import homefiesta from "../../Assents/homefiesta.jpg"
import homefiesta1 from "../../Assents/homefiesta1.jpg"
import homefiesta2 from "../../Assents/homefiesta2.jpg"
import homefiesta3 from "../../Assents/homefiesta3.jpg"
import { Link } from "react-router-dom";

const Slide = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      };
    return(

    <div className={style.slide}>
        <Slider {...settings}  >
        <div>
          <div className={style.card}>
            <Link to='/alcancias'><img src={homefiesta} alt=""/></Link>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={homefiesta1} alt=""/>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={homefiesta2} alt=""/>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={homefiesta3} alt=""/>
          </div>
        </div>
        
        </Slider>
    </div>
   )
   }

   export default Slide