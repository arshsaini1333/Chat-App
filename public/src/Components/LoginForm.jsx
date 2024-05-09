import "../public/Register.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function LoginForm({ handleSubmit, handleChange, values }) {
  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <img src={logo} alt="Logo" />
          <h1>Chit-Chat</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <span>
          Don't have an account ?{" "}
          <Link to="/register" className="link">
            Create One.
          </Link>
        </span>
      </form>
    </div>
  );
}
