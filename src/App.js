import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, ItemListContainer, ItemDetailContainer, Cart, Checkout, Footer } from "./components";
import CartProvider from "./context/CartContext";

function App() {
  console.log("Hello, World");

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
};

export default App;