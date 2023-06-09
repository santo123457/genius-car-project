import React from "react";
import parsons from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="hero my-20">
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
            <p className="text-2xl font-bold text-orange-600">
                About Us
            </p>
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
          <Link to="/about"><button className="btn btn-orange ">Get More Info</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default About;
