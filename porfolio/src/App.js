
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div className='max-w-7xl ma-auto'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />

      

    </div>
  );
}

export default App;
