import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage} from "@fortawesome/free-solid-svg-icons";

export default function InfoUser({username , message , img}) {
  return (
    <div className='flex items-center px-5 py-3 hover:bg-gray-600  hover:text-light hover:cursor-pointer'>
        <div className='w-12  h-12 rounded-full bg-blue-400'>
           <img src={img} className='w-12  h-12 rounded-full'  alt="img profile user" />
        </div>
        <div className='w-4/6 pl-2'>
            <h2 className='text-lg font-bold first-letter:uppercase'>{username}</h2>
            <h3>{message}</h3>
        </div>
        <div className='w-1/6 text-end'>
            <FontAwesomeIcon className='text-3xl text-subLight hover:cursor-pointer' icon={faMessage} />
        </div>
    </div>
  )
}
