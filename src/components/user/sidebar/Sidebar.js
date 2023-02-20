import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../../context/BlogContext";
var Buffer = require("buffer/").Buffer;

export default function Sidebar() {
  const context = useContext(BlogContext);
  const { fetchAllBlogs, allBlogs, GetSingleBlog } = context;
  useEffect(() => {
    fetchAllBlogs();
  }, []);
  return (
    <>
      <div id="sidebar" className="col-md-4">
        <div className="search-box-container">
          <h4>Search</h4>
          <form className="search-post" action="search.php" method="GET">
            <div className="input-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search ....."
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-danger">
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="recent-post-container">
          <h4>Recent Posts</h4>
          {allBlogs &&
            allBlogs
              .slice(allBlogs.length - 3)
              .reverse()
              .map((curElem) => {
                const { title, category, updatedAt, _id, featureImg } = curElem;
                let bufferToBase64 = featureImg.data.data;
                let buff = new Buffer(bufferToBase64);
                let base64data = buff.toString("base64");
                return (
                  <div className="recent-post" key={_id}>
                    <Link
                      className="post-img"
                      to={`/blog/single/${_id}`}
                      onClick={() => GetSingleBlog(_id)}
                    >
                      <img src={`data:image/png;base64,${base64data}`} alt="" />
                    </Link>
                    <div className="post-content">
                      <h5>
                        <Link
                          to={`/blog/single/${_id}`}
                          onClick={() => GetSingleBlog(_id)}
                        >
                          {title}
                        </Link>
                      </h5>
                      <span>
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        <a href={_id}>{category}</a>
                      </span>
                      <span>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        {updatedAt.replace("T", " at ").slice(0, updatedAt.length - 5)}
                      </span>
                      <Link
                        className="read-more"
                        to={`/blog/single/${_id}`}
                        onClick={() => GetSingleBlog(_id)}
                      >
                        read more
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
