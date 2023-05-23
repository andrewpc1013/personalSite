import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FSLogo, Infinity, ULLogo } from "../assets";

const Timeline = () => {
  return (
    <div id="Timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "lightgray", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2014 - May 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={ULLogo} alt="ULLogo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor's Degree in Mechanical Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Louisiana at Lafayette
          </h4>
          <ul>
            <li>
              Worked as an undergraduate research assistant in two robotics labs
              as a programmer and in one materials science lab.
            </li>
            <li>Took classes using Python, Arduino C, and Matlab.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "lightgray", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="February 2019 - November 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={Infinity} alt="Infinity" />}
        >
          <h3 className="vertical-timeline-element-title">
            Mechanical Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Infinity Engineering Consultants
          </h4>
          <ul>
            <li>
              Developed construction drawing sets under supervision of
              professional engineers.
            </li>
            <li>
              Managed projects including client communication, team management,
              budget management
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "lightgray", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="January 2023 - April 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={FSLogo} alt="FSLogo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fullstack Academy
          </h4>
          <ul>
            <li>
              Developed front-end web apps using html, css, javascript, and
              react
            </li>
            <li>
              Developed back-end servers and databases using postgresql and
              javascript
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
