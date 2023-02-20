import React, { useContext, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import BlogContext from "../../../context/BlogContext";
import PaginatedItems from "../pagination/Pagination";
import Loader from "../../loader/Loader";

export default function AllBlogs() {
  const context = useContext(BlogContext);
  const {
    fetchAllBlogs,
    allBlogs,
    allCategories,
    fetchAllCategories,
    GetSingleBlog,
  } = context;
  const uniqueList = [
    ...new Set(
      allBlogs &&
        allBlogs.map((curElem) => {
          return curElem.category;
        })
    ),
    "All",
  ];
  const [menuList, setMenuList] = useState(allBlogs);
  const [fetchWithoutClick, setFetchWithoutClick] = useState(true);
  // const [menuData, setMenuData] = useState(uniqueList);
  const filterItem = (category) => {
    setFetchWithoutClick(false);
    if (category === "All") {
      setMenuList(allBlogs);
      return;
    }
    const updatedList = allBlogs.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuList(updatedList);
  };
  useEffect(() => {
    fetchAllBlogs();
    fetchAllCategories();
  }, []);
  return (
    <>
      <Header
        filterItem={filterItem}
        allCategories={allCategories}
        uniqueList={uniqueList}
      />
      <div id="main-content">
        <div className="container">
          <div className="row">
            {allBlogs.length == 0 ? (
              <Loader />
            ) : (
              <div className="col-md-8">
                {fetchWithoutClick === false ? (
                  <PaginatedItems
                    itemsPerPage={5}
                    allBlogs={allBlogs}
                    menuList={menuList}
                    GetSingleBlog={GetSingleBlog}
                  />
                ) : (
                  <PaginatedItems
                    itemsPerPage={5}
                    allBlogs={allBlogs}
                    // menuList={menuList}
                    GetSingleBlog={GetSingleBlog}
                  />
                )}
              </div>
            )}
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
