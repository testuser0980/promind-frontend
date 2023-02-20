import React from "react";
import { Link } from "react-router-dom";
import logo from "../../news.jpg";

export default function Header({ filterItem, uniqueList }) {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className=" col-md-offset-4 col-md-4">
              <Link to="/" id="logo">
                <img src={logo} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="menu">
                {uniqueList &&
                  uniqueList.map((curElem, index) => {
                    {
                      /* const { category } = curElem; */
                    }
                    return (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => {
                            filterItem(curElem);
                            console.log(curElem);
                          }}
                        >
                          {curElem}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
