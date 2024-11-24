import { useSelector } from "react-redux";
import { useParams } from "react-router";
import OneProduct from "../product/OneProduct";
import ProductDetails from "../product/ProductDetails";

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function OrderDetails({ orderId }) {

    //const index = useParams().index
    const orders = useSelector(x => x.order.arrOrders)
    const index = orders.findIndex(x => x.id == orderId)
    const oneOrder = orders[index]
    return (
        <>
        {oneOrder.cart.map((item) => (
            <TableRow key={item.id}>
                 <TableCell align="center">{item.productName}</TableCell>
                <TableCell component="th" scope="row" align="center">
                {item.price}
                </TableCell >
                <TableCell align="center">{item.count}</TableCell>
                <TableCell align="center">{item.count * item.price}</TableCell>
               
            </TableRow> 
         ))} 
         </>
    )
    
}