import "./App.css";

import React from "react";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Socials from "./components/socials/Socials";
import aboutData from "./data/about.json";
import portfolioData from "./data/portfolio.json";

const App: React.FC = () => {
  return (
    <div>
      <About
        name={aboutData.about.name}
        jobTitle={aboutData.about.jobTitle}
        descriptionShort={aboutData.about.descriptionShort}
        imageSrc={process.env.PUBLIC_URL + "/assets/images/about.jpg"}
        descriptionLong={aboutData.about.descriptionLong}
      />
      <Socials
        instagramUrl={"https://www.instagram.com/_tangojack/"}
        whatsappUrl={"https://wa.me/85256029830"}
      ></Socials>
      <Portfolio items={portfolioData.items} />
    </div>
  );
};

export default App;
