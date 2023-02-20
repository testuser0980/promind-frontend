import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlogContext from "../../../context/BlogContext";
import Footer from "../../user/footer/Footer";
import Header from "../header/Header";
import PaginatedItems from "../pagination/PaginationCategories";
import AddCategory from "./AddCategory";

export default function AllCategories() {
  const [isModalActive, setIsModalActive] = useState(false);
  const context = useContext(BlogContext);
  const { fetchAllCategories, allCategories } = context;
  const refreshHandler = (e) => {
    e.target.classList.add("loading");
    fetchAllCategories();
    toast.success("All categories fetched successfully.", {
      position: "bottom-right",
    });
    return e.target.classList.remove("loading");
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);
  return (
    <>
      <Header />
      <div id="admin-content">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1 className="admin-heading">All Categories</h1>
            </div>
            <div
              className="col-md-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a
                className="add-new"
                href="#"
                onClick={() => setIsModalActive(true)}
              >
                add category
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
              <PaginatedItems itemsPerPage={2} allCategories={allCategories} />
            </div>
          </div>
        </div>
      </div>
      {isModalActive === true && (
        <AddCategory
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      )}
      <Footer />
    </>
  );
}
