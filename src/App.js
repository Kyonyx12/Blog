import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Nav from "./components/main/nav/Nav";
import "./App.css";
import Footer from "./components/main/footer/Footer";
import Blog from "./components/blog/Blog";
import { BlogProvider } from "./context/BlogContext";
import Post from "./components/Post";
import Modal from "./components/main/modal/Modal";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <BlogProvider>
        <Router>
          <Nav setModal={setModal} modal={modal} />
          {modal && <Modal setModal={setModal} modal={modal} />}
          <Switch>
            <Route path="/home" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/:post" component={Post} />
          </Switch>
          <Footer />
        </Router>
      </BlogProvider>
    </>
  );
}

export default App;
