import React, { useContext } from "react";

import { BlogContext } from "../../../context/BlogContext";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import { AiOutlineLine } from "react-icons/ai";

import FeaturedCard from "./FeaturedCard";
import "./Featured.css";

export default function Featured() {
  const { blogs } = useContext(BlogContext);
  return (
    <section>
      <div className="featured-head">
        <h1>Featured Articles</h1>
        <div>
          <CgArrowLongLeft size="2rem" color="#b67b4b" className="arrow" />
          <CgArrowLongRight size="2rem" color="#b67b4b" className="arrow" />
        </div>
      </div>
      <div className="underline">
        <AiOutlineLine size="2rem" color="#b67b4b" />
        <AiOutlineLine size="2rem" color="#b67b4b" />
        <AiOutlineLine size="2rem" color="#b67b4b" />
      </div>
      <div className="featured-posts">
        <FeaturedCard blogs={blogs} />
      </div>
    </section>
  );
}
