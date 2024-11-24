import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderList from "../../features/order/OrderList";
import ProductList from "../../features/product/ProductList";
import Cart from "../customer/Cart";
import MainRoute from "./MainRoute";

export default function CustomerRoute(){
    return<>
    <MainRoute></MainRoute>
    <Routes>
        <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    </>
   
}