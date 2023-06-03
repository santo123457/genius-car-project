import React from "react";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import TeamCard from "./TeamCard";
const Team = () => {
  const fakeTeamMember = [
    {
      _id: 1,
      img: team1,
      name: "Harry Henry",
      expert: "Engine Expert",
    },
   
    {
      _id: 2,
      img: team3,
      name: "Hungsung Bangdoo",
      expert: "Cleaning Expert",
    },
    {
        _id: 3,
        img: team2,
        name: "Stiven Stave",
        expert: "Design Expert",
      },
  ];
  return (
    <section className="w-11/12 mx-auto my-20">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Team Members</p>
        <h2 className="text-5xl font-semibold">Meet Our Team</h2>
        <p className="py-5 mb-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fakeTeamMember.map((member) => (
          <TeamCard key={member._id} member={member}></TeamCard>
        ))}
      </div>
    </section>
  );
};

export default Team;
