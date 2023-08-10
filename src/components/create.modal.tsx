"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (v: boolean) => void;
  setBlogData: (v: IBlog | null) => void;
  blogData: IBlog | null;
}

const CreateModal = (props: IProps) => {
  const { showModalCreate, setShowModalCreate, setBlogData, blogData } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blogData && blogData.id) {
      setIsEdit(true);
      setBlogId(blogData.id);
      setTitle(blogData.title);
      setAuthor(blogData.author);
      setContent(blogData.content);
    }
  }, [blogData]);

  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title");
      return;
    }
    if (!author) {
      toast.error("Not empty author");
      return;
    }
    if (!content) {
      toast.error("Not empty content");
      return;
    }

    if (!isEdit) {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Create new blog success");
            handleCloseModal();
            mutate("http://localhost:8000/blogs");
          }
        });
    }

    if (blogData && blogData.id) {
      fetch(`http://localhost:8000/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Update a blog success");
            handleCloseModal();
            mutate("http://localhost:8000/blogs");
          }
        });
    }
  };

  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setBlogData(null);
    setShowModalCreate(false);
    setIsEdit(false);
  };

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Update A Blog" : "Add New A Blog"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="email"
                placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            {isEdit ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
