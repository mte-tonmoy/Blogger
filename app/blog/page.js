import { list } from "postcss";
import React from "react";

const blog = () => {
  const blogs = [
    {
      id: 1,
      tittle: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      tittle: "Blog 2",
      description: "Blog 2 description",
    },
  ];

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.tittle}</li>
      ))}
    </ul>
  );
};

export default blog;
