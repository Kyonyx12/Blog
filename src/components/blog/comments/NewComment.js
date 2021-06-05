import React, { useState, useContext } from "react";

import { GoogleAuthContext } from "../../../context/GoogleAuthContext";
import { db } from "../../../firebase/firebase";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "./NewComment.css";

const initialState = { content: "" };

export default function NewComment() {
  const [comment, setComment] = useState(initialState);
  const { user } = useContext(GoogleAuthContext);

  const { blog: id } = useParams();

  const addOrEditComment = async (comment) => {
    await db
      .collection("content")
      .doc(id)
      .collection("comments")
      .doc()
      .set(comment);
  };

  const handleChange = (e) => {
    const date = new Date(Date.now()).toString().slice(0, 24);
    setComment({ content: e.target.value, ...user, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditComment(comment);
    setComment(initialState);
    toast("Comment send!", {
      type: "info",
    });
  };

  return (
    <>
      <p>Add new comment</p>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          onChange={handleChange}
          value={comment.content}
          className="comment-input"
        />
        <button className="comment-form-button">Send</button>
      </form>
    </>
  );
}
