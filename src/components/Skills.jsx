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
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="The logo for JavaScript"
            title="JavaScript"
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
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            alt="The logo icon for Postgresql"
            title="PostgreSQL"
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
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="The logo icon for NodeJS"
            title="Node JS"
          />
          <Skill source="/vite.svg" alt="The logo icon for Vite" title="Vite" />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="The logo for C Sharp"
            title="C#"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt="The logo for Java"
            title="Java"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            alt="The logo for Python"
            title="Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
