import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Main, ItemListContainer, ItemDetailContainer, Cart, Checkout, Footer } from "./components";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </Main>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
};

export default App;