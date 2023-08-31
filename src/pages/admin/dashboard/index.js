import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaBook, FaDashcube, FaSignOutAlt } from "react-icons/fa";
import { Table } from "antd";

const Dashboard = () => {
  const [dataSource, setDataSource] = useState([]);

  const getDataSource = () => {
    fetch("https://vr-hub-server.vercel.app/api/v1/getBlogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDataSource(data);
      });
  };
  useEffect(() => {
    getDataSource();
  }, []);

  const deteleBlog = (id) => {
    fetch(`https://vr-hub-server.vercel.app/api/v1/deleteBlog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Blog Deleted Successfully");
          getDataSource();
        } else {
          alert("Invalid Credentials");
        }
      });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Published Date",
      dataIndex: "publishedDate",
      key: "publishedDate",
    },
    {
      title: "Written By",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: <p className="text-right">Actions</p>,
      dataIndex: "action",
      className: "text-right",
      key: "action",
      render: (
        text,
        record // <Button type="primary">Edit</Button>
      ) => (
        <div className="flex gap-4 justify-end items-center">
          <button
            onClick={() => deteleBlog(record._id)}
            className="bg-[#F44336] text-white px-4 py-2 rounded-[5px]"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
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
        <h3 className="text-4xl">All Blogs</h3>
        <div className="overflow-x-auto">
          <Table dataSource={dataSource} columns={columns} className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
