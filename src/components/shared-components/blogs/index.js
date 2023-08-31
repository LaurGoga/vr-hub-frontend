import React, { useEffect, useState } from "react";
import BlogCard from "../blog-card";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  // get the url of the page
  const { pathname } = useLocation();
  console.log(pathname);

  const [title, setTitle] = useState("VR Corner");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    fetch("https://vr-hub-server.vercel.app/api/v1/getBlogs", {
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
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    if (pathname === "/main/vr-corner") {
      setTitle("VR Corner");
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === "VR Corner"
      );
      setFilteredBlogs(filteredBlogs);
    } else if (pathname === "/main/vr-education") {
      setTitle("VR Education");
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === "VR Education Hub"
      );
      setFilteredBlogs(filteredBlogs);
    } else if (pathname === "/main/community") {
      setTitle("Community");
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === "VR Community"
      );
      setFilteredBlogs(filteredBlogs);
    } else if (pathname === "/main/vr-career") {
      setTitle("VR Career");
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === "VR Career Hub"
      );
      setFilteredBlogs(filteredBlogs);
    }
  }, [blogs, pathname]);

  // const data = [
  //   {
  //     id: 1,
  //     img: blog1,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  //   {
  //     id: 2,
  //     img: blog2,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  //   {
  //     id: 3,
  //     img: blog3,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  //   {
  //     id: 4,
  //     img: blog4,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  //   {
  //     id: 5,
  //     img: blog5,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  //   {
  //     id: 6,
  //     img: blog6,
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   },
  // ];
  return (
    <div className="blogs py-[50px]">
      <div className="container">
        <div className="text-center">
          <h2 className="ops md:text-5xl text-3xl text-[#164B60]">{title} Blogs</h2>
          <p className="ops mb-[50px] md:text-xl text-[#164B60]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {filteredBlogs.length >= 1 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <div className="text-center">
              <h2 className="text-3xl text-[#164B60]">No Blogs Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
