import Navbar from "./Navbar";
import '.././css/App.css';
import ".././css/normalize.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Cv from './Cv';


function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
    </div>
  );
}

export default App;
