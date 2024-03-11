import "../public/Register.css";
import logo from "../assets/logo.svg";

export default function RegisterForm({ handleSubmit, handleChange, values }) {
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
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
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
