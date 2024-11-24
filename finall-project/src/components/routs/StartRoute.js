import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import About from "../About";
import Open from "../Open";


export default function StartRoute() {
    return <>
        <Routes>
        <Route path='/' element={<Open></Open>}></Route>
            <Route path='/signin' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </>

}