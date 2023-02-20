import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";

// Example items, to simulate fetching from another resources.

export default function PaginatedItems({ itemsPerPage, allBlogs, DeleteBlog }) {
  const items = allBlogs;

  function Items({ currentItems }) {
    return (
      <>
        <table className="content-table">
          <thead>
            <th>S.No.</th>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Author</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {currentItems.length !== 0 ? (
              currentItems.map((curElem, index) => {
                const { authorName, category, createdAt, title, _id } = curElem;
                return (
                  <tr key={index}>
                    <td className="id">{index + 1}</td>
                    <td>{title}</td>
                    <td style={{ textTransform: "capitalize" }}>{category}</td>
                    <td>{createdAt.slice(0, 10)}</td>
                    <td>{authorName}</td>
                    <td className="edit">
                      <a href={_id}>
                        <i className="fa fa-edit"></i>
                      </a>
                    </td>
                    <td className="delete">
                      <a href="#" onClick={() => DeleteBlog(_id)}>
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Loader />
            )}
          </tbody>
        </table>
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
