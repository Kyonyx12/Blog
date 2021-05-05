import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
  TiThMenuOutline,
} from "react-icons/ti";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ setModal, modal }) {
  return (
    <nav>
      <div className="logo">
        <TiThMenuOutline
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
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <TiSocialFacebookCircular size="2.85rem" className="nav-social" />
        <TiSocialGithubCircular size="2.85rem" className="nav-social" />
        <TiSocialTwitterCircular size="2.85rem" className="nav-social" />
      </div>
    </nav>
  );
}
