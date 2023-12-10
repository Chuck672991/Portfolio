import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Themes from './components/Themes';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Themes />
    <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="home" element={<Home />} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
