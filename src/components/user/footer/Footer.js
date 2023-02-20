import React from "react";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>
                © Copyright {new Date().getFullYear() - 1} News | Powered by{" "}
                <a href="http://www.yahoobaba.net/">Yahoo Baba</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
