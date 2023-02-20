import React from "react";

export default function MenuBar() {
  return (
    <>
      <div id="menu-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="menu">
                <li>
                  <a href="category.php">Business</a>
                </li>
                <li>
                  <a href="category.php">Entertainment</a>
                </li>
                <li>
                  <a href="category.php">Sports</a>
                </li>
                <li>
                  <a href="category.php">Politics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
