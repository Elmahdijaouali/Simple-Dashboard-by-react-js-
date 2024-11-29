import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import Footer from "./Footer";

export default function AddNewCategory() {
  return (
    <div className="w-5/6  bg-subDark h-screen overflow-y-scroll">
      <HeaderDashboard />

      <form
        action=""
        className="flex flex-col lg:w-6/12 w-full p-5 bg-dark lg:mx-auto rounded-md mt-10 mb-20 shadow-md lg:mb-[10vh] "
      >
        <h1 className="text-5xl mb-4 font-bold text-center">
          Add New Category{" "}
        </h1>
        <fieldset className="flex flex-col rounded-md border p-3 mb-3">
            <legend>English</legend>
          <input
            className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
            type="text"
            placeholder="Enter title category by English"
          />
        </fieldset>
        <fieldset className="flex flex-col  rounded-md border p-3">
            <legend>Arabic</legend>
          <input
            type="text"
            className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
            placeholder="Enter title category  by Arabic"
          />
        </fieldset>

        <input
          type="file"
          className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
          accept=""
          name="img"
        />

        <button
          className="my-3 rounded-sm text-white bg-blue-500 px-4 py-2 text-xl"
          type="submit"
        >
          Create New Category
        </button>
      </form>
      <Footer />
    </div>
  );
}
