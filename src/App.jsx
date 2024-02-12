import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import BanDieuHanh from "./pages/BanDieuHanh/BanDieuHanh";

const Home = () => {
    return (
        <div className="container">
            <Hero />
            <Skills />
            <WorkExperience />
            <ContactMe />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ban-dieu-hanh" element={<BanDieuHanh />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
};

export default App;