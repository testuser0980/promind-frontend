import React, { useContext, useState } from "react";
import BlogContext from "../../../context/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../news.jpg";

export default function Signup() {
  const context = useContext(BlogContext);
  const { Signup } = context;
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    Signup(name, email, password);
  };
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
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder=""
                    onChange={onChange}
                    required
                  />
                </div>
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
                  value="Signup"
                  onSubmit={onSubmitHandler}
                />
              </form>
              <p style={{ marginTop: 10 }}>
                Have an account{" "}
                <Link to="/admin/login">
                  <b>LOGIN</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
