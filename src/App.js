import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

const App = function () {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
