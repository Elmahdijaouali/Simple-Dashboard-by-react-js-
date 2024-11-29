import React, { useState , useEffect } from 'react'
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer'
import usersJSON from "../../data-test/users.json"
export default function Users() {
  const arrUsers = JSON.parse(JSON.stringify(usersJSON))
  const [users , setUsers] = useState(arrUsers)
  const [inputValue , setInputValue] = useState("")

  const handleChange = (e)=> {
    setInputValue(e.target.value)
   
  }
  
    useEffect(()=>{
    if(inputValue === ""){
      setUsers(arrUsers)
    }else{
      setUsers(users.filter(user => user.first_name.concat(user.last_name).trim().toLowerCase().includes(inputValue.trim().toLowerCase()) ))
    }
   } , [inputValue])
  
  return (
    <div className='w-5/6  bg-subDark h-screen overflow-y-scroll '>
      <HeaderDashboard />
     <h1 className='font-bold lg:text-4xl text-2xl lg:ml-14 ml-5 mt-5'>All Users</h1>
     <form action="" className='lg:w-10/12 w-full pl-4 lg:pl-0 mx-auto lg:mx-14 mt-5'>
        <input type="text" value={inputValue} onChange={(e)=> handleChange(e)} className='px-4 py-2 outline-none w-auto min-w-72 bg-dark rounded-l text-lg ' placeholder='Enter user name'/>
        <select name="" className='px-4 py-2 text-lg bg-dark outline-none mt-5 lg:mt-0' id="">
            <option value="" className='text-lg'  >Select User</option>

        </select>
       
     </form>

     <div className="w-[93%] my-2 lg:my-0 h-fit   bg-dark lg:mx-auto  mx-3  lg:rounded-lg overflow-auto  lg:mt-5">
        <table className="min-w-full rounded-lg  ">
          <thead>
            <tr className="border-b-2 py-5 rounded-t bg-gray-800">
              <th className="text-start first-letter:uppercase min-w-1/12 py-5 pl-5">image</th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                First Name
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Last Name
              </th>

              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                City
              </th>
              <th className="text-start first-letter:uppercase min-w-1/12 py-5  pl-5">
                Country
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Email
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Number phone
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Created at 
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                Updated at
              </th>
              <th className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
               action
              </th>
            </tr>
          </thead>

          <tbody>
             {
              users && users.map(user => (
                <tr className="border-b-2 py-5 rounded-t bg-gray-800">
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            <img src={user['image']} alt="" />
                         </td>
                        <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['first_name']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['last_name']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['city']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['country']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['email']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['phone_number']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['created_at']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            {user['updated_at']}
                         </td>
                         <td className="text-start first-letter:uppercase min-w-2/12 py-5  pl-5">
                            action
                         </td>

                </tr>
              ))
             }
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}
