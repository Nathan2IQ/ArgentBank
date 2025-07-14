import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.webp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authReducer";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <h1 className="display-none">Argent Bank</h1>
      <nav className="nav">
        <Link className="nav__home" to="/">
          <img src={logo} alt="Argent Bank Logo" className="logo" />
        </Link>

        <div>
          {isAuthenticated ? (
            <>
              <Link className="nav__sign" to="/user">
                <i className="fa-solid fa-circle-user"></i>
              </Link>
              <span className="logout" onClick={handleLogout}>
                <p>Logout</p>
              </span>
            </>
          ) : (
            <Link className="nav__sign" to="/sign-in">
              <i className="fa-solid fa-circle-user"></i>
              <p>Sign In</p>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
