import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { addToCart } from "../order/orderSlice";
import { deleteOneProduct } from "./productSlice";



import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



export default function ProductDetails() {
    const { id } = useParams()
    const productArr = useSelector(x => x.product.arrProduct)
    const index = productArr.findIndex(x => x.id == id)
    const oneProduct = productArr[index]
    const currentStatus = useSelector(x => x.user.status)
    const nav = useNavigate()
    const dis = useDispatch()
    let count = 1

    const delProd = async () => {
        dis(deleteOneProduct({ id: id }))
        nav("/products")
    }

    const add = () => {
        console.log("count:", count)
        dis(addToCart({ id: id, count: count, price: oneProduct.price,productName:oneProduct.name }))
        nav('/products')
    }
    return (
        <Card sx={{ display: 'flex', height: "85vh", width: "70%", margin: "auto", position: "relative" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "40%", height: "85vh", position: "absolute", left: "2.5%", margin: "auto", direction: "rtl" }}>
                <CardContent sx={{ flex: '1 0 auto', }}>
                    <Typography component="div" variant="h5">
                        <h1><b>{oneProduct.name}</b></h1>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <p sx={{}}> <h1>{oneProduct.price} ש"ח</h1></p>
                        <p><b>גודל: </b>{oneProduct.size}</p>
                        <p><b>גובה: </b> {oneProduct.height}</p>
                        <p><b>מותג: </b> {oneProduct.motag}</p>
                        <p><b>כמות במלאי: </b> {oneProduct.qty}</p>
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, marginBottom: "10%" }}>
                    {currentStatus == "admin" ?
                        <>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2} direction="column">
                                    <Button variant="outlined"  color="secondary" sx={{ width: "100%" }} onClick={() => { nav("/updateProduct/" + index) }}>עדכן מוצר</Button>
                                    <Button variant="outlined"  color="secondary" onClick={() => { delProd() }}>מחק מוצר</Button>
                                </Stack>
                            </Box>
                        </> :
                        <>
                            <Box sx={{width:"100%"}}>
                                <Stack spacing={2} direction="column"  >

                                   <label >כמות לקניה:</label>
                                    <input type="number" min="1"  defaultValue={1} onChange={(e) => { count = e.target.value }}></input>

                                    <Button variant="outlined"  color="secondary" onClick={() => add()}>הוסף לסל קניות</Button>                                
                                    </Stack>
                            </Box>


                        </>}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "55%", height: "85vh", position: "absolute", right: 0 }}
                image={oneProduct.img}

            />
        </Card>
        
    )
}