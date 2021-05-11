import "./Modal.css";
import { Link } from "react-router-dom";

export default function Modal({ setModal, modal }) {
  return (
    <>
      <div className="modal">
        <div>
          <ul className="modal-links">
            <li>
              <Link to="/" onClick={() => setModal(!modal)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setModal(!modal)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/post" onClick={() => setModal(!modal)}>
                Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
