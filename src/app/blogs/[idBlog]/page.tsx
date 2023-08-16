"use client";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const DetailBlog = (props: any) => {
  const { params } = props;

  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.idBlog}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return "Loading..";

  return (
    <>
      <Link className="btn btn-primary my-3" href="/blogs">
        Go Back
      </Link>
      <Card className="container px-0" border="info" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{data?.title}</Card.Title>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer>Author: {data?.author}</Card.Footer>
      </Card>
    </>
  );
};

export default DetailBlog;
