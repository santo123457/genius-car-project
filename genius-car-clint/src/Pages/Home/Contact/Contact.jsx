import React from "react";
import calender from "../../../assets/icons/calender.svg"
import phone from "../../../assets/icons/phone.svg"
import location from "../../../assets/icons/location.svg"
const Contact = () => {
  return (
    <div className=" bg-neutral-900 rounded-lg text-white py-16 mb-10">
        <div className="w-11/12 m-auto py-10 px-5">
        <div className="flex gap-8 justify-between">
        <div className="flex gap-5">
            <img src={calender} alt="" />
         <div className=" font-semibold">
         <h4 >We are open monday-friday</h4>
          <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
         </div>
        </div>
        <div className="flex gap-5">
            <img src={phone} alt="" />
         <div className=" font-semibold">
         <h4>Have a question?</h4>
          <h2 className="text-3xl">+2546 251 2658</h2>
         </div>
        </div>
        <div className="flex gap-5">
            <img src={location} alt="" />
         <div className=" font-semibold">
         <h4 >Need a repair? our address</h4>
          <h2 className="text-3xl">PobleSec,Barcelona</h2>
         </div>
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default Contact;
