import { useNavigate } from "react-router"
export default function OneProduct({oneProduct}){
   const nav=useNavigate()

    return<div>
    <p>productName: {oneProduct.name}</p>
    <p>price: {oneProduct.price}</p>
    <button onClick={()=>{ nav('/prodactDetails/'+oneProduct.id)}}>show details</button>
    </div>
}
