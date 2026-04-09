import React from "react";
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-nextjs",
    author: "Haque Publications",
    date: "2026-04-01",
    category: "Web Development",
    tags: ["Next.js", "React", "Frontend"],
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content:
      "Next.js is a powerful React framework that enables server-side rendering and static site generation. In this guide, we will explore how to set up a project and build your first page.",
    image: "/images/nextjs.png",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    author: "Haque Publications",
    date: "2026-04-02",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
    excerpt:
      "A beginner-friendly guide to React Hooks like useState and useEffect.",
    content:
      "React Hooks allow you to use state and lifecycle features in functional components. This article explains useState, useEffect, and best practices.",
    image: "/images/react-hooks.png",
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox",
    slug: "mastering-css-flexbox",
    author: "Haque Publications",
    date: "2026-04-03",
    category: "CSS",
    tags: ["CSS", "Flexbox", "Design"],
    excerpt:
      "Flexbox makes layout design easier. Learn how to use it effectively.",
    content:
      "CSS Flexbox is a layout module that helps you design flexible and responsive layouts. In this post, we cover all important properties with examples.",
    image: "/images/flexbox.png",
  },
  {
    id: 4,
    title: "Introduction to JavaScript ES6",
    slug: "javascript-es6-intro",
    author: "Haque Publications",
    date: "2026-04-04",
    category: "JavaScript",
    tags: ["JavaScript", "ES6", "Programming"],
    excerpt:
      "Discover the most important ES6 features every developer should know.",
    content:
      "ES6 introduced many powerful features like arrow functions, destructuring, and modules. This guide will help you understand them with simple examples.",
    image: "/images/es6.png",
  },
];
const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Blogs</h1>
      {blogs.map(blog=><div key={blog.id}>{blog.title}</div>)}
    </div>
  );
};

export default BlogPage;
