import { Link } from "react-scroll";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Home from "./components/Home";
import Nav from "./components/Navbar";
import Projects from "./components/Projects";

const ScrollableComponents = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <ContactPage />
    </div>
  );
};

export default ScrollableComponents;
