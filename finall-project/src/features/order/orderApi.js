import axios from 'axios'

const baseUrl="http://localhost:4000/order"

export const fetchOrders=async()=>{
    const response=await axios.get(baseUrl)
    return response.data
}

export const addOrder=async(newOrder)=>{
    const response=await axios.post(baseUrl,newOrder)
    return response.data
}

export const deleteOrder=async(id)=>{
    const response=await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

