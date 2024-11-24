import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

import { addNewProduct, fetchAllProducts, updateOneProduct } from "./productSlice"
import { useEffect } from "react"

import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import "../../components/styleShit.css"


export default function AddProduct() {

    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const nav = useNavigate();
    const products = useSelector(x => x.product.arrProduct)

    useEffect(() => {
        fetchAllProduct()
    }, [])


    const fetchAllProduct = async () => {
        dis(fetchAllProducts())
    }


    //    const user=useSelector(x=>x.user.currentUser)

    const submit = async (data) => {
        let type;
        switch (data.category) {
            case "פמוטים":
                type = 'p'
                break
            case "גביעים":
                type = "g"
                break
            case "חנוכיות":
                type = "c"
        }

        const typeArr = products.filter(item => item.category == data.category);
        console.log(products)
        console.log(data.category)
        console.log("typeArr: ", typeArr)
        debugger
        const id = typeArr.length + 1
        console.log("id for img:", id)
        debugger
        data.img = "/pictures/" + type + id + ".jpg"
        await dis(addNewProduct(data))
        nav("/products")
    }
    const [size, setSize] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [motag, setMotag] = React.useState('');

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
        <h1 align="center" style={{gridColumn:"2/3",gridRow:"1/2"}}>הוסף מוצר</h1>
            <fieldset className="warp">
                <legend>פרטי מוצר</legend>

                <form onSubmit={handleSubmit(submit)} >
                    <box sx={{ display: "flex", flexWrap: 'wrap', position: "relative" }} >
                        <div  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "8px", position: "absolute", right: "3ch" ,top:"2ch"}}>

                            <TextField id="outlined-basic" label="שם מוצר" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }}   {...register("name", { required: true })} />

                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                                <InputLabel id="demo-simple-select-label">גודל</InputLabel>
                                <Select
                                    {...register("size", { required: true })}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="גודל"
                                    onChange={changeSize}
                                    color="secondary"
                                >
                                    <MenuItem value={"small"}>small</MenuItem>
                                    <MenuItem value={"medium"}>medium</MenuItem>
                                    <MenuItem value={"large"}>larg</MenuItem>
                                </Select>
                            </FormControl>


                            <TextField id="outlined-basic" label="מחיר" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }} {...register("price", { required: true })} />

                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary">
                                <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
                                <Select
                                    {...register("category", { required: true })}
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
                                </Select>
                            </FormControl>

                            <TextField id="outlined-basic" label="גובה" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }} {...register("height", { required: true })} />

                            <FormControl sx={{ m: 1, width: '25ch' }} color="secondary" >
                                <InputLabel id="demo-simple-select-label">מותג</InputLabel>
                                <Select
                                    {...register("motag", { required: true })}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={motag}
                                    label="מותג"
                                    onChange={changeMotag}
                                    color="secondary"
                                >
                                    <MenuItem value={"bandini"}>bandini</MenuItem>
                                    <MenuItem value={"hazorfim"}>hazorfim</MenuItem>
                                    <MenuItem value={"hzorfim_legacy"}>hzorfim_legacy</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField type="number" id="outlined-basic" label="כמות במלאי" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }}  {...register("qty", { required: true, })} />

                            <Button type="submit" variant="contained" style={{ gridColumn: "1/3", backgroundColor: "rebeccapurple" }}>הוסף מוצר</Button>

                        </div>
                    </box>
                </form>
            </fieldset>

        </div>
        {/* <form onSubmit={handleSubmit(submit)}>
        <input {...register("name",{required:true})} placeholder="name"></input>
        <input {...register("size",{required:true})} placeholder="size"></input>
        <input {...register("category",{required:true})} placeholder="category"></input>
        <input {...register("price",{required:true})} placeholder="price"></input>
        <input {...register("height",{required:true})} placeholder="height"></input>
        <input {...register("motag",{required:true})} placeholder="motag"></input>
        <input {...register("img",{required:true})} placeholder="img"></input>
        <input {...register("qty",{required:true})} placeholder="qty"></input>
        <input type="submit" value="add product"></input>
    </form> */}
    </>


}