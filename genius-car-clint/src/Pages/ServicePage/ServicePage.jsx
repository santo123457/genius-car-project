import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-santo123457.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-semibold">Our All Service </h2>
          <p className="py-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don't look even slightly believable.{" "}
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
