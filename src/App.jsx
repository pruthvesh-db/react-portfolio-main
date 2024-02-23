// import styles from "./App.module.css";
import './app.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Pruthvesh } from "./components/Pruthvesh";

import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <Router>
    <div className="App">
    <div className='ripple-background'>
    {/* <div className='circle xxlarge shade1'></div> */}
    <div className='circle xlarge shade2'></div>
    <div className='circle large shade3'></div>
    <div className='circle mediun shade4'></div>
    <div className='circle small shade5'></div>
    </div>
      <Routes>
      {/* <Route path="/pruthvesh" element={<Pruthvesh />} />
      <Route path="/parth" element={<Pruthvesh />} /> */}
       <Route path="/" exact element={<Projects />} />
       <Route path="/portfolio/:id" element={<Portfolio />} />
      {/* <Route path="/" element={<Projects />} /> */}
      </Routes>
      {/* <Landing /> */}
    </div>
    </Router>

  );
}

export default App;


{/* <Homepage /> */}
{/* {/* <Navbar /> */}
{/* <Hero /> */}
{/* <About /> */}
{/* <Experience />  */}
{/* <Projects /> */}
{/* <Contact /> */}
{/* <Pruthvesh /> */}