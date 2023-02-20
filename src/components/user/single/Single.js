import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function Single() {
  return (
    <>
      <Header />
      <div id="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="post-container">
                <div className="post-content single-post">
                  <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                  <div className="post-information">
                    <span>
                      <i className="fa fa-tags" aria-hidden="true"></i>
                      Html
                    </span>
                    <span>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <a href="author.php">Admin</a>
                    </span>
                    <span>
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      01 Nov, 2019
                    </span>
                  </div>
                  <img
                    className="single-feature-image"
                    src="images/post_1.jpg"
                    alt=""
                  />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
