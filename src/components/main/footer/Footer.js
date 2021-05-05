import { SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import "../footer/Footer.css";
export default function Footer() {
  const year = new Date();

  return (
    <footer>
      <ul>
        <li>
          <a href="#index.html">
            <SiInstagram size="2.5rem" className="footer-social" />
          </a>
        </li>
        <li>
          <a href="#index.html">
            <SiGithub size="2.5rem" className="footer-social" />
          </a>
        </li>
        <li>
          <a href="#index.html">
            <SiFacebook size="2.5rem" className="footer-social" />
          </a>
        </li>
      </ul>
      <br />
      <p>
        Developed by Antonio Lopez. <br /> All rights reserved.{" "}
        {year.getFullYear()}
      </p>
    </footer>
  );
}
