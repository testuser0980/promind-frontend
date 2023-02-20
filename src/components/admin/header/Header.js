import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../news.jpg";
import { toast } from 'react-toastify';

export default function Header() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/admin/login");
    toast.success('Logged out successfully.', {
      position: 'bottom-right'
    })
  };
  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("authToken"))
    ) {
      return navigate("/admin/login");
    }
  });
  return (
    <>
      <div id="header-admin">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Link to="/admin">
                <img className="logo" src={logo} />
              </Link>
            </div>
            <div className="col-md-2 mr-auto">

              <a href="#" onClick={logoutHandler} className="admin-logout">
                logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="admin-menubar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="admin-menu">
                <li>
                  <Link to="/admin">Posts</Link>
                </li>
                <li>
                  <Link to="/admin/categories">Category</Link>
                </li>
                <li>
                  <Link to="/admin/users">Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
