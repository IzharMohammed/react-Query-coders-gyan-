import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery , useMutation } from '@tanstack/react-query';
function Product() {
    let {productId}= useParams()
    console.log(productId);

    const getProductById = async () =>{
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      console.log(response.data);
      return response.data;
    }
    
      const { isError,error, isLoading, data : product, fetchStatus  } = useQuery({
        queryKey : ["product"],
        queryFn :getProductById,
        refetchOnWindowFocus : true
      })

      const mutation= useMutation({
        mutationFn :async  (newProduct)=>{
      const response =await  axios.put(`https://dummyjson.com/products/${productId}`, newProduct);
      console.log("updated ", response.data);
      return response.data
        }
      })

if(mutation.isLoading){
  return <h1>Updating ...</h1>
}

if(mutation.isError){
  return <h1>Error while updating :  {mutation.error.message} </h1>
}

      if(isError){
        return <h1>Error : {error}</h1>
      }

      if(isLoading){
        return <h1>Loading ....</h1>
      }


  return (
    <div >
    {fetchStatus && <h1> status : {fetchStatus}</h1>}
    <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
           {/*  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customers also purchased
            </h2>
 */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                               
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                   
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                
            </div>
        </div>
            </div>
            <button onClick={()=>mutation.mutate({ title: 'izhar the cool Updated product' })}>Create product</button>

</div>
  )
}

export default Product;