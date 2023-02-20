import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>
                © Copyright {new Date().getFullYear()}{" "}
                <Link to="/">PROMIND</Link>{" "}
                {!localStorage.getItem("authToken") && (
                  <>
                    | <Link to="/admin/login">Login</Link>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
