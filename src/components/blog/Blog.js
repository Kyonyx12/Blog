import BlogForm from "./BlogForm";
import { db } from "../../firebase/firebase";
import "./Blog.css";
export default function Blog() {
  const addOrEdit = async (blogsObj) => {
    await db.collection("blogs").doc().set(blogsObj);
    console.log("New blog added");
  };
  return (
    <section className="blog">
      <div className="blog-info">
        <h2>Write a new entry...</h2>
      </div>
      <BlogForm addOrEdit={addOrEdit} />
    </section>
  );
}
