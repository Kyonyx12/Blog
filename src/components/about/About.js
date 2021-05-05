import profile from "../../images/profile.jpg";
import "./About.css";
export default function About() {
  return (
    <>
      <article className="about">
        <div className="about-info">
          <h1>Jose Antonio Lopez Ramos</h1>
          <p>Frontend Developer</p>
        </div>
        <img src={profile} alt="about" className="about-img" />
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
