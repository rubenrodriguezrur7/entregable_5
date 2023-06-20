import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";
import  UserNameForm  from "../../components/home/UserNameForm/UserNameForm";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from ?? '/pokedex';
  const { saveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  };

  return (
    <section>
      <div className="logo-container"></div>

      <h1 className="home_title">!Hola entrenador</h1>
      <p className="home_description">Para poder comenzar, dame tu nombre</p>

      <div className="home_form-container">
        <UserNameForm onSendName={handleSendName} />
      </div>
    </section>
  );
};

export default Home;