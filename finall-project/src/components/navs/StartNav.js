import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from '../Login';
import SignUp from '../SignUp';
import { useDispatch } from 'react-redux';
import StartRoute from '../routs/StartRoute';

import "../styleShit.css"


export default function StartNav() {
    const dis = useDispatch()
    const nav = useNavigate()



    const signIn = () => {
        nav('/signin')
    }
    const signUp = () => {
        nav('/signup')
    }
    return <div style={{display:"grid",alignItems:"center",gridTemplateRows:"1fr 8fr"}}>
        <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'divider', marginBottom: 8, direction: "rtl" }} >
            <AppBar position="fixed" sx={{backgroundColor:"rebeccapurple"}} >
                <Toolbar>    
                    <Button color="inherit" onClick={signUp} sx={{ margin: 2 }}>sign up</Button>
                    <Button color="inherit" onClick={signIn} sx={{ margin: 2 }}>sign in</Button>
                </Toolbar>
            </AppBar>
        </Box>

       <StartRoute></StartRoute>
    </div>
}