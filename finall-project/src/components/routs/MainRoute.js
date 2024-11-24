import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import OrderList from "../../features/order/OrderList";
import ProductList from "../../features/product/ProductList";
import UsersList from "../../features/user/UsersList";
import AddProduct from"../../features/product/AddProduct";
import UpdateProduct from "../../features/product/UpdateProduct"
import OrderDetails from "../../features/order/OrderDetails";
import ProductDetails from "../../features/product/ProductDetails";




export default function MainRoute(){
return<>
<Routes>
<Route path='/' element={<ProductList></ProductList>}></Route>
<Route path='/products' element={<ProductList></ProductList>}></Route>
<Route path='/orders' element={<OrderList></OrderList>}></Route>
<Route path='/orderDetails/:index' element={<OrderDetails></OrderDetails>}></Route>
<Route path='/orderDetails' element={<OrderDetails></OrderDetails>}></Route>
<Route path='prodactDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
</Routes>
</>
}