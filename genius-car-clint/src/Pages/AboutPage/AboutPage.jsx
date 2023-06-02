import React from "react";
import parsons from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutPage = () => {
  return (
   <div className="my-20">
    <p className="text-4xl text-center font-bold text-orange-600 mb-10">
              About Us
          </p>
     <div className="hero ">
    <div className="hero-content flex-col lg:flex-row">
      <div className="relative w-1/2">
        <img
          src={parsons}
          alt=""
          className="w-4/5 h-full  rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          alt=""
          className="absolute w-3/5 top-1/2 right-5 border-8 rounded-lg shadow-2xl"
        />
      </div>
      <div className="w-1/2">
          
        <h1 className="text-5xl font-bold py-5">
          We are qualified <br />
          & of experience <br />
          in this field
        </h1>
        <p className="py-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
       
        
      </div>
    </div>
  </div>
     <div className="hero my-32">
    <div className="hero-content flex-col lg:flex-row">
      <div className="relative w-1/2">
        <img
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/06/GettyImages-1343076140.jpg"
          alt=""
          className="w-4/5 h-full  rounded-lg shadow-2xl"
        />
        
      </div>
      <div className="w-1/2">
          
        <h1 className="text-5xl font-bold py-5">
          Our Workers <br />
        </h1>
        <p className="py-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
       
        
      </div>
    </div>
  </div>
   </div>
  );
};

export default AboutPage;
