import logo from './logo.svg';
import './App.css';
import ProductList from './features/product/ProductList';
import UserList from './features/user/UsersList';
import OrderList from './features/order/OrderList';
import MainRout from './components/routs/AdminRout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Login from './components/Login';
import AdminNav from './components/navs/AdminNav';
import SignUp from './components/SignUp';
import CustomerNav from './components/navs/CustomerNav';
import { BrowserRouter } from 'react-router-dom';
import StartNav from './components/navs/StartNav';




function App() {
const currentUser=useSelector(x=>x.user.currentUser)
const status=useSelector(x=>x.user.status)

  return (
    
    <BrowserRouter>
   
    {(status!="admin"&&currentUser==null)? <StartNav></StartNav>:status=="admin"?<AdminNav></AdminNav>:<CustomerNav></CustomerNav>}
    {/* {(status=="none"&&currentUser==null)?<Login></Login>:status=="admin"?<AdminNav></AdminNav>:currentUser==null?<SignUp></SignUp>:<CustomerNav></CustomerNav>} */}
    </BrowserRouter>
  )
    
}

export default App;
