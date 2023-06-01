import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="skills">
        <h2>I have experience with these technologies</h2>
        <div className="skillsGrid">
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="The logo icon for react"
            title="React"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="The logo icon for HTML 5"
            title="HTML 5"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="The logo icon for CSS3"
            title="CSS 3"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="The logo icon for TailwindCSS"
            title="Twilwind CSS"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            alt="The logo icon for GitHub"
            title="GitHub"
          />
          {/* <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="The logo icon for NPM"
            title="NPM"
          /> */}
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="The logo icon for NodeJS"
            title="Node JS"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            alt="The logo icon for Postgresql"
            title="PostgreSQL"
          />
          <Skill source="/vite.svg" alt="The logo icon for Vite" title="Vite" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
