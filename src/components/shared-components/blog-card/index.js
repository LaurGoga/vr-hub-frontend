import React, { useState } from "react";

const BlogCard = ({ blog }) => {
  const [modalBlog, setModalBlog] = useState({});
  const displayModal = (blog) => {
    setModalBlog(blog);
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".modal-bg");
    modal.style.display = "block";
    modalBg.style.display = "block";
  };

  const hideModal = () => {
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".modal-bg");
    modal.style.display = "none";
    modalBg.style.display = "none";
  };
  return (
    <>
      <div className="grid-item">
        <img
          src={blog.image}
          className="w-full h-[300px] object-cover"
          alt=""
        />
        <div className="content py-6">
          <h3 className="text-2xl font-bold mb-[10px] ops text-[#164B60]">
            {blog.title}
          </h3>
          <p className="text-[#666] lato">
            {blog.description.length >= 10
              ? blog.description.slice(0, 10) + "..."
              : blog.description}
          </p>

          <hr className="my-4" />

          <div className="flex justify-between items-center">
            <p className="text-[#666] lato font-bold">{blog.author}</p>
            <p className="text-[#666] lato font-bold">{blog.publishedDate}</p>
          </div>

          <div className="text-cente mt-8">
            <button
              onClick={() => displayModal(blog)}
              className="bg-[#164B60] text-[#fff] px-[20px] py-[10px] ops rounded-[5px]"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={hideModal}
        className="modal-bg hidden fixed h-screen w-full bg-black opacity-60 top-0 left-0 z-10"
      ></div>
      <div className="modal hidden w-[500px] max-w-[95%] p-10 bg-white shadow fixed top-[50%] z-20 rounded left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img
          src={modalBlog.image}
          className="w-full h-[300px] object-cover mb-4"
          alt=""
        />
        <h3 className="text-2xl font-bold mb-[10px] ops text-[#164B60]">
          {modalBlog.title}
        </h3>
        <p className="text-[#666] lato">{modalBlog.description}</p>

        <hr className="my-4" />

        <div className="flex justify-between items-center">
          <p className="text-[#666] lato font-bold">{modalBlog.author}</p>
          <p className="text-[#666] lato font-bold">
            {modalBlog.publishedDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
