import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../../../context/BlogContext";
import "../../admin/style.scss";

export default function AddPost({ setIsModalActive, isModalActive }) {
  const context = useContext(BlogContext);
  const { fetchAllCategories, allCategories, createBlog } = context;
  const [modalFormData, setModalFormData] = useState({
    title: "",
    desc: "",
    category: "",
  });
  const [fileInfo, setFileInfo] = useState("");
  const onChange = (e) => {
    setModalFormData({ ...modalFormData, [e.target.name]: e.target.value });
  };
  const fileChangeHandler = (e) => {
    const files = e.target.files[0];
    setFileInfo(files);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, desc, category } = modalFormData;
    const description = desc;
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("feature_image", fileInfo);
    createBlog(formData);
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);
  return (
    <>
      {isModalActive === true && (
        <div className="modal-form-custom">
          <div className="w-500 col-md-offset-3 col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="post_title">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  autoComplete="off"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"> Description</label>
                <textarea
                  name="desc"
                  className="form-control"
                  rows="5"
                  required
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Category</label>
                <select
                  name="category"
                  onChange={onChange}
                  style={{ textTransform: "capitalize" }}
                  className="form-control"
                >
                  <option value="">Select</option>
                  {allCategories &&
                    allCategories.map((curElem, index) => {
                      const { category } = curElem;
                      return (
                        <option key={index} value={category} name={category}>
                          {category}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Post image</label>
                <input
                  type="file"
                  name="fileToUpload"
                  onChange={fileChangeHandler}
                  required
                />
              </div>
              <input
                type="submit"
                name="submit"
                className="btn btn-primary"
                value="Save"
                onClick={(e) => {
                  setIsModalActive(false);
                  onSubmitHandler(e);
                }}
                required
              />
              <input
                type="submit"
                name="submit" style={{marginLeft: 10}}
                className="btn btn-warning"
                value="CLose"
                onClick={() => {
                  setIsModalActive(false);
                }}
                required
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
