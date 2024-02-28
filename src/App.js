import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import SlidingImage from "./Components/SlidingImage";
import OurDelivery from "./Components/OurDelivery";
import Footer from "./Components/Footer";
import CategoryProduct from "./Components/CategoryProduct";
import FoodCategory from "./Components/FoodCategory";
import Ourfood from "./Components/OurFood";
import OurFood from "./Components/OurFood";
import MainFood from "./Components/MainFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurFood" element={<MainFood />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
