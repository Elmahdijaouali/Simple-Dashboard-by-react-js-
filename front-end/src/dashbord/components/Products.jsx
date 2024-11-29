import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer'
import imgDefaultProduct from "../../img/defaultImageProduct.png";
import productsJSON from '../../data-test/products.json'

export default function Products() {
   let arrProducts = JSON.parse(JSON.stringify(productsJSON.products))
   const [products , setProducts] = useState(arrProducts)
   const [inputValue , setInputValue] = useState('')
   const handleChange = (e)=> {
     setInputValue(e.target.value)
    
   }
   useEffect(()=>{
    if(inputValue === ""){
      setProducts(arrProducts)
    }else{
      setProducts(products.filter(product => product.product_name.toLowerCase().includes(inputValue.toLowerCase()) ))
    }
   } , [inputValue])
  return (
    <div className='w-5/6  bg-subDark h-screen overflow-y-scroll'>
      <HeaderDashboard />
     <h1 className='font-bold lg:text-4xl text-2xl lg:ml-14  ml-4 mt-5'>All products</h1>
     <form  className='lg:w-10/12 w-full pl-4 lg:pl-0 mx-auto lg:mx-14 mt-5'>
        <input type="text"  value={inputValue} onChange={(e)=> handleChange(e)}  className='px-4 py-2 outline-none w-auto min-w-72 bg-dark rounded-l text-lg ' placeholder='Enter name product search'/>
        <select name="" className='px-4 py-2 mt-5 lg:mt-0 text-lg bg-dark outline-none' id="">
            <option value="" className='text-lg'  >All categories</option>

        </select>
      
     </form>

     <div className=" w-[93%] my-2 lg:my-0 h-fit   bg-dark lg:mx-auto  mx-3  lg:rounded-lg overflow-auto  lg:mt-5 lg:mb-[10vh]">
        <table className="min-w-full lg:rounded-lg ">
          <thead>
            <tr className="border-b-2 py-5 rounded-t bg-gray-800">
              <th className="text-start first-letter:uppercase min-w-1/12 py-5 pl-5">image</th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Product name
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Category
              </th>

              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Countity
              </th>

              <th className="text-start first-letter:uppercase min-w-1/12 py-5  pl-5">
                Price
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Created at
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                 Updated at
              </th>
            </tr>
          </thead>

          <tbody>
          {products.map((product, index) => {
              return (
                <tr key={index} className="border-t hover:bg-gray-600  hover:text-light">
                  <th className="pl-6">
                    {" "}
                    <img
                      src={imgDefaultProduct}
                      className="w-10 h-10 rounded-md "
                      alt=""
                    />{" "}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {product.product_name}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {product.category}
                  </th>

                  <th className="text-start py-5  font-normal px-3">
                    {product.price}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {product.quantity}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {product.create_at}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {product.updated_at}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}
