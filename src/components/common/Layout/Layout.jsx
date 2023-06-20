import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";
import './Layout.css';

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  }

  return (
    <div>
      <header className="">
        <div className="logo-header"></div>

        <button className="logout_btn" onClick={logout}>Log out</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;