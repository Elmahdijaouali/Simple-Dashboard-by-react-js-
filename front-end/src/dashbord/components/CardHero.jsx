import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CardHero({ titre, nbr, img }) {

  return (
    <NavLink to={`/${titre}`} className="lg:w-96 w-full mx-2 lg:my-0 my-2">
    <div className={`bg-dark    w-full   h-32 flex justify-around items-center  lg:rounded-3xl rounded-md px-5 hover:bg-gray-600 hover:cursor-pointer`} >
  
      <img 
        className="h-14 w-14 rounded-full bg-yellow-400" 
        width="100%" 
        height="100%" 
        src={img} 
        alt="" 
      />
      <div className="w-4/6">
        <h4 className="text-lg text-gray-800 dark:text-white">{titre}</h4>
        <h2 className="text-2xl text-gray-900 dark:text-white">{nbr}</h2>
        <h6 className="text-sm text-gray-600 dark:text-gray-300">last week</h6>
      </div>

   
    </div>
    </NavLink>
  )
}
