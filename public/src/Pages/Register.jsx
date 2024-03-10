import logo from "../assets/logo.svg";
import { handleChange, handleSubmit } from "../Utils/Register";
import "../public/Register.css";
export default function Register() {
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
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confermPassword"
          onChange={handleChange}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <a href="/login">Login</a>
        </span>
      </form>
    </div>
  );
}
