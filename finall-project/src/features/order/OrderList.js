import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneOrder, fetchAllOrders } from "./orderSlice";
import OneOrder from "./OneOrder"
import { useNavigate } from "react-router";


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function OrderList() {

    const today = new Date()

    const arrOrder = useSelector(x => x.order.arrOrders)
    const currentUser = useSelector(x => x.user.currentUser)
    const status = useSelector(x => x.user.status)

    const currentStatus = useSelector(x => x.user.status)
    const nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        fetchAllOrder()
    }, [])

    const fetchAllOrder = async () => {
        dispatch(fetchAllOrders())
    }





    return (
        <>
            <h1 align="center">הזמנות</h1>
            <TableContainer component={Paper} sx={{ direction: "rtl" }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center"><b>תאריך הזמנה</b></TableCell>
                            <TableCell align="center"><b>תאריך הספקה</b></TableCell>
                            <TableCell align="center"><b>לתשלום</b></TableCell>
                            <TableCell align="center">   </TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arrOrder && arrOrder.map((item) => (currentStatus == "admin" || currentUser.id == item.userId) && <>
                            <OneOrder key={item.id} row={item} />
                        </>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}


