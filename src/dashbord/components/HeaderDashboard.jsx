import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
  faUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import imgProfile from "../../img/profile.jpeg";
import { NavLink } from "react-router-dom";

export default function HeaderDashboard({ mode }) {
  const [showBarRight, setShowBarRight] = useState(false);

  // handle show bar right header
  const handleShowBarRight = () => {
    if (showBarRight === false) {
      setShowBarRight(true);
    } else {
      setShowBarRight(false);
    }
  };
  return (
    <div className="h-24 shadow-lg  flex items-center px-1 ">
      <form
        action=""
        method="get"
        className="lg:w-2/6  w-5/6 lg:px-5 px-1 relative"
      >
        <input
          type="text"
          name="search"
          placeholder={` search`}
          className="rounded-md lg:pl-10 pl-8  p-2 text-lg text-white lg:ml-5 ml-1 w-full dark:bg-dark "
        />
        <FontAwesomeIcon
          className="absolute top-1/2 lg:left-14 left-5 transform -translate-y-1/2 "
          icon={faMagnifyingGlass}
        />
      </form>
      <div className="lg:w-3/6 w-0"></div>

      <div className="lg:w-1/6 relative  ">
        <div
          className="mr-10 flex items-center  relative "
          onClick={handleShowBarRight}
        >
          <img
            className="h-12 w-12 lg:ml-auto ml-5  rounded-full  hover:cursor-pointer"
            width={"100%"}
            height={"100%"}
            src={imgProfile}
            alt="profile"
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-xl absolute lg:right-4 right-1 -bottom-2.5"
          />
        </div>
        {/* bar right  */}
        {showBarRight && (
          <div className=" absolute right-3 z-50 -bottom-32  border-gray-50 border w-52 h-fit  bg-subDark rounded-lg text-white">
            <ul>
              <NavLink to='/profile'>
              <li className="p-3 pl-5 hover:cursor-pointer hover:bg-blue-500 rounded-t-lg ">
                <FontAwesomeIcon className="mr-2" icon={faUser} /> Profile
              </li>
              </NavLink>
             
             
              
              <NavLink to='/logout'>
                 <li className="p-3 pl-5 text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white rounded-b-lg ">
                   {" "}
                   <FontAwesomeIcon
                     className="mr-2"
                     icon={faArrowRightFromBracket}
                   />{" "}
                   Log out
                 </li>
              </NavLink>
             
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
