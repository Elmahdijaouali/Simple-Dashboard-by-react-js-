import React, { useEffect, useState } from "react";
import dataJSON from "../../data-test/orders.json";
import imgDefaultProduct from "../../img/defaultImageProduct.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faPrint,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function TableOrders({inputValue}) {
  const arrOrders =JSON.parse(JSON.stringify(dataJSON)) ;
  const [orders , setOrders] = useState(arrOrders)
 
  

  
    useEffect(()=>{

    if(inputValue === ""){
      setOrders(arrOrders)
    }

    if(inputValue){
      
        setOrders(orders.filter(order => order.customer.toLowerCase().includes(inputValue.toLowerCase())  ||
         order.product_name.toLowerCase().includes(inputValue.toLowerCase()) ||
         order.category.toLowerCase().includes(inputValue.toLowerCase()) ||
         order.date.toLowerCase().includes(inputValue.toLowerCase()) ||
         order.status.toLowerCase().includes(inputValue.toLowerCase()) ||
         order.price.toLowerCase().includes(inputValue.toLowerCase()) 
        ))
      
    }
   } , [inputValue])

   
  return (
    <div className=" w-full my-2 lg:my-0 h-fit   bg-dark mx-3  lg:rounded-xl overflow-auto  ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-5 pt-5 pl-8 ">Orders</h1>
        <div className="mr-8">
          <FontAwesomeIcon
            className="text-xl mx-3 hover:cursor-pointer"
            icon={faMagnifyingGlass}
          />
          <FontAwesomeIcon
            className="text-xl mx-3  hover:cursor-pointer"
            icon={faArrowDownWideShort}
          />
          <FontAwesomeIcon
            className="text-xl mx-3  hover:cursor-pointer"
            icon={faPrint}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full lg:rounded-lg  ">
          <thead>
            <tr className="border-b-2 my-5 bg-gray-800">
              <th className="text-start first-letter:uppercase min-w-1/12 py-5"></th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5">
                Product name
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5">
                Category
              </th>

              <th className="text-start first-letter:uppercase min-w-2/12 py-5">
                Customer
              </th>
              <th className="text-start first-letter:uppercase min-w-1/12 py-5">
                Price
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5">
                Date
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => {
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
                    {item.product_name}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {item.category}
                  </th>

                  <th className="text-start py-5  font-normal px-3">
                    {item.customer}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {item.price}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {item.date}
                  </th>
                  <th className="text-start py-5  font-normal px-3">
                    {item.status}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
