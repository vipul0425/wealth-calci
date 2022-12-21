import "./App.css";
import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./products";
import Landing from "./landingComp";
import cartContext from "./cartContext";
import { useState } from "react";
import Summary from "./Summary";
import Compare from "./compare";
import CustomContext from "./CustomContext";
import EstimateContext from "./estimateContext";
import CurrContext from "./currContext";


function App() {
  const cart = useState({});
  const customCart = useState([]);
  const curr = useState({name: "USD", value: 1});
  const Estimate = useState({val:0, estimateSet: false});
  return (
    <CurrContext.Provider value={curr}>
    <cartContext.Provider value={cart}>
      <CustomContext.Provider value={customCart}>
        <EstimateContext.Provider value={Estimate}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/compare" element={<Compare />} />
            </Routes>
          </BrowserRouter>
        </EstimateContext.Provider>
      </CustomContext.Provider>
    </cartContext.Provider>
    </CurrContext.Provider>
  );
}

export default App;
