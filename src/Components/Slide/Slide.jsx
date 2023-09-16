import Slider from "react-slick"
import style from "../Slide/Slide.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from "../../Assents/logoSlide.jpg"
import chancho from "../../Assents/slide.png"
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
            <Link to='/alcancias'><img src={logo} alt=""/></Link>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={chancho} alt=""/>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={logo} alt=""/>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={chancho} alt=""/>
          </div>
        </div>
        
        </Slider>
    </div>
   )
   }

   export default Slide