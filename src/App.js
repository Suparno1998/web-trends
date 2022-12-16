import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Menu from './components/Menu';
import Members from './components/Members';
import NavbarTrends from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwojsx";
import HomeSlider from "./components/HomeSlider/HomeSlider";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <NavbarTrends/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/contact-us" element={<ContactUs/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/members" element={<Members/>}></Route>
        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
