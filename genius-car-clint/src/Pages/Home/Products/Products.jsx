import React from 'react';
import product1 from "../../../assets/images/products/1.png"
import product2 from "../../../assets/images/products/2.png"
import product3 from "../../../assets/images/products/3.png"
import product4 from "../../../assets/images/products/4.png"
import product5 from "../../../assets/images/products/5.png"
import product6 from "../../../assets/images/products/6.png"
import ProductCard from './ProductCard';

const Products = () => {
    const fakeProducts =[
        {
            _id: 1,
            img : product1,
            title : "Car Engine Plug",
            price : "20.00"
        },
        {
            _id: 2,
            img : product2,
            title : "Car Air Filter",
            price : "15.00"
        },
        {
            _id: 3,
            img : product3,
            title : "Cools Led Light",
            price : "35.00"
        },
        {
            _id: 4,
            img : product4,
            title : "Cools Led Light",
            price : "30.00"
        },
        {
            _id: 5,
            img : product5,
            title : "Car Engine Plug",
            price : "50.00"
        },
        {
            _id: 6,
            img : product6,
            title : "Car Engine Plug",
            price : "20.00"
        },
    ]
    return (
        <section className='w-11/12 mx-auto my-20'>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-600">Popular Products</p>
          <h2 className="text-5xl font-semibold">Browse Our Products</h2>
          <p className="py-5 mb-10">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don't look even slightly believable.{" "}
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fakeProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <button className="btn  btn-orange-outline my-10 m-auto block">
          More Products
        </button>
      </section>
    );
};

export default Products;