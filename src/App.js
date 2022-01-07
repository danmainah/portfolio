import './App.css';
import TopNavbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

const App = function () {
  return (
    <div className="App">
      <TopNavbar />
      <About />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
