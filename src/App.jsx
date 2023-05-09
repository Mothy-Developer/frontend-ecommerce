import LoginPage from "./component/page/LoginPage";
import HomePage from "./component/page/HomePage"
import DetailProduct from "./component/page/DetailProductPage";
import Cart from "./component/page/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemPage from "./component/page/AddItemPage";
import RegisterPage from "./component/page/RegisterPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/register" Component={RegisterPage}></Route>
        <Route path="/home" Component={HomePage}></Route>
        <Route path="/detail" Component={DetailProduct}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/add" Component={AddItemPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}
