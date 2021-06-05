import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

import Comments from "./comments/Comments";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Blog.css";

export default function Blog({ match }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  const getPost = async () => {
    db.collection("blogs")
      .doc(`${match.params.blog}`)
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
        <>
          <article className="post">
            <div className="post-info">
              <h1>{post.name}</h1>
              <p>{post.category}</p>
              <p>{post.date}</p>
            </div>
            <LazyLoadImage
              src={post.image}
              alt="post"
              className="post-img"
              effect="blur"
            />
            <div className="post-article">
              <p className="justify">{post.article}</p>
            </div>
          </article>
          <Comments />
        </>
      )}
    </>
  );
}
