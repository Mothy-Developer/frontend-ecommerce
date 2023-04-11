import LoginPage from "./component/page/LoginPage";
import HomePage from "./component/page/HomePage"
import Navbar from "./component/Navbar";
import DetailProduct from "./component/page/DetailProductPage";
import Cart from "./component/page/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemPage from "./component/page/AddItemPage";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" Component={LoginPage}></Route>
          <Route path="/home" Component={HomePage}></Route>
          <Route path="/detail" Component={DetailProduct}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/add" Component={AddItemPage}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
