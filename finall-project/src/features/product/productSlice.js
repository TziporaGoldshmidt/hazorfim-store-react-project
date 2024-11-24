import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "./productApi"

const initialState={
    arrProduct:[]
}

export const fetchAllProducts=createAsyncThunk(
    'product/fetchAllProduct',
    async(thunkAPI)=>{
        const res=await fetchProducts()
        console.log(res)
        return res
    }
)

export const addNewProduct=createAsyncThunk(
    'product/addNewProduct',
    async(product,thunkAPI)=>{
        const res=await addProduct(product)
        return res
    }
)

export const deleteOneProduct=createAsyncThunk(
    'product/deleteOneProduct',
    async({id},thunkAPI)=>{
        const res=await deleteProduct(id)
        return res
    }
)

export const updateOneProduct=createAsyncThunk(
    'product/updateOneProduct',
    async({product,id},thunkAPI)=>{
        console.log("id from slice:",id)
        debugger
        const res=await updateProduct(product,id)
        return res
    }
)

export const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllProducts.fulfilled,(state,{payload})=>{
            state.arrProduct=payload
        })
        .addCase(addNewProduct.fulfilled,(state,{payload})=>{
            state.arrProduct.push(payload)
        })
        .addCase(deleteOneProduct.fulfilled,(state,{payload})=>{
            // console.log("paylod from extra:", payload)
            // let index=state.arrProduct.findIndex(x=>x.id==payload.id)
            // console.log("index from extra:",index)
            // debugger
            // state.arrProduct.splice(index,1)
            state.arrProduct=state.arrProduct.filter(x=>x.id!=payload)
        })
        .addCase(updateOneProduct.fulfilled,(state,{payload})=>{
            state.arrProduct=[...state.arrProduct.filter(x=>x.id<payload.id),payload,...state.arrProduct.filter(x=>x.id>payload.id)]
        })
    }
})


export default productSlice.reducer
