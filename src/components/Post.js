import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import "./Post.css";
export default function Post({ match }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  const getPost = async () => {
    db.collection("blogs")
      .doc(`${match.params.post}`)
      .onSnapshot((querySnapshot) => {
        const post = querySnapshot.data();
        setPost(post);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPost(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <article className="post">
          <div className="post-info">
            <h1>{post.name}</h1>
            <p>{post.type}</p>
            <p>{post.date}</p>
          </div>
          <img src={post.image} alt="post" className="post-img" />
          <div className="post-article">
            <p>{post.article}</p>
          </div>
        </article>
      )}
    </>
  );
}
