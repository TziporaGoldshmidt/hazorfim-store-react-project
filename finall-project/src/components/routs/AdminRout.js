import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import OrderList from "../../features/order/OrderList";
import ProductList from "../../features/product/ProductList";
import UsersList from "../../features/user/UsersList";
import AddProduct from"../../features/product/AddProduct";
import UpdateProduct from "../../features/product/UpdateProduct"
import MainRoute from "./MainRoute";




export default function AdminRout(){
return<>
 <MainRoute></MainRoute>
<Routes>  
<Route path='/addProducts' element={<AddProduct></AddProduct>}></Route>
<Route path='/updateProduct/:index' element={<UpdateProduct></UpdateProduct>}></Route>
<Route path='/users' element={<UsersList></UsersList>}></Route>
</Routes>
</>
}