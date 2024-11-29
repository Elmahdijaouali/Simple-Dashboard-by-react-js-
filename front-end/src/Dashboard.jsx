import React, { useState, useEffect } from 'react';
import SildeBar from './dashbord/SildeBar';
import Main from './dashbord/Main';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import AddNewProduct from './dashbord/components/AddNewProduct';
import Products from './dashbord/components/Products';
import Orders from './dashbord/components/Orders';
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Categories from './dashbord/components/Categories';
import AddNewCategory from './dashbord/components/AddNewCategory';
import Users from './dashbord/components/Users';
import Profile from './dashbord/components/Profile';

export default function Dashboard() {

  const savedMode = localStorage.getItem('theme');
  

  const [mode, setMode] = useState(savedMode);

  // Effect to apply the class 'dark' to the HTML element
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');  
      localStorage.setItem('theme' , 'dark' )
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme' , 'light' ) ;
    }
  }, [mode]);
  

  return (
    <div className={`flex ${mode === 'dark' ? 'bg-dark text-white' : 'bg-subLight text-black'}`}>
    
      <BrowserRouter >
           <SildeBar  mode={mode} />
           <Routes>
               <Route path='/' element={<Main mode={mode} />} />
               <Route path='/add-new-product' element={<AddNewProduct />} />
               <Route path='/orders' element={<Orders />} />
               <Route path='/products' element={<Products />} />
               <Route path='/categories' element={<Categories/>} />
               <Route path='/add-new-category' element={<AddNewCategory/>} />
               <Route path='/users' element={<Users/>} />
               <Route path='/profile' element={<Profile/>} />
           </Routes>
      </BrowserRouter>

    
      
      

      {/* button mode  */}
      {/* <button
        className="text-white bg-inherit p-3 h-12 w-12 absolute lg:right-36 right-2 top-6  rounded-full"
        onClick={() => {
          setMode(mode === 'dark' ? 'light' : 'dark');
        }}
      >
        { mode ==='dark' ? (<FontAwesomeIcon className='text-2xl text-yellow-300' icon={faSun} />) : (<FontAwesomeIcon className='text-2xl text-white' icon={faMoon} />)}
      </button> */}
    </div>
  );
}
