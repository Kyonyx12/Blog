import PostForm from "./PostForm";
import { db } from "../../firebase/firebase";
import "./Post.css";

export default function Post() {
  const addOrEdit = async (blogsObj) => {
    await db.collection("blogs").doc().set(blogsObj);
  };
  return (
    <section className="blog">
      <PostForm addOrEdit={addOrEdit} />
    </section>
  );
}
