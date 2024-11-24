import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { useForm } from "react-hook-form"
import { updateOneProduct } from "./productSlice"


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function UpdateProduct() {

    const index = useParams().index
    const allProducts = useSelector(x => x.product.arrProduct)
    const product = allProducts[index]
    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const nav = useNavigate()

    const submit = async (data) => {
        console.log("data: ", data)
        debugger
        const newP = { ...data, id: product.id, img: product.img }
        console.log("newp: ", newP)
        debugger
        await dis(updateOneProduct({ product: { ...newP }, id: product.id }))
        debugger
        nav("/products")
    }
    const [size, setSize] = React.useState(product.size);
    const [category, setCategory] = React.useState(product.category);
    const [motag, setMotag] = React.useState(product.motag);

    const changeSize = (event) => {
        setSize(event.target.value);
    };
    const changeCategory = (event) => {
        setCategory(event.target.value);
    };
    const changeMotag = (event) => {
        setMotag(event.target.value);
    };


    return <>
       
        <div style={{ display: 'grid', gridTemplateColumns: "1fr auto 1fr", gridTemplateRows: "1fr auto 1fr", height: "80vh" }}>
           <h1 align="center" style={{gridColumn:"2/3",gridRow:"1/2"}}>עדכן מוצר</h1>
            <fieldset className="warp">
                <legend>פרטי מוצר</legend>
                <form onSubmit={handleSubmit(submit)}  >
                    <Box sx={{ display: "flex", flexWrap: 'wrap', position: "relative" }} >
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "8px", position: "absolute", right: "3ch",top:"2ch" }}>
                            <TextField
                                id="name"
                                label="שם מוצר"
                                defaultValue={product.name}
                                {...register("name", { required: true })}
                                color="secondary"
                                variant="outlined"
                                sx={{ m: 1, width: '25ch' }}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                                <InputLabel id="demo-simple-select-label">גודל</InputLabel>
                                <Select
                                    {...register("size", { required: true })}
                                    labelId="size-label"
                                    id="size"
                                    value={size}
                                    label="גודל"
                                    onChange={changeSize}
                                    color="secondary"
                                >
                                    <MenuItem value={"קטן"}>קטן</MenuItem>
                                    <MenuItem value={"בינוני"}>בינוני</MenuItem>
                                    <MenuItem value={"גדול"}>גדול</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="price"
                                label="מחיר"
                                defaultValue={product.price}
                                {...register("price", { required: true })}
                                color="secondary"
                                variant="outlined"
                                sx={{ m: 1, width: '25ch' }}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                                <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
                                <Select
                                    {...register("category", { required: true })}
                                    labelId="category-label"
                                    id="category"
                                    value={category}
                                    label="קטגוריה"
                                    onChange={changeCategory}
                                    color="secondary"
                                >
                                    <MenuItem value={"פמוטים"}>פמוטים</MenuItem>
                                    <MenuItem value={"גביעים"}>גביעים</MenuItem>
                                    <MenuItem value={"חנוכיות"}>חנוכיות</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="height"
                                label="גובה"
                                defaultValue={product.height}
                                {...register("height", { required: true })}
                                color="secondary"
                                variant="outlined"
                                sx={{ m: 1, width: '25ch' }}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                                <InputLabel id="demo-simple-select-label">מותג</InputLabel>
                                <Select
                                    {...register("motag", { required: true })}
                                    labelId="motag-label"
                                    id="motag"
                                    value={motag}
                                    label="מותג"
                                    onChange={changeMotag}
                                    color="secondary"
                                >
                                    <MenuItem value={"bandini"}>bandini</MenuItem>
                                    <MenuItem value={"hazorfim"}>hazorfim</MenuItem>
                                    <MenuItem value={"hazorfim_legacy"}>hazorfim_legacy</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="qty"
                                label="כמות במלאי"
                                defaultValue={product.qty}
                                {...register("qty", { required: true })}
                                color="secondary"
                                variant="outlined"
                                sx={{ m: 1, width: '25ch' }}
                            />
                            <Button type="submit" variant="contained" style={{ gridColumn: "1/3", backgroundColor: "rebeccapurple" }}>עדכן מוצר</Button>

                        </div>
                    </Box>
                </form>
            </fieldset>
            
        </div>

    </>
}