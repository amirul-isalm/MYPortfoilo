import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";


function App() {
  return (
    <div className="App">
       <Home />
       <About />
     <Skill/>
       <Project />
       <Blog />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
