/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const BlogCard = ({ blog }) => {
  const [loading, setLoading] = useState(true);
  const [modalBlog, setModalBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    setModalImg(blog.image);
  }, [blog.image]);

  // console.log(blog._id);
  const getComments = async () => {
    fetch(`https://vr-hub-server.vercel.app/api/v1/getComments/${blog._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data.comments);
        setLoading(false);
      });
  };
  // run useeffect after 2 seconds
  useEffect(() => {
    setLoading(true);
    getComments();
  }, []);
  const displayModal = (blog) => {
    console.log(blog);
    setModalBlog(blog);
    // const modal = document.querySelector(".modal");
    // const modalBg = document.querySelector(".modal-bg");
    // modal.style.display = "block";
    // modalBg.style.display = "block";
    setModalVisible(true);
  };

  console.log(modalBlog);

  const hideModal = () => {
    // const modal = document.querySelector(".modal");
    // const modalBg = document.querySelector(".modal-bg");
    // modal.style.display = "none";
    // modalBg.style.display = "none";
    setModalVisible(false);
  };

  const addComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const blogId = modalBlog._id;
    const author = JSON.parse(localStorage.getItem("loggedin")).email;

    fetch(`https://vr-hub-server.vercel.app/api/v1/addComment/${blogId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        author: author,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Comment Added Successfully");
          form.reset();
          getComments()
        } else {
          alert("Something went wrong");
        }
      });
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

      {modalVisible && (
        <div
          onClick={hideModal}
          className="modal-bg fixed h-screen w-full bg-black opacity-60 top-0 left-0 z-10"
        ></div>
      )}
      {modalVisible && (
        <div className="modal max-h-[75vh] overflow-y-auto w-[90%] max-w-[95%] p-10 bg-white shadow fixed top-[50%] z-20 rounded left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img
            src={modalImg ? modalImg : ""}
            className="w-full h-[300px] object-cover mb-4"
            alt=""
          />
          <h3 className="text-2xl font-bold mb-[10px] ops text-[#164B60]">
            {modalBlog?.title}
          </h3>
          <p className="text-[#666] lato">{modalBlog?.description}</p>

          <hr className="my-4" />

          <div className="flex justify-between items-center">
            <p className="text-[#666] lato font-bold">{modalBlog?.author}</p>
            <p className="text-[#666] lato font-bold">
              {modalBlog?.publishedDate}
            </p>
          </div>

          <hr className="my-4" />
          <h2 className="text-xl mb-2">Comments</h2>
          {!loading && comments && comments.length >= 1 ? (
            comments.map((comment) => (
              <div className="mb-4">
                <p className="text-[#000] text-lg font-bold lato">
                  {comment?.comment}
                </p>
                <p className="text-[#666] text-sm lato font-bold">
                  {comment?.author}
                </p>
              </div>
            ))
          ) : (
            <p className="text-[#666] lato">No Comments Found</p>
          )}
          <hr className="my-4" />

          <form action="" onSubmit={addComment}>
            <div className="mb-[30px]">
              <label htmlFor="comment" className="block mb-[10px]">
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                className="w-full resize-none border-[1px] border-[#164B60] rounded-[5px] p-[10px] outline-none focus:border-[#4FC0D0]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#164B60] text-[#fff] p-[15px] text-xl block rounded-[5px] ms-auto mt-5"
              >
                Add Comment
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BlogCard;
