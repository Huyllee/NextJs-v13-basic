/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "../create.modal";
import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";
import { toast } from "react-toastify";

interface IProps {
  blogs: IBlog[];
}

const UserTable = (props: IProps) => {
  const { blogs } = props;
  const [blogData, setBlogData] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

  const handleEditBtn = (blog: any) => {
    if (blog) {
      setShowModalCreate(true);
      setBlogData(blog);
    }
  };

  const handleDeleteBtn = (blogId: number) => {
    if (blogId) {
      if (confirm(`Do you want to delete this blog ${blogId}`)) {
        fetch(`http://localhost:8000/blogs/${blogId}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              toast.success("Deleted a blog success");
              mutate("http://localhost:8000/blogs");
            }
          });
      }
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Blogs Table</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Link className="btn btn-primary" href={`/blogs/${blog.id}`}>
                  View
                </Link>
                <Button
                  variant="warning"
                  className="mx-3"
                  onClick={() => handleEditBtn(blog)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteBtn(blog.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
        setBlogData={setBlogData}
        blogData={blogData}
      />
    </>
  );
};

export default UserTable;
