import { LazyLoadImage } from "react-lazy-load-image-component";
import profile from "../../assets/profile.jpg";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./About.css";
export default function About() {
  return (
    <>
      <article className="about">
        <div className="about-info">
          <h1>Not AReal Name</h1>
          <p>My profession</p>
        </div>
        <LazyLoadImage
          src={profile}
          alt="about"
          className="about-img"
          effect="blur"
          width="444px"
        />
        <div className="about-article">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium dolore impedit alias tenetur quidem, vero nam possimus
            facilis odio aperiam est cumque sapiente, maxime harum modi incidunt
            numquam saepe eveniet!
          </p>
        </div>
      </article>
    </>
  );
}
