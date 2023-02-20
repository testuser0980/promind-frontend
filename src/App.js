import React from "react";
import AllBlogs from "./components/user/allBlogs/AllBlogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/admin/posts/Posts";
import Login from "./components/admin/login/Login";
import AllCategories from "./components/admin/categories/AllCategories";
import "./css/bootstrap.min.css";
import "./css/style.css";
import BlogState from "./context/BlogState";
import SingleBlog from "./components/user/allBlogs/SingleBlog";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./components/admin/signup/Signup";
import Users from "./components/admin/users/Users";

function App() {
  return (
    <>
      <BlogState>
        <Router>
          <Routes>
            <Route path="/admin/signup" element={<Signup />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/" element={<AllBlogs />} />
            <Route path="/blog/single/:id" element={<SingleBlog />} />
            <Route path="/admin" element={<Posts />} />
            <Route path="/admin/categories" element={<AllCategories />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </Router>
      </BlogState>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
