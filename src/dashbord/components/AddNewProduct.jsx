import React from 'react'
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer'

export default function AddNewProduct() {
  return (
    <div className='bg-subDark w-5/6  h-screen overflow-y-scroll '>
          <HeaderDashboard/>

         <form action="" className='flex flex-col lg:w-6/12 w-6/6 lg:mx-auto   lg:p-5 bg-dark p-3 rounded-md mt-10 mb-20 shadow-md lg:mb-[10vh] '>

             <h1 className='lg:text-5xl text-xl my-4 font-bold text-center'>Add New Product </h1>
              <fieldset className='flex flex-col rounded-md border lg:p-3 p-2 mb-3 w-full'>
                <legend>English</legend>
                   <input className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' type="text" placeholder='Enter name product by English' />
                   <textarea className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' name="" placeholder='Enter Description product by English' id="">
      
                   </textarea>
                   <select className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' name="" id="">
                       <option value="">Select category product by English</option>
                   </select>
              </fieldset>

              <fieldset className='flex flex-col  rounded-md border p-3  w-full'>
                <legend>Arabic</legend>
                   <input type="text" className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' placeholder='Enter name product by Arabic' />
                   <textarea name="" className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' placeholder='Enter Description product by Arabic' id="">
      
                   </textarea>
                   <select className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' name="" id="">
                       <option value="">Select category product by Arabic</option>
                   </select>
              </fieldset>

             <input className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' type="number" placeholder='Enter price product ' />
             <input type="file" className='my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2' accept='' name='imgs[]' multiple />

            <button className='my-3 rounded-sm text-white bg-blue-500 px-4 py-2 text-xl' type='submit'>Create New Product</button>
         </form>
         <Footer />
    </div>
  )
}
