
import './App.css';
import Navbar from "./components/Navbar";
import  Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from './components/About'
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div>
    <Header/>
     <Navbar/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;
