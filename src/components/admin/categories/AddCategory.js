import React, { useContext, useState } from "react";
import BlogContext from "../../../context/BlogContext";
import "../../admin/style.scss";

export default function AddCategory({ setIsModalActive, isModalActive }) {
  const context = useContext(BlogContext)
  const {createCategory} = context
  const [category,setIsCategory] = useState({'cat': ''})
  const onCLickHandler = (e) => {
    e.preventDefault()
    const {cat} = category
    createCategory(cat)
  }
  const onChange = (e) => {
    setIsCategory({...category, [e.target.name]: e.target.value})
  }
  return (
    <>
      {isModalActive && (
        <div className="modal-form-custom">
          <div className="w-500 col-md-offset-3 col-md-6">
            <form>
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  name="cat" value={category.cat}
                  className="form-control"
                  placeholder="Category Name"
                  required={true} onChange={onChange}
                />
              </div>
              <input
                type="submit"
                name="save"
                className="btn btn-primary"
                value="Save"
                onClick={(e) => onCLickHandler(e)}
                
              />
              <input
                type="submit"
                className="btn btn-warning" style={{marginLeft: 10}}
                value="Close"
                onClick={() => setIsModalActive(false)}
                
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
