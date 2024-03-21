
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import AddressModal from "./pages/AddressModal";

function router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/modal" element={<AddressModal />} />
      </Routes>
    </>
  );
}

export default router;
