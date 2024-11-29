import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faUsers,
  faArrowRightFromBracket,
  faGear,
  faLayerGroup,
  faShop,
  faInbox,
  faSliders,
  faFolderOpen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function SildeBar({ mode }) {
  const [showDropdownProduct, setShowDropdownProduct] = useState(false);
  const [showDropdownCategory, setShowDropdownCategory] = useState(false);
  // handle dropdown product
  const handleDropdowProduct = () => {
    if (showDropdownProduct === false) {
      setShowDropdownProduct(true);
    } else {
      setShowDropdownProduct(false);
    }
  };
  // handle dropdown category
  const handleDropdowCategory = () => {
    if (showDropdownCategory === false) {
      setShowDropdownCategory(true);
    } else {
      setShowDropdownCategory(false);
    }
  };
  return (
    <div
      className={`w-1/6  lg:w-2.5/6 h-screen overflow-y-scroll no-scrollbar  ${
        mode === "dark" ? "bg-dark " : "bg-subLight"
      }`}
    >
      <div className="w-6/6 px-10 py-8   text-lg text border-b-2 rounded-2xl ">
        <h1 className=" hidden lg:block font-bold">My dashboard </h1>
      </div>
      <div>
        <ul>
          <NavLink to="/">
            <li className="  hover:cursor-pointer my-2.5 flex items-center   lg:mx-5 mx-0 justify-center lg:justify-normal p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
              <FontAwesomeIcon className="text-lg" icon={faSliders} />
              <span className="ml-2  hidden lg:block font-medium">
                Dashboard
              </span>
            </li>
          </NavLink>

          <li
            onClick={handleDropdowProduct}
            className="  hover:cursor-pointer my-2.5 flex items-center  lg:mx-5 mx-0 justify-center lg:justify-normal  p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light"
          >
            <FontAwesomeIcon className="text-lg" icon={faInbox} />
            <span className="ml-2   hidden lg:block font-medium">Products</span>
            <FontAwesomeIcon
              className="ml-auto text-sm hidden lg:block"
              icon={faCaretDown}
            />
          </li>
          {/* dropdown product */}
          {showDropdownProduct && (
            <div>
              <ul className=" ">
                <NavLink to="/products">
                  <li className="hover:cursor-pointer my-1 lg:w-52 lg:ml-14  flex lg:mx-5 mx-0 justify-center lg:justify-normal  p-3 lg:text-lg text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
                    <FontAwesomeIcon  icon={faFolderOpen} /> <span className="ml-2   hidden lg:block font-medium">All Products</span> 
                  </li>
                </NavLink>
                <NavLink
                  to="/add-new-product"
                  a
                  activeClassName="text-blue-600 font-bold underline"
                >
                  <li className="hover:cursor-pointer my-1 lg:w-52 lg:ml-14 flex  lg:mx-5 mx-0 justify-center lg:justify-normal  p-3 lg:text-lg text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
                    <FontAwesomeIcon icon={faPlus} />  <span className="ml-2   hidden lg:block font-medium">Add New Product</span> 
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
          <NavLink to="/orders">
            <li className="  hover:cursor-pointer my-2.5 flex items-center  lg:mx-5 mx-0 justify-center lg:justify-normal  p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
              <FontAwesomeIcon className="text-lg" icon={faShop} />
              <span className="ml-2   hidden lg:block font-medium">Orders</span>
            </li>
          </NavLink>
          <li
            onClick={handleDropdowCategory}
            className="  hover:cursor-pointer my-2.5 flex items-center  lg:mx-5 mx-0 justify-center lg:justify-normal p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light"
          >
            <FontAwesomeIcon className="text-lg" icon={faLayerGroup} />
            <span className="ml-2   hidden lg:block font-medium">
              Categories
            </span>
            <FontAwesomeIcon
              className="ml-auto text-sm  hidden lg:block"
              icon={faCaretDown}
            />
          </li>
          {/* dropdown Category */}
          {showDropdownCategory && (
            <div>
              <ul className=" ">
                <NavLink to="/categories">
                  <li className="hover:cursor-pointer flex my-1 lg:w-52 lg:ml-14   lg:mx-5 mx-0 justify-center lg:justify-normal  p-3 lg:text-lg text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
                    <FontAwesomeIcon icon={faFolderOpen} />  <span className="ml-4   hidden lg:block font-medium">All Categories </span> 
                  </li>
                </NavLink>

                <NavLink to="/add-new-category">
                  <li className="hover:cursor-pointer flex my-1 lg:w-52 lg:ml-14   lg:mx-5 mx-0 justify-center lg:justify-normal  p-3 lg:text-lg text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
                    <FontAwesomeIcon icon={faPlus} />  <span className="ml-2   hidden lg:block font-medium">Add New Category</span>
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
          <NavLink to="/users">
            <li className="  hover:cursor-pointer my-2.5 flex items-center  lg:mx-5 mx-0 justify-center lg:justify-normal  p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg hover:dark:text-light">
              <FontAwesomeIcon className="text-lg" icon={faUsers} />
              <span className="ml-2   hidden lg:block font-medium">Users</span>
            </li>
          </NavLink>

          <hr className="bg-gray-600" />
      

          <li className="text-red-600 hover:text-red-600  hover:cursor-pointer my-2.5 flex items-center  lg:mx-5 mx-0 justify-center lg:justify-normal  p-4 lg:text-xl text-sm hover:dark:bg-gray-600 hover:rounded-lg ">
            <FontAwesomeIcon
              className="text-lg"
              icon={faArrowRightFromBracket}
            />
            <span className="ml-2   hidden lg:block font-medium">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
