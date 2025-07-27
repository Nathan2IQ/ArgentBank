import "./SignForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";

function SignForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.body && data.body.token) {
        dispatch(login(data.body.token));
        sessionStorage.setItem("token", data.body.token);
        if (remember) {
          localStorage.setItem("token", data.body.token);
        } else {
          localStorage.removeItem("token");
        }
        navigate("/user");
      } else {
        setError("Identifiants incorrects");
      }
    } catch {
      setError("Erreur server");
    }
  };

  return (
    <main>
      <div className="dark__bg">
        <section className="signIn__card">
          <i className="fa-solid fa-circle-user"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="input__wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={error ? "input__error" : ""}
              />
            </div>

            <div className="input__wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={error ? "input__error" : ""}
              />
            </div>

            <div className="input__remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            {error && <div className="form__error">{error}</div>}

            <button type="submit" className="signin__btn">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default SignForm;
