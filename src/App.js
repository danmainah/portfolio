import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App =() => {
  return (
    <div className="App">
       <Navbar />
       <About />
       <Projects />
       <Footer />
    </div>
  );
}

export default App;
