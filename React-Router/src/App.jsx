import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import ProductMen from "./Pages/ProductMen";
import ProductWomen from "./Pages/ProductWomen";
import Course from "./Pages/Course";
import CourseDetails from "./Pages/CourseDetails";
import { ThemeContextData } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContextData);

  return (
    <div className={`h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<ProductMen />} />
        <Route path="/product/women" element={<ProductWomen />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;