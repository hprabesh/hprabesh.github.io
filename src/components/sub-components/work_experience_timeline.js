import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../css/sub-components/work_experience_timeline.css";

const contentStyleCSS = {
  background: "#5883b4",
  color: "#111111",
};
const contentArrowStyleCSS = {
  borderRight: "7px solid  #5883b4",
};

const circleTimelineCSS = {
  background: "#8fa1b6",
  color: "#111111",
};

export default function Timeline() {
  return (
    <React.Fragment>
      <VerticalTimeline
        className="vertical-timeline-custom-line-work-exp"
        animate={false}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyleCSS}
          contentArrowStyle={contentArrowStyleCSS}
          date="November 2019 - Present"
          iconStyle={circleTimelineCSS}
        >
          <div className="vertical-timeline-element-text">
            <p>Web Developer at Office of Information Technology, UTA</p>
            <p></p>
            <p>
              <ol>
                <li>
                  Create and manage the Office of Information Technology, Human
                  Resources, Business Affairs, and the Help sites on Cascade and
                  Sitecore.
                </li>
                <li>
                  Build the Web Crawling and Web Scrapping tools to maintain the
                  database of all the legal documents related to Forms and
                  Policies and Procedures.
                </li>
                <li>
                  Manage the project sites and their workflows and perform
                  timely updates on the Office of Information Technology Project
                  sites collaborating with the Project Managers
                </li>
                <li>
                  Improve the web accessibility of the Office of Information
                  Technology, Human Resources, and the Business Affairs sites
                </li>
                <li>
                  Perform Regression Testing for Sitecore using Azure DevOps
                </li>
              </ol>
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
