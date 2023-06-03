import React from 'react';
import facebook from "../../../assets/Socialicons/facebook.svg"
import twitter from "../../../assets/Socialicons/twitter.svg"
import linkedin from "../../../assets/Socialicons/linkedin.svg"
import instagram from "../../../assets/Socialicons/instagram.svg"
const TeamCard = ({member}) => {
    const {name,img,expert}= member;
    return (
        <div>
      <div className="card card-compact  shadow-2xl">
        <figure>
          <img src={img} alt="team membersP" className='rounded-xl w-10/12 h-80'  />
        </figure>
        <div className="card-body text-center">
       
          <h2 className="card-title text-3xl mx-auto font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-xl text-gray-600 font-semibold">
            {expert}
            </p>
          </div>
          <div className="flex gap-3 mx-auto my-2">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default TeamCard;