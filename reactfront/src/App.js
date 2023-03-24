import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrderList from "./Components/Order/OrderList";
import Footer from "./Components/UI/Footer";
import Navbar from "./Components/UI/Navbar";

import PizzaList from "./Components/Pizza/PizzaList";
import Home from "./Components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orderpizza" element={<PizzaList />} />
                    <Route path="/orders" element={<OrderList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
