import React from "react";

import "./Comment.css";

export default function Comment({ text, username }) {
  return (
    <div className="comment">
      <p>{text}</p>
      <p>{username}</p>
    </div>
  );
}
