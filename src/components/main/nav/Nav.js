import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ setModal, modal }) {
  return (
    <nav>
      <div className="logo">
        <GiHamburgerMenu
          className="mobile-menu"
          size="1.5rem"
          onClick={() => setModal(!modal)}
        />
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://kyonyx12.github.io/my-blog">
          <TiSocialFacebookCircular size="2.85rem" className="nav-social" />
        </a>
        <a href="https://kyonyx12.github.io/my-blog">
          <TiSocialGithubCircular size="2.85rem" className="nav-social" />
        </a>
        <a href="https://kyonyx12.github.io/my-blog">
          <TiSocialTwitterCircular size="2.85rem" className="nav-social" />
        </a>
      </div>
    </nav>
  );
}
