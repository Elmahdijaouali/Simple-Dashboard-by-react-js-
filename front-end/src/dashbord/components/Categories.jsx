import React, { useState  , useEffect} from "react";
import HeaderDashboard from "./HeaderDashboard";
import Footer from "./Footer";
import categoriesJSON from '../../data-test/categories.json'

export default function Categories() {
   const arrCategories = JSON.parse(JSON.stringify(categoriesJSON))
   const [categories , setCategories ] = useState(arrCategories)
   const [inputValue , setInputValue] = useState("")

   const handleChange = (e)=> {
     setInputValue(e.target.value)
    
   }
   
     useEffect(()=>{
     if(inputValue === ""){
       setCategories(arrCategories)
     }else{
       setCategories(categories.filter(categorie => categorie.category_name_ar.toLowerCase().includes(inputValue.toLowerCase())  || categorie.category_name_en.toLowerCase().includes(inputValue.toLowerCase()) ))
     }
    } , [inputValue])
  return (
    <div className="w-5/6  bg-subDark h-screen overflow-y-scroll">
      <HeaderDashboard />
      <h1 className="font-bold lg:text-4xl text-2xl lg:ml-14 ml-5 mt-5">All Category</h1>
      <form action="" className="lg:w-10/12 w-full pl-4 lg:pl-0 mx-auto lg:mx-14 mt-5">
        <input
          list="orederUser"
          className="px-4 py-2 outline-none w-auto min-w-72 bg-dark rounded-l text-lg "
          placeholder="Enter title category "
          onChange={(e)=>handleChange(e)}
          value={inputValue}
        />
        <datalist
          name="orederUser"
          className="px-4 py-2 text-lg bg-dark outline-none"
          id=""
        >
          <option value="All Users" className="text-lg" />
        </datalist>

        
      </form>

      <div className=" w-[93%] my-2 lg:my-0 h-fit   bg-dark lg:mx-auto  mx-3  lg:rounded-lg overflow-auto  lg:mt-5 lg:mb-[10vh]">
        <table className="min-w-full rounded-lg  ">
          <thead>
            <tr className="border-b-2 py-5 rounded-t bg-gray-800">
              <th className="text-start first-letter:uppercase min-w-1/12 py-5 pl-5">
                image
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Category name by ar
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Category name by en
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Category descrition by ar
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Category descrition by en
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                create at
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                updated at
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Action
              </th>
               
            </tr>
          </thead>

          <tbody>
             {
              categories && categories.map(categorie => (
                <tr className="border-b-2 py-5 rounded-t bg-gray-800">
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          <img src={categorie.image} alt="" />
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.category_name_ar} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.category_name_en} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.category_description_ar} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.category_description_en} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.create_at} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          {categorie.updated_at} 
                     </td>
                     <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                          action
                     </td>
                </tr>
              )
            ) 
             }
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
