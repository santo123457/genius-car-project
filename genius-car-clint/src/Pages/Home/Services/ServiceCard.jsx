import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" style={{ height: "250px" }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
        <p className="text-2xl  text-orange-600 font-semibold">
          Price: ${price}
          </p>
          <div className="card-actions ">
           <Link to={`/checkout/${_id}`}>
           <BsArrowRightShort className="text-4xl text-orange-600 cursor-pointer"></BsArrowRightShort>
           </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceCard;
