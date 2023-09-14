import Slider from "react-slick"
import style from "../Slide/Slide.module.css"
// import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from "../../Assents/logoSlide.jpg"
import chancho from "../../Assents/slide.png"
import { Link } from "react-router-dom";

const Slide = () => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      cssEase: "linear"
      };
    return(

    <div>
        <Slider {...settings} className={style.slide} >
        <div>
            <Link to='/alcancias'><img src={logo} alt=""/></Link>
          </div>
          <div>
            <img src={chancho} alt=""/>
          </div>
          <div>
            <img src={logo} alt=""/>
          </div>
          <div>
            <img src={chancho} alt=""/>
          </div>
        </Slider>
    </div>
   )
   }

   export default Slide