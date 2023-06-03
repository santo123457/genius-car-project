import React from "react";

const ProductCard = ({ product }) => {
  const { img, price, title } = product;
  return (
    <div>
      <div className="card card-compact w-96  shadow-2xl">
        <figure>
          <img src={img} alt="Product" style={{ height: "180px" }} />
        </figure>
        <div className="card-body text-center">
          <div className="rating mx-auto">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className="card-title text-3xl mx-auto font-bold">{title}</h2>
          <div className="flex justify-between">
            <p className="text-xl text-orange-600 font-semibold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
