import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';


import OrderDetails from './OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneOrder } from './orderSlice';


export default function OneOrder({ row }) {

    const dispatch=useDispatch()
    const status=useSelector(x=>x.user.status)


    const [open, setOpen] = React.useState(false);
    const today=new Date()
    const delOrder = (id) => {
        debugger
        dispatch(deleteOneOrder(id))
    }



    return (
<React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"  align="center">
                    {row.orderDate}
                </TableCell>
                <TableCell align="center">{row.dueDate}</TableCell>
                <TableCell  align="center">{(row.cart).reduce((sum, item) => 
                sum + item.count * item.price, 0)}</TableCell>
               {status=="admin"&&new Date(row.dueDate)>today&& <TableCell  align="center"><Button align="center" variant="contained"  color="secondary" sx={{backgroundColor:"rebeccapurple"}} onClick={()=>{delOrder(row.id)}}>בטל הזמנה</Button></TableCell>}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" align='right'>
                                פירוט קניה
                </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                    <TableCell align="center"><b>שם מוצר </b></TableCell>
                                        <TableCell align="center"><b>מחיר ליחידה</b></TableCell>
                                        <TableCell align="center"><b>כמות</b></TableCell>
                                        <TableCell  align="center"><b> סה"כ</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <OrderDetails orderId={row.id}></OrderDetails>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );

        
}