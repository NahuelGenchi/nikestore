import { Navbar, ItemDetailContainer } from "./components";
import { ItemListContainer } from "./container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;