import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../../../context/BlogContext";
import Footer from "../../user/footer/Footer";
import Header from "../header/Header";
import PaginatedItems from "../pagination/PaginationPosts";
import AddPost from "./AddPost";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const navigate = useNavigate();
  const context = useContext(BlogContext);
  const { fetchAllBlogs, allBlogs, DeleteBlog } = context;
  const [isModalActive, setIsModalActive] = useState(false);
  const refreshHandler = (e) => {
    e.target.classList.add("loading");
    fetchAllBlogs();
    toast.success("All blogs fetched successfully.", {
      position: "bottom-right",
    });
    return e.target.classList.remove("loading");
  };
  useEffect(() => {
    fetchAllBlogs();
    setTimeout(
      () => {
        if (JSON.parse(localStorage.getItem("authToken"))) {
          localStorage.removeItem("authToken");
          navigate("/admin/login");
          toast.info("Session has been expired.", {
            position: "bottom-right",
          });
        }
      },
      3600000 //1 Hour
    );
  },[]);
  return (
    <>
      <Header />
      <div id="admin-content">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="admin-heading">All Posts</h1>
            </div>
            <div className="col-md-7 text-right">
              <a
                className="add-new"
                style={{ marginRight: 10 }}
                href="#"
                onClick={() => setIsModalActive(true)}
              >
                add post
              </a>
              <i
                className="fas fa-sync"
                onClick={(e) => {
                  refreshHandler(e);
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-md-12">
              <PaginatedItems
                itemsPerPage={4}
                allBlogs={allBlogs}
                DeleteBlog={DeleteBlog}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalActive === true && (
        <AddPost
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      )}
      <Footer />
    </>
  );
}
