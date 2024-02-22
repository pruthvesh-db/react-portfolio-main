import styles from "./App.module.css";
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
    <div className={styles.App}>
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