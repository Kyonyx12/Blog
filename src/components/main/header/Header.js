import React, { useContext, useState } from "react";
import { BiRightArrow, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineInfo } from "react-icons/ai";
import { BlogContext } from "../../../context/BlogContext";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const { blogs, loading } = useContext(BlogContext);
  const [email, setEmail] = useState("");

  const handleChange = (e) => setEmail(e.target.value);

  if (loading === true) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "20rem",
          marginBottom: "30rem",
        }}
      >
        Loading...
      </h1>
    );
  } else {
    const { date, name, article, image, id } = blogs[0];

    return (
      <header>
        <section className="header-container">
          <div className="header-info">
            <div className="header-info-date">
              <h4>{date}</h4>
              <BiRightArrow color="#b67b4b" />
              <BiRightArrow color="#b67b4b" />
              <BiRightArrow color="#b67b4b" />
            </div>
            <h1>{name}</h1>
            <p>{article.slice(0, 200)}...</p>
            <Link to={`${id}`}>
              <button className="header-info-button">READ MORE</button>
            </Link>
            <br />
            <div className="header-info-dots">
              <BiDotsVerticalRounded color="#b67b4b90" size="2.5rem" />
              <br />
              <BiDotsVerticalRounded color="#b67b4b90" size="2.5rem" />
              <br />
              <AiOutlineInfo color="#b67b4b90" size="2.5rem" />
              <br />
              <AiOutlineInfo color="#b67b4b90" size="2.5rem" />
              <br />
            </div>
          </div>
          <div className="header-img-container">
            <img src={image} alt={name} className="header-img" />
          </div>
        </section>
        <section className="newsletter">
          <div className="newletter-dots">{/*insert dot img here, svg*/}</div>
          <div className="newsletter-container">
            <div className="newsletter-info">
              <h1>Subscribe to my Newsletter</h1>
              <p>Lorem veniam aliqua aute quis in. Nulla dolor veniam.</p>
            </div>
            <form className="newsletter-form">
              <input
                value={email}
                onChange={handleChange}
                name="email"
                disabled
              />
              <button type="submit" className="newsletter-button" disabled>
                <p>SUBSCRIBE</p>
              </button>
            </form>
          </div>
        </section>
      </header>
    );
  }
}
