import React, { useState } from "react";
import BlogContext from "./BlogContext";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BlogState(props) {
  // const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [singleBlog, setSingleBLog] = useState([]);
  const Login = async (email, password) => {
    const url = "/api/auth/login";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await data.json();
    if (res.success == true) {
      const a = res.authToken;
      localStorage.setItem("authToken", JSON.stringify(a));
      window.location.href = window.origin + "/admin";
      toast.success("Logged in successfully.", {
        position: "bottom-right",
      });
    } else {
      toast.error("Username or password is wrong.", {
        position: "bottom-right",
      });
    }
  };
  const Signup = async (name, email, password) => {
    const url = "/api/auth/create/admin";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const res = await data.json();
    if (res.success == true) {
      const a = res.authToken;
      localStorage.setItem("authToken", JSON.stringify(a));
      window.location.href = window.origin + "/admin/login";
      toast.success("Account has been created successfully.", {
        position: "bottom-right",
      });
    } else {
      toast.error("Username already exists.", {
        position: "bottom-right",
      });
    }
  };
  const fetchAllBlogs = async () => {
    // e.target.classList.add('loading')
    const url = "/api/blog/all-blogs";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res.blogs);
    setAllBlogs(...a);
    // e.target.classList.remove('loading')
  };
  const fetchAllCategories = async () => {
    const url = "/api/blog/all-categories";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res.categories);
    setAllCategories(...a);
  };
  const createCategory = async (category) => {
    const url = "/api/blog/create-category";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: JSON.parse(localStorage.getItem("authToken")),
      },
      body: JSON.stringify({category}),
    });
    const res = await data.json();
    console.log(res);
  };
  const createBlog = async (formData) => {
    const url = "/api/blog/create";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        authToken: JSON.parse(localStorage.getItem("authToken")),
      },
      body: formData,
    });
    const res = await data.json();
    console.log(res);
  };
  const GetSingleBlog = async (id) => {
    const url = "/api/blog/single/" + id;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        // authToken: JSON.parse(localStorage.getItem("authToken")),
      },
    });
    const res = await data.json();
    console.log(res);
    const a = [];
    a.push(res.blog);
    setSingleBLog(a);
  };
  const DeleteBlog = async (id) => {
    const url = "/api/blog/delete/" + id;
    const data = await fetch(url, {
      method: "DELETE",
      headers: {
        // "Content-Type": "multipart/form-data",
        authToken: JSON.parse(localStorage.getItem("authToken")),
      },
    });
    const res = await data.json();
    console.log(res);
    if (res.success === true) {
      toast.success(res.message, {
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      <BlogContext.Provider
        value={{
          fetchAllBlogs,
          setAllBlogs,
          allBlogs,
          fetchAllCategories,
          allCategories,
          Login,
          Signup,
          createBlog,
          DeleteBlog,
          GetSingleBlog,
          singleBlog,
          createCategory,
        }}
      >
        {props.children}
      </BlogContext.Provider>
    </>
  );
}
