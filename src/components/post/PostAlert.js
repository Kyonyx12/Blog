import React from "react";
import "./PostAlert.css";

export default function PostAlert({ handleAlert }) {
  return (
    <div className="alert-container" onClick={handleAlert}>
      <div className="alert">
        <h2 className="alert-h1">
          You can comment and post in this demo, the content that you add will
          be deleted automatically in an hour.
        </h2>
        <button className="close-btn" onClick={handleAlert}>
          Close
        </button>
      </div>
    </div>
  );
}
