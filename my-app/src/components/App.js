import Navbar from "./Navbar";
import '.././css/App.css';
import ".././css/normalize.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Background from './Background';
import Projects from './Projects';


function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />

        <Projects />
    </div>
  );
}

export default App;
