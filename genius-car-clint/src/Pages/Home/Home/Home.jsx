import React from "react";
import Banner from "../Banner/Banner";
import AboutPage from "../AboutPage/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutPage></AboutPage>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
    </div>
  );
};

export default Home;
