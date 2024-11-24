import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneProduct from "./OneProduct";
import ProductDetails from "./ProductDetails";
import { fetchAllProducts } from "./productSlice";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';



export default function ProductList() {

    const arrProducts = useSelector(x => x.product.arrProduct)
    const dispatch = useDispatch()
    const nav = useNavigate()


    useEffect(() => {
        fetchAllProduct()
    }, [])

    const fetchAllProduct = async () => {
        dispatch(fetchAllProducts())
    }
    const [category, setCategory] = React.useState('all');
    const [motag, setMotag] = React.useState('all');
    const [sort, setSort] = React.useState('low');

    const changeCategory = (event) => {
        setCategory(event.target.value);
    };
    const changeMotag = (event) => {
        setMotag(event.target.value);
    };
    const changeSort = (event) => {
        setSort(event.target.value);
        // if(event.target.value==="low"){
        //    arrProducts= [...arrProducts].sort((a,b)=>(a.price>b.price)?1:-1)
        // }
        // else{
        //     arrProducts= [...arrProducts].sort((a,b)=>(a.price<b.price)?1:-1)
        // }
    };

    return (
        <div >
            <div style={{ direction: "rtl", position: "relative", alignItems: "center" }}>
                <div style={{ right: 0, display: "inline-block" }}>
                    <p style={{ display: "inline-block" }}>סנן לפי:</p>
                    <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                        <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="קטגוריה"
                            onChange={changeCategory}
                            color="secondary"
                        >
                            <MenuItem value={"פמוטים"}>פמוטים</MenuItem>
                            <MenuItem value={"גביעים"}>גביעים</MenuItem>
                            <MenuItem value={"חנוכיות"}>חנוכיות</MenuItem>
                            <MenuItem value={"all"}>כל הקטגוריות</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }}  color="secondary">
                        <InputLabel id="demo-simple-select-label">מותג</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={motag}
                            label="מותג"
                            onChange={changeMotag}
                            color="secondary"
                        >
                            <MenuItem value={"hazorfim"}>hazorfim</MenuItem>
                            <MenuItem value={"hazorfim_legacy"}>hazorfim_legacy</MenuItem>
                            <MenuItem value={"bandini"}>bandini</MenuItem>
                            <MenuItem value={"all"}>כל המותגים</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{position:"absolute", left: 0 , display: "inline-block"}}  color="secondary">
                    <p style={{ display: "inline-block" }}>מיין לפי:</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={sort}
                            onChange={changeSort}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            color="secondary"
                        >
                            <MenuItem value={"low"}>מחיר מהנמוך לגבוה</MenuItem>
                            <MenuItem value={"high"}>מחיר מהגבוה לנמוך</MenuItem>
                        </Select>
                    </FormControl>

                </div>
            </div>
            <Divider variant="middle" style={{marginTop:"3vh"}} />
            <Box sx={{ flexGrow: 1, marginTop: "5vh" }}>
                <Grid container spacing={1}>
                    {arrProducts && arrProducts.map((item) => ((category === "all" || category === item.category) && (motag === "all" || motag === item.motag)) &&
                        <Grid item xs={3} >
                            <Card sx={{ maxWidth: 345, direction: "rtl", marginBottom: 4 }} onClick={() => { nav('/prodactDetails/' + item.id) }}  >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={item.img}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div" >
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" >
                                            <h1><b><p>{item.price} ש"ח</p></b></h1>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}

                </Grid>
            </Box>



        </div >
    )
}

