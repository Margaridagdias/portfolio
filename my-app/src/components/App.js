import Navbar from "./Navbar";
import '.././css/App.css';
import ".././css/normalize.css";
import Hero from "./Hero";
import About from "./About";
import Projects from './Projects';
import Footer from './Footer';
import Education from './Education';


function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
