import "./Grid.css";
import GridFeatured from "./GridFeatured";
import { AiOutlineLine } from "react-icons/ai";
import React, { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";

export default function Grid() {
  const { blogs } = useContext(BlogContext);

  return (
    <section>
      <div className="grid-head">
        <h1>Recent Articles</h1>
        <div className="underline">
          <AiOutlineLine size="2rem" color="#b67b4b" />
          <AiOutlineLine size="2rem" color="#b67b4b" />
          <AiOutlineLine size="2rem" color="#b67b4b" />
        </div>
      </div>
      <div className="grid-posts">
        <GridFeatured data={blogs} />
      </div>
    </section>
  );
}
