import React, { useContext } from "react";
import BlogContext from "../../../context/BlogContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Buffer } from "buffer";
import Loader from "../../loader/Loader";

export default function SingleBlog() {
  const context = useContext(BlogContext);
  const { singleBlog } = context;
  console.log(singleBlog);
  return (
    <>
      <Header />
      <div id="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {singleBlog == 0 ? (
                <Loader />
              ) : (
                <div className="post-container">
                  {singleBlog ? (
                    singleBlog.map((curElem, index) => {
                      const {
                        featureImg,
                        authorName,
                        category,
                        createdAt,
                        description,
                        title,
                      } = curElem;
                      let bufferToBase64 = featureImg.data.data;
                      let buff = new Buffer(bufferToBase64);
                      let base64data = buff.toString("base64");
                      return (
                        <div className="post-content single-post" key={index}>
                          <h3>{title}</h3>
                          <div className="post-information">
                            <span>
                              <i className="fa fa-tags" aria-hidden="true"></i>
                              {category}
                            </span>
                            <span>
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <a href="author.php">{authorName}</a>
                            </span>
                            <span>
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                              {createdAt.slice(0, 10)}
                            </span>
                          </div>
                          <img
                            className="single-feature-image"
                            src={`data:image/png;base64,${base64data}`}
                            alt=""
                          />
                          <p className="description">{description}</p>
                        </div>
                      );
                    })
                  ) : (
                    <Loader />
                  )}
                </div>
              )}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
