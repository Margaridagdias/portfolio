import '.././css/App.css';
import ".././css/normalize.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Cv from './Cv';

//import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
          <Route path="/" exact component={Hero} />

          <Route path="/about" component={About} />

          <Route path="/skills" component={Skills} />

          <Route path="/cv" component={Cv} />
        </Switch>
      </Router>
      <About />
      <Skills />
    </div>
  );
}

export default App;
