import { useState } from "react";
import { BlogProvider } from "./context/BlogContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GoogleAuthProvider } from "./context/GoogleAuthContext";
import { ToastContainer } from "react-toastify";

import Login from "./components/login/Login";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Nav from "./components/main/nav/Nav";
import Footer from "./components/main/footer/Footer";
import Post from "./components/post/Post";
import Blog from "./components/blog/Blog";
import Modal from "./components/main/modal/Modal";

import LoginRoute from "./components/login/LoginRoute";
import PostRoute from "./components/post/PostRoute";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <GoogleAuthProvider>
        <BlogProvider>
          <Router>
            <Nav setModal={setModal} modal={modal} />
            {modal && <Modal setModal={setModal} modal={modal} />}
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/about" component={About} />
              <LoginRoute path="/login" component={Login} />
              <PostRoute path="/post" component={Post} />
              <Route path="/:blog" component={Blog} />
            </Switch>
            <Footer />
          </Router>
          <ToastContainer />
        </BlogProvider>
      </GoogleAuthProvider>
    </>
  );
}

export default App;
