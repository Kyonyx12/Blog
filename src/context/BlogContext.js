import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    db.collection("blogs").onSnapshot((querySnapshot) => {
      let blogs = [];
      querySnapshot.forEach((blog) => {
        blogs.push({ ...blog.data(), id: blog.id });
      });
      setBlogs(blogs);
      setLoading(false);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
}
