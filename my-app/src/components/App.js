import Navbar from "./Navbar";
import '.././css/App.css';
import ".././css/normalize.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from './Projects';
import Footer from './Footer';
import Background from './Background';


function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Background />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
