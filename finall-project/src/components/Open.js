import { Grid } from "@mui/material";

export default function Open(){
    return<>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",height:"60vh"}}>
         <img src='/pictures/p1.jpg' style={{height:"60vh"}}></img>
        
            <img src='/pictures/c1.jpg' style={{height:"60vh"}}></img>
        
            <img src='/pictures/g1.jpg' style={{height:"60vh"}}></img>
    </div>
           
       
    <div align="center">
    <img src="/pictures/logo.svg"  style={{height:"25vh"}}></img></div>
    </>
}