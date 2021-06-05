import React, { useEffect, useState, useContext } from "react";
import { GoogleAuthContext } from "../../../context/GoogleAuthContext";
import { db } from "../../../firebase/firebase";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import Comment from "./Comment";

import "./Comments.css";

export default function Comments() {
  const [comments, setComments] = useState([]);

  const { loged } = useContext(GoogleAuthContext);

  const { blog: id } = useParams();

  const getComments = async () => {
    await db
      .collection("content")
      .doc(`${id}`)
      .collection("comments")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        let comments = [];
        querySnapshot.forEach((comment) => {
          comments.push({ ...comment.data(), id: comment.id });
        });
        setComments(comments);
      });
  };

  useEffect(() => {
    getComments(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comments-container">
      {loged ? <NewComment /> : <p>Please log in to add comments...</p>}
      {comments.length === 0 ? (
        <p>No comments yet...</p>
      ) : (
        <div className="comments">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.content}
              username={comment.username}
              profileImg={comment.profileImg}
            />
          ))}
        </div>
      )}
    </div>
  );
}
