import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserDetails from "./UserDetails"
import { fetchAllUsers } from "./userSlice"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function UsersList() {

    const arrUser = useSelector(x => x.user.arrUsers)

    const dispatch = useDispatch()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        dispatch(fetchAllUsers())
    }

   

    return (<>
        <h1 align="center">משתמשים</h1>
        <TableContainer component={Paper} sx={{ maxHeight:"80vh" }}>
            <Table sx={{ minWidth: 650 ,direction:"rtl"}}  stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow >
                        <TableCell align="right" ><b>קוד</b></TableCell>
                        <TableCell align="right" ><b>שם</b></TableCell>
                        <TableCell align="right"><b>ת.ז.</b></TableCell>
                        <TableCell align="right"><b>סיסמה</b></TableCell>
                        <TableCell align="right"><b>טלפון</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arrUser && arrUser.map(item => <UserDetails oneUser={item}></UserDetails>)}
                </TableBody>
            </Table>
        </TableContainer>
        </>

        // <div>
        //     <h1>userList</h1>
        //     <ul>               
        //         {arrUser&&arrUser.map(item=><li key={item.id}><UserDetails oneUser={item}></UserDetails></li>)}
        //     </ul>
        // </div>
    )
}