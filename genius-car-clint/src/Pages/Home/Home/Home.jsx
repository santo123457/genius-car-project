import React from "react";
import Banner from "../Banner/Banner";
import AboutPage from "../AboutPage/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutPage></AboutPage>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
