import React from "react";
import "./loader.scss";

export default function Loader() {
  return (
    <>
      {/* <div id="cws_page_loader_container" className="cws_loader_container">
        <div id="cws_page_loader" className="cws_loader">
          <div className="inner"></div>
        </div>
      </div> */}
      <div class="loading">
        <div class="preloader">
          <div class="spinner"></div>
          <div class="spinner-2"></div>
        </div>
      </div>
    </>
  );
}
