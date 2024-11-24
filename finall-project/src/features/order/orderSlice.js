import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { fetchOrders,addOrder, deleteOrder } from "./orderApi"



const initialState={

    arrOrders:[],
    cart:[]  
}

export const fetchAllOrders=createAsyncThunk(
    "order/fetchAllOrders",
    async(thunkAPI)=>{
        const res=await fetchOrders()
        return res
    }  
)

export const addNewOrder=createAsyncThunk(
    'order/addNewOrder',
    async(order,thunkAPI)=>{
        const res=await addOrder(order)
        return res
    }
)

export const deleteOneOrder=createAsyncThunk(
    'order/deleteOneOrder',
    async(id,thunkAPI)=>{
        const res=await deleteOrder(id)
        return res
    }
)





export const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          let {id,count}=action.payload
          let index=state.cart.findIndex(x=>x.id==id)
          if(index==-1)
          {
              state.cart=[...state.cart,action.payload]
          }
          else{
              state.cart[index].count=parseFloat(state.cart[index].count)+parseFloat(count)
          }   
          console.log("cart from slice:",state.cart)      
        },
        deleteFromCart:(state,action)=>{
           let id=action.payload
           state.cart=state.cart.filter(x=>x.id!=id)
        },
        reduceFromCart:(state,action)=>{
           let id=action.payload
           let index=state.cart.findIndex(x=>x.id==id)
           if(state.cart[index].count===1)
                state.cart=state.cart.filter(x=>x.id!=id)
            else
                state.cart[index].count=parseFloat(state.cart[index].count)-1
        },
        deleteAllCart:(state,action)=>{
            state.cart=[]
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllOrders.fulfilled,(state,{payload})=>{
            state.arrOrders=payload
        })
        .addCase(addNewOrder.fulfilled,(state,{payload})=>{
            state.arrOrders.push(payload)
        }) 
        .addCase(deleteOneOrder.fulfilled,(state,{payload})=>{
            state.arrOrders=state.arrOrders.filter(x=>x.id!=payload)
        })       
    }
})


export default orderSlice.reducer
export const {addToCart,deleteFromCart,reduceFromCart,deleteAllCart}=orderSlice.actions




