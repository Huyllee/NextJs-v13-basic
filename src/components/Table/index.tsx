"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface IProps {
  blogs: IBlog[];
}

const UserTable = (props: IProps) => {
  const { blogs } = props;
  console.log(blogs);

  return (
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
              <Button variant="warning" className="mx-3">
                Edit
              </Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
