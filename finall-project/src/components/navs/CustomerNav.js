import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAllCart } from "../../features/order/orderSlice";
import { logOut } from "../../features/user/userSlice";
import CustomerRoute from "../routs/CustomerRoute";

import "../styleShit.css"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function AdminNav(){
    const dis=useDispatch()
    const nav=useNavigate()

    const exit=()=>{
        dis(deleteAllCart())
        nav("/")
        dis(logOut())
    }

    const product=()=>{
        nav("/products")
    }
    const orders=()=>{
        nav('/orders')
    }
    const cart=()=>{
        nav('/cart')
    }
    return <>
     <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'divider',marginBottom:8, direction:"rtl" }} >
          <AppBar position="fixed" sx={{backgroundColor:"rebeccapurple"}}>
            <Toolbar>
              <Button color="inherit" onClick={product} sx={{ margin:2}}>מוצרים</Button>
              <Button color="inherit" onClick={orders} sx={{ margin:2}}>הזמנות</Button>
              <Button color="inherit" onClick={cart} sx={{ margin:2}}>עגלה</Button>
              <Button color="inherit" onClick={exit}  sx={{position:'absolute', left: 0,marginLeft:5}}>יציאה</Button>
            </Toolbar>
          </AppBar>
        </Box>
    <CustomerRoute></CustomerRoute></>
}