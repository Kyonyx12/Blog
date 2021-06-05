import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Comment.css";

export default function Comment({ text, username, profileImg }) {
  return (
    <div className="comment">
      <div className="profile-comment">
        <LazyLoadImage
          src={profileImg}
          alt={username}
          className="profile-img"
        />
      </div>
      <div>
        <p>{username}</p>
        <p className="comment-content">{text}</p>
      </div>
    </div>
  );
}
