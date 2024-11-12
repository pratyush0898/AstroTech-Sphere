import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import ReadBlog from "./pages/ReadBlog/ReadBlog.jsx";
import Notfound from "./pages/Notfound/Notfound.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="us" element={<Homepage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="us/about" element={<About />} />
        <Route path="us/contact" element={<Contact />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="blog/:id" element={<ReadBlog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
