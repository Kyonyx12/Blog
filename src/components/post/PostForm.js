import React, { useState, useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { st } from "../../firebase/firebase";
import { toast } from "react-toastify";
import "./Post.css";

export default function PostForm({ addOrEdit }) {
  const initialStateBlogs = {
    category: "",
    name: "",
    article: "",
    image: undefined,
  };
  const [post, setPost] = useState(initialStateBlogs);
  const [fileUrl, setFileUrl] = useState(null);
  const { blogs } = useContext(BlogContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const date = new Date(Date.now()).toString().slice(0, 15);
    const order = blogs.length + 1;
    setPost({ ...post, [name]: value, date, order });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit({ ...post, image: fileUrl });
    setPost(initialStateBlogs);
    toast("Post published!", {
      type: "info",
    });
  };
  const handleUpload = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    const storageRef = st.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <select name="category" id="category" onChange={handleChange}>
        <option value="">---</option>
        <option value="Travel">Travel</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
        <option value="Food">Food</option>
        <option value="Anime">Anime</option>
        <option value="Videogames">Videogames</option>
      </select>
      <label htmlFor="name">Article name:</label>
      <input
        required
        onChange={handleChange}
        type="text"
        id="name"
        name="name"
        value={post.name}
        placeholder="Article of the day"
      />
      <label htmlFor="image">Image:</label>
      <input
        required
        onChange={handleUpload}
        type="file"
        id="image"
        name="image"
        value={post.image}
      />

      <textarea
        required
        onChange={handleChange}
        name="article"
        value={post.article}
        placeholder="Start the article..."
      />
      <button>POST</button>
    </form>
  );
}
