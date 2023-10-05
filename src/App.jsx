import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Alcancias from "./Components/Alcancias/Alcancias";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import NavBar from "./Components/NavBar/NavBar";
import Contactanos from "./Components/Contactanos/Contactanos";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings.jsx";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import FilteredOrdered from "./Components/Filter/Filter";
import Carrito from "./Components/Carrito/Carrito";
import { useDispatch } from "react-redux";
import { allAlcancias } from "./Redux/actions";
import WhatsappBar from "./Components/WhatsappBar/WhatsappBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import Ban from "./Components/BanPage/BanPage";
import DeveloperTeam from "./Components/DeveloperTeam/DeveloperTeam";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAlcancias());
  }, []);

  const [infoUser, setInfoUser] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  const handleUpdate = () => {
    setForceUpdate(!forceUpdate);
  }

  useEffect(() => {
    if (isAuthenticated) {
      try {
        async function postData() {
          const { data } = await axios.post(
            "https://tu-suenio-back.onrender.com/user/login",
            { sub: user.sub }
          );
          if (data.error) {
            navigate("/register");
          } else {
            setInfoUser(data);
            if (data?.isDisable) navigate("/ban");
          }
        }
        postData();
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  }, [isAuthenticated, forceUpdate]);

  return (
    <div>
      {location.pathname === "/register" ||
        location.pathname === "/ban" ||
        ("/detail" && <NavBar infoUser={infoUser} />)}
      {location.pathname == "/alcancias" && <FilteredOrdered />}
      {location.pathname !== "/register" &&
        location.pathname !== "/profile" && <WhatsappBar />}
      <Routes>
        
        <Route path="/reviewForm/:id" element={<ReviewForm />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<ProfileSettings handleUpdate={handleUpdate}/>} />
        <Route path="/alcancias" element={<Alcancias />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail infoUser={infoUser} />} />
        <Route path="/carrito" element={<Carrito infoUser={infoUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Dashboard infoUser={infoUser} />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/ban" element={<Ban/>}/>

        <Route path="/developer" element={<DeveloperTeam />} />
      </Routes>
      {location.pathname !== "/register" &&
        location.pathname !== "/profile" &&
        location.pathname !== "/ban" && <Footer />}
    </div>
  );
}

export default App;
