import React from "react";
import HeaderDashboard from "./components/HeaderDashboard";
import CardHero from "./components/CardHero";
import CardChart from "./components/CardChart";
import CardChart2 from "./components/CardChart2";
import CardUsers from "./components/CardUsers";
import TableOrders from "./components/TableOrders";
import imgOrders from "../img/orders.jpeg";
import imgUsers from "../img/uesrs.jpeg";
import imgProducts from "../img/products.jpeg";
import imgCategories from "../img/categories.jpeg";
import Footer from "./components/Footer";

export default function Main({ mode }) {
  return (
    <div
      className={`w-5/6  bg-subDark max-h-screen overflow-y-scroll`}
    >
      <HeaderDashboard mode={mode} />
      {/*section hero */}
      <div className="flex justify-between w-6/6 lg:px-10 py-4 flex-wrap lg:flex-nowrap">
        
        <CardHero titre={"Orders"} nbr={"2000"} img={imgOrders} />
        <CardHero titre={"Products"} nbr={"6030"} img={imgProducts} />
        <CardHero titre={"Categories"} nbr={"20"} img={imgCategories} />
        <CardHero titre={"Users"} nbr={"1000000"} img={imgUsers} />
      </div>
      {/* section charts */}
      <div className="flex justify-between w-6/6 lg:px-8 flex-wrap lg:flex-nowrap">
        <CardChart />
        <CardChart2 />
      </div>
      {/* section tables */}
      <div className="flex justify-between w-6/6 lg:px-8 lg:my-4 flex-wrap lg:flex-nowrap mb-20 lg:mb-[10vh]">
        <CardUsers />
        <TableOrders />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
