import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Product from "./components/Product";
// import Home from './components/Home';
// import FashionPage from "./Pages/FashionPage";
function App() {
  return (
    <>
    {/* // <BrowserRouter> */}
    <Navbar /> 
    <Product />
    </>
   /* //  <Routes>
  //       <Route path="/" element={<Home />}>
  //         <Route index element={<FashionPage />} />
         
  //       </Route>
  //       </Routes>
  //  </BrowserRouter> */
  );
}

export default App;
