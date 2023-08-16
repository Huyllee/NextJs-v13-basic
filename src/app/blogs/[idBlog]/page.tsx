"use client";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";

const DetailBlog = (props: any) => {
  const { params } = props;

  return (
    <>
      <Link className="btn btn-primary my-3" href="/">
        Go Back
      </Link>
      <Card className="container px-0" border="info" style={{ width: "30rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>dsfsfd</Card.Footer>
      </Card>
    </>
  );
};

export default DetailBlog;
