import { Routes,Route } from "react-router-dom"
import Product from "../Components/Product"
import Products from "../Components/Products"
export default function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path="products" element={<Products/>}/>
            <Route  path="product/:productId"  element={<Product />}  />
        </Routes>
        </>
    )
}