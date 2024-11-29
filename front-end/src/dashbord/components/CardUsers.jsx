import React from "react";
import InfoUser from "./InfoUser";
import defaultImage from '../../img/defaultImgUser.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis} from "@fortawesome/free-solid-svg-icons";


export default function CardUsers() {
  return (
    <div className="lg:w-3/12 w-full my-2 lg:my-0 h-fit   bg-dark mx-3  lg:rounded-3xl rounded-md overflow-auto ">
      <div className="flex justify-between items-center">
         <h1 className="text-2xl py-3 px-5 font-bold mb-2 flex items-center">
           New Costomers
         </h1>
         <FontAwesomeIcon className="mr-4 text-3xl hover:cursor-pointer" icon={faEllipsis} />
      </div>
      
      <hr />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Eni gma' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahemd Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
      <InfoUser username='Ahmed Naim' message='Your message user...' img={defaultImage} />
    </div>
  );
}
