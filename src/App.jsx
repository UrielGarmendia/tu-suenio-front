import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Alcancias from "./Components/Alcancias/Alcancias";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import NavBar from "./Components/NavBar/NavBar";
import Contactanos from "./Components/Contactanos/Contactanos";
import Footer from "./Components/Footer/Footer"
import Create from "./Components/Create/Create"
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

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAlcancias());
  }, []);

  const [infoUser, setInfoUser] = useState(null);
  const { isAuthenticated, user } = useAuth0();
  console.log("Este es el usuario:", user);

  useEffect(() => {
    if (isAuthenticated) {
      try {
        async function postData() {
          const { data } = await axios.post("http://localhost:3001/user/login", { sub: user.sub });
          if (data.error) {
            navigate("/register");
          } else {
            setInfoUser(data);
          }
        }
        postData();
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  }, [isAuthenticated]);

  return (
    <div >

      {location.pathname === "/register" || "/detail" && <NavBar infoUser={infoUser} />}
      {location.pathname == "/alcancias" && <FilteredOrdered />}
      {location.pathname !== "/register" && <WhatsappBar />}
      <Routes>
        <Route path="/reviewForm/:id" element={<ReviewForm />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/alcancias" element={<Alcancias />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={< Dashboard />} />
        <Route path="/contactanos" element={< Contactanos />} />

      </Routes>
      {location.pathname !== "/register" && <Footer />}
    </div>
  );
}

export default App;
