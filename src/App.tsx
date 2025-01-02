import "./App.css";
import Product from "../src/Apifetch/Prduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/Productdetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />{" "}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
