import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";

// Example items, to simulate fetching from another resources.

export default function PaginatedItems({
  itemsPerPage,
  allBlogs,
  GetSingleBlog,
  menuList,
}) {
  const items = menuList ? menuList : allBlogs;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems ? (
          currentItems.map((curElem, index) => {
            console.log(curElem);
            const {
              title,
              category,
              updatedAt,
              description,
              _id,
              authorName,
              featureImg,
            } = curElem;
            console.log(featureImg)
            let bufferToBase64 = featureImg.data.data;
            let buff = new Buffer(bufferToBase64);
            let base64data = buff.toString("base64");
            return (
              <div className="post-content" key={index}>
                <div className="row">
                  <div className="col-md-4">
                    <Link
                      className="post-img"
                      to={`/blog/single/${_id}`}
                      onClick={() => GetSingleBlog(_id)}
                    >
                      <img src={`data:image/png;base64,${base64data}`} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="inner-content clearfix">
                      <h3>
                        <Link
                          to={`/blog/single/${_id}`}
                          onClick={() => GetSingleBlog(_id)}
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="post-information">
                        <span>
                          <i className="fa fa-tags" aria-hidden="true"></i>
                          <a href={_id}>{category}</a>
                        </span>
                        <span>
                          <i className="fa fa-user" aria-hidden="true"></i>
                          {authorName}
                        </span>
                        <span>
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          {updatedAt.replace("T", " at ").slice(0, updatedAt.length - 5)}
                        </span>
                      </div>
                      <p className="description">
                        {description.length > 229
                          ? description.slice(0, 230) + "..."
                          : description}
                      </p>
                      <Link
                        className="read-more pull-right"
                        to={`/blog/single/${_id}`}
                        onClick={() => GetSingleBlog(_id)}
                      >
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
