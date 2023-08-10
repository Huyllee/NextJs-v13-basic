"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "../create.modal";
import { useState } from "react";

interface IProps {
  blogs: IBlog[];
}

const UserTable = (props: IProps) => {
  const { blogs } = props;
  const [blogData, setBlogData] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

  const hangdeEditBtn = (blog: any) => {
    if (blog) {
      setShowModalCreate(true);
      setBlogData(blog);
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
                <Button variant="primary">View</Button>
                <Button
                  variant="warning"
                  className="mx-3"
                  onClick={() => hangdeEditBtn(blog)}
                >
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
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
