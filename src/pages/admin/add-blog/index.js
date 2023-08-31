import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaBook, FaDashcube, FaSignOutAlt } from "react-icons/fa";

const AddBlog = () => {
  const handleAddBlog = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;
    const publishedDate = new Date().toLocaleDateString();

    const data = {
      title,
      author,
      description,
      image,
      category,
      publishedDate,
    };

    fetch("https://vr-hub-server.vercel.app/api/v1/createBlog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Blog Added Successfully");
          form.reset();
        } else {
          alert("Invalid Credentials");
          form.reset();
        }
      });
  };
  return (
    <div className="admin-dashboard flex md:flex-row flex-col justify-between items-start gap-10">
      <div className="sidebar md:w-[300px] w-full p-4 bg-[#164B60] md:min-h-screen h-auto">
        <img src={logo} className="w-[150px] mx-auto" alt="" />

        <hr className="my-4" />

        <ul className="text-white">
          <li className="mb-4">
            <Link
              to="/admin/dashboard"
              className="flex gap-4 justify-start items-center"
            >
              <FaDashcube /> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/add-blog"
              className="flex gap-4 justify-start items-center"
            >
              <FaBook /> Add Blog
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin" className="flex gap-4 justify-start items-center">
              <FaSignOutAlt className="rotate-[180deg]" /> Log Out
            </Link>
          </li>
        </ul>
      </div>
      <div className="main w-full p-4">
        <h3 className="text-4xl">Add a Blog</h3>

        <form action="" className="mt-10" onSubmit={handleAddBlog}>
          <div className="form-group">
            <label htmlFor="">Blog Title</label>
            <input
              type="text"
              name="title"
              className="form-control border border-[#00000030] w-full block mt-3 p-4 rounded"
              placeholder="Enter Blog Title"
              required
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="">Written By</label>
            <input
              type="text"
              name="author"
              className="form-control border border-[#00000030] w-full block mt-3 p-4 rounded"
              placeholder="Enter Author's Name"
              required
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              className="form-control border border-[#00000030] w-full block mt-3 p-4 rounded"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Blog Description"
              required
            ></textarea>
          </div>
          <div className="form-group mt-5">
            <label htmlFor="">Image URL</label>
            <input
              type="url"
              name="image"
              className="form-control border border-[#00000030] w-full block mt-3 p-4 rounded"
              placeholder="Enter Related Image URL"
              required
            />
          </div>

          <div className="form-group mt-5">
            <label htmlFor="">Category</label>
            <select
              name="category"
              id=""
              className="form-control border border-[#00000030] w-full block mt-3 p-4 rounded"
            >
              <option value="" selected disabled>
                Select Category
              </option>
              <option value="VR Corner">VR Corner</option>
              <option value="VR Education Hub">VR Education Hub</option>
              <option value="VR Community">VR Community</option>
              <option value="VR Career Hub">VR Career Hub</option>
            </select>
          </div>

          <div className="form-group mt-5 text-right">
            <button className="bg-[#164B60] text-white px-6 py-2 rounded-[5px]">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
