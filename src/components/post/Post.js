import { useContext } from "react";
import { GoogleAuthContext } from "../../context/GoogleAuthContext";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { toast } from "react-toastify";
import PostForm from "./PostForm";
import "firebase/auth";
import "./Post.css";

export default function Post() {
  const { onLogedChange } = useContext(GoogleAuthContext);
  const addOrEdit = async (blogsObj) => {
    await db.collection("blogs").doc().set(blogsObj);
  };
  const handleLogout = () => {
    localStorage.setItem("loged", "false");
    onLogedChange(false);
    auth.signOut().then(() => {
      toast("Loged out!", {
        type: "info",
      });
    });
  };
  return (
    <section className="blog">
      <PostForm addOrEdit={addOrEdit} handleLogout={handleLogout} />
    </section>
  );
}
