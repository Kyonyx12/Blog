import React, { useState } from "react";
import "./Blog.css";
export default function BlogForm({ addOrEdit }) {
  const initialStateBlogs = {
    type: "",
    name: "",
    image: "",
    article: "",
  };
  const [blogs, setBlogs] = useState(initialStateBlogs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const date = new Date(Date.now()).toString().slice(0, 15);
    setBlogs({ ...blogs, [name]: value, date });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(blogs);
    setBlogs(initialStateBlogs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="type">Type of entry:</label>
      <input
        required
        onChange={handleChange}
        type="text"
        id="type"
        name="type"
        value={blogs.type}
        placeholder="Travel, education, lifestyle..."
      />
      <label htmlFor="name">Article name:</label>
      <input
        required
        onChange={handleChange}
        type="text"
        id="name"
        name="name"
        value={blogs.name}
        placeholder="Article of the day"
      />
      <label htmlFor="image">Image:</label>
      <input
        required
        onChange={handleChange}
        type="url"
        id="image"
        name="image"
        value={blogs.image}
        placeholder="URL of the image cover"
      />
      <textarea
        required
        onChange={handleChange}
        name="article"
        value={blogs.article}
        placeholder="Start the article..."
      />
      <button>POST</button>
    </form>
  );
}
