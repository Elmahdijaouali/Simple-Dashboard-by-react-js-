import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import defaultbg from "../../img/defaultBackground.jpg";
import profile from "../../img/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

export default function Profile() {
  return (
    <div className="w-5/6  bg-subDark h-screen overflow-y-scroll">
      <HeaderDashboard />
      <div className="w-[90%] mx-auto rounded-lg overflow-hidden">
        <div className="w-full">
          <div
            className="w-full relative lg:h-72 h-40 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${defaultbg})` }}
          >
            <div>
              <img
                src={profile}
                className="lg:w-44 lg:h-44 h-24 w-24 absolute z-20 -bottom-10 lg:left-10 left-5 rounded-full"
                alt=""
              />
            </div>
          </div>
          <div className="w-full relative h-[40vh] lg:h-72 lg:pt-20 pt-10 bg-dark">
            <div className="flex">
              <h1 className="font-bold text-3xl lg:ml-10 ml-5">User name</h1>
              <h3 className="font-bold text-lg text-white bg-green-600 w-fit p-2 rounded-3xl ml-10">
                Admin
              </h3>
            </div>
            <div className="lg:w-3/6 lg:ml-10 p-3 text-sm w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo, repudiandae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo, repudiandae?
            </div>
            <div className="w-2/6 ml-10 py-6 flex ">
              <FontAwesomeIcon className="text-4xl mr-3" icon={faFacebook} />
              <FontAwesomeIcon className="text-4xl mr-3" icon={faInstagram} />
              <FontAwesomeIcon className="text-4xl mr-3" icon={faXTwitter} />
              <FontAwesomeIcon className="text-4xl mr-3" icon={faLinkedin} />
              <FontAwesomeIcon className="text-4xl mr-3" icon={faDiscord} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto min-h-[50vh] mb-5 mt-2 flex flex-col lg:flex-row rounded-md overflow-hidden  ">
        <div className="w-full lg:w-[50%]">
          <form
            action=""
            className="flex flex-col h-fit mr-2 w-full bg-dark p-10"
          >
            <h1 className="text-3xl font-semibold text-center">Update info </h1>
            <label className="text-xl" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="text"
              placeholder="Enter new name"
            />
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="email"
              placeholder="Enter new email"
            />
            <label className="text-xl" htmlFor="tel">
              Tel
            </label>
            <input
              id="tel"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="text"
              placeholder="Enter new tel "
            />

            <button
              className="my-3 rounded-sm text-white bg-blue-500 px-4 py-2 text-xl"
              type="submit"
            >
              Update profile
            </button>
          </form>

          <form action="" className="flex flex-col mt-2 w-full bg-dark p-10 ">
            <h1 className="text-3xl font-semibold text-center">Update image</h1>
            <label className="text-xl" htmlFor="imgProfile">
              Image Profile
            </label>
            <input
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="file"
              id="imgProfile"
              name="imgProfile"
            />
            <label className="text-xl" htmlFor="bgProfile">
              Background Profile
            </label>
            <input
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="file"
              id="bgProfile"
              name="imgProfile"
            />
            <button
              className="my-3 rounded-sm text-white bg-blue-500 px-4 py-2 text-xl"
              type="submit"
            >
              Update profile
            </button>
          </form>
        </div>
        <div className="w-full lg:w-[50%]">
          <form
            action=""
            className="flex flex-col ml-0 mt-2 lg:mt-0 lg:ml-2 w-full bg-dark p-10"
          >
            <h1 className="text-3xl font-semibold text-center">
              Update Social media{" "}
            </h1>
            <label className="text-xl" htmlFor="facebook">
              <FontAwesomeIcon className="text-xl " icon={faFacebook} />{" "}
              Facebook
            </label>
            <input
              id="facebook"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="text"
              placeholder="Enter Link your facebook"
            />
            <label className="text-xl" htmlFor="instagram">
              <FontAwesomeIcon className="text-xl " icon={faInstagram} />{" "}
              Instagram
            </label>
            <input
              id="instagram"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="email"
              placeholder="Enter Link your instagram"
            />
            <label className="text-xl" htmlFor="twitter">
              <FontAwesomeIcon className="text-xl " icon={faTwitter} /> Twitter
            </label>
            <input
              id="twitter"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="text"
              placeholder="Enter Link your twiter"
            />
            <label className="text-xl" htmlFor="likedin">
              <FontAwesomeIcon className="text-xl " icon={faLinkedin} />{" "}
              LinkedIn
            </label>
            <input
              id="likedin"
              className="my-3 text-lg rounded-sm text-white bg-subDark px-4 py-2"
              type="text"
              placeholder="Enter Link your LinkedIn"
            />

            <button
              className="my-3 rounded-sm text-white bg-blue-500 px-4 py-2 text-xl"
              type="submit"
            >
              Update profile
            </button>
          </form>
        </div>
      </div>
      <form action="" className="lg:ml-20 ml-5 mb-20 lg:mb-[10vh] " method="post">
        <button
          className="my-3 rounded-sm text-white bg-red-700 px-4 py-2 text-xl"
          type="submit"
        >
          delete account
        </button>
      </form>
      <Footer />
    </div>
  );
}
