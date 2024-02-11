import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import Navigation from "./views/layouts/Navigation.jsx";
import ContactPage from "./views/ContactPage.jsx";
import ProfilePage from "./views/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <div className="mt-3 w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
