import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addNewOrder, addToCart, deleteFromCart, reduceFromCart, deleteAllCart } from "../../features/order/orderSlice"
import { updateOneProduct } from "../../features/product/productSlice"

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



export default function Cart() {
    const cart = useSelector(x => x.order.cart)
    const user = useSelector(x => x.user.currentUser)
    const products = useSelector(x => x.product.arrProduct)
    const nav = useNavigate()
    const dis = useDispatch()


    const order = () => {
        for (let i = 0; i < cart.length; i++) {
            let index = products.findIndex(x => x.id == cart[i].id)
            let p = products[index]
            if (parseInt(p.qty) < parseInt(cart[i].count)) {
                alert("you cannt buy " + cart[i].count + " " + p.name + " the mount in stock is " + p.qty)
                return
            }
        }

        let date = new Date()
        let order = { userId: user.id, orderDate: date, dueDate: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000), cart: cart }
        dis(addNewOrder(order))
        for (let i = 0; i < cart.length; i++) {
            let index = products.findIndex(x => x.id == cart[i].id)
            let p = products[index]
            dis(updateOneProduct({ product: { ...p, qty: parseInt(p.qty) - parseInt(cart[i].count) }, id: p.id }))
        }
        dis(deleteAllCart())
        nav('/products')

    }
    return <>
        <h1 align="center">העגלה שלי</h1>
        {cart.length == 0 ?
            <div sx={{ direction: "rtl" }}>
                <p align="center" ><b>😊...אין מוצרים בעגלה, התחל למלא</b></p>
            </div> :
            <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3} sx={{ height: "70vh", borderRadius: 2, position: "relative", top: "2vh", direction: "rtl" }}>
                    <h1 align="center">סיכום הזמנה</h1>
                    <p align="center"><b>שים לב!</b></p>
                    <p align="center">ההזמנות מגיעות לחנות תוך שבוע ממועד ההזמנה</p>
                    <p align="center">עקב המצב הבטחוני אין שירותי משלוחים כרגע</p>
                    <p align="center">עמכם הסליחה:)</p>

                    <p align="center" style={{ fontSize: "60px", fontFamily: "Dubai Light" }}>~-~-~-~</p>


                    <div sx={{ position: "absolute", buttom: 0 }}>
                        <h2 align="center"><p><b>סה"כ לתשלום: </b>{(cart).reduce((sum, item) => sum + item.count * item.price, 0)} ש"ח</p></h2>
                        {cart.length > 0 && <Button align="center" variant="contained"  color="secondary" sx={{ width: "100%", marginRight: 1, backgroundColor: "rebeccapurple" }} onClick={order}>סיים הזמנה</Button>}
                    </div>
                </Grid>
                <Grid container xs={8}>
                    <Grid item xs={12} margin={2} >
                        {cart.map(item => (

                            <Card sx={{ display: 'flex', width: "60vw", height: "25vh", position: "relative" }}>
                                {console.log("item", item.img)}

                                <Box sx={{ display: 'flex', flexDirection: 'column', direction: "rtl", width: "40vw", backgroundColor: "lightgrey" }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5" align="center">
                                            <p><b>{products[products.findIndex(x => x.id == item.id)].name}</b></p>
                                        </Typography>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={4} align="center">
                                                    <label ><b>מחיר פריט</b></label> <p>{item.price} ש"ח </p>
                                                </Grid>
                                                <Grid item xs={4} align="center">
                                                    <label><b>כמות</b></label>
                                                    <Grid container >
                                                        <Grid item xs={4}> <button onClick={() => { dis(addToCart({ id: item.id, count: 1 })) }}>+</button></Grid>
                                                        <Grid item xs={4}> <div sx={{ borderRadius: 50, }}>{item.count}</div></Grid>
                                                        <Grid item xs={4}><button onClick={() => { dis(reduceFromCart(item.id)) }}>-</button></Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4} align="center">
                                                    <label><b>סה"כ</b></label> <div> {item.count * item.price} ש"ח</div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                </Box>
                                {console.log("item", item.img)}
                                <Box sx={{ width: "20vw", position: "absolute", right: 0 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: "25vh", width: "auto", top: 0, margin: "auto" }}
                                        image={products[products.findIndex(x=>x.id==item.id)].img}
                                    />
                                </Box>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        }

    </>
}