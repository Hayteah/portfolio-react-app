import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
