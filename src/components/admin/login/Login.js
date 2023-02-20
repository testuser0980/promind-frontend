import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../../../context/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../news.jpg";
import { toast } from "react-toastify";

export default function Login() {
  const context = useContext(BlogContext);
  const { Login } = context;
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = data;
    Login(email, password);
  };
  useEffect(() => {
    if (localStorage.getItem("authToken") == "undefined") {
      JSON.parse(localStorage.removeItem("authToken"));
    }
    if (JSON.parse(localStorage.getItem("authToken"))) {
      navigate("/admin");
    }
  });
  return (
    <>
      <div id="wrapper-admin" className="body-content">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-4 col-md-4">
              <Link to="/">
                <img className="logo" src={logo} />
              </Link>
              <h3 className="heading">Admin</h3>
              <form action="" onSubmit={onSubmitHandler}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder=""
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder=""
                    onChange={onChange}
                    required
                  />
                </div>
                <input
                  type="submit"
                  name="login"
                  className="btn btn-primary"
                  value="Login"
                  onSubmit={onSubmitHandler}
                />
              </form>
              <p style={{ marginTop: 10 }}>
                Don't have an account{" "}
                <Link to="/admin/signup">
                  <b>SIGNUP</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
