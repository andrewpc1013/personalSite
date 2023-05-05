import React from "react";
import {
  Contact,
  Description,
  Hobbies,
  Projects,
  Skills,
  Timeline,
} from "../components/";

const Home = () => {
  return (
    <div>
      <Description />
      <Skills />
      <Timeline />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Home;
