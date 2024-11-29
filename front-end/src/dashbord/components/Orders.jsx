import React, { useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import TableOrders from './TableOrders'
import Footer from './Footer'

export default function Orders() {
  const [inputValue , setInputValue] = useState("")
  
  const handleChange = (e)=> {
    setInputValue(e.target.value)
   
  }
  return (
    <div className='w-5/6  bg-subDark h-screen overflow-y-scroll pb-10'>
      <HeaderDashboard />
     <h1 className='font-bold text-4xl ml-20 mt-5'>All Order</h1>
     <form action="" className='lg:w-10/12 w-full pl-4 lg:pl-0 mx-auto lg:mx-14 mt-5'>
        <input list="orederUser" value={inputValue} onChange={(e)=> handleChange(e)} className='px-4 py-2 outline-none w-auto min-w-72 bg-dark rounded-l text-lg ' placeholder='Search with any column '/>
         <datalist name="orederUser" className='px-4 py-2 text-lg bg-dark outline-none'  id="">

            <option value="All Users" className='text-lg' />
         </datalist>
        
    
     </form>

     <div className='w-[93%] my-2 lg:my-0 h-fit   bg-dark lg:mx-auto  mx-3  lg:rounded-lg  lg:mt-5 mb-20 lg:mb-[10vh]'>
        <TableOrders inputValue={inputValue} />
        
     </div>
     <Footer />
    </div>
  )
}
