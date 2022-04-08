import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

function LoginForm() {
  //get username and password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/userprofile");
  };

  return (
    <div className="user-login">
      <section className="heading">
        <h1>Login</h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default LoginForm;
