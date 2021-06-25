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
            <p>Web Developer at the Office of Information Technology, UTA</p>
            <p></p>
            <p>
              <ol>
                <li>
                Maintain the database records of Transparency Reports and Job Descriptions using JavaScript library (Tabulator)
and JSON.
                </li>
                <li>
                Collaborate with Project Managers, Legal and Help Desk Analyst team to maintain the Office of Information
Technology, Human Resources, and Business Affairs sites hosted on AWS Elastic File System (EFS) storage
service. </li>
                <li>
                Implemented the Depth First Search Algorithm to build the Web Crawling and Web Scraping tool using Python
to keep track of more than 600 Legal Documents during site migration</li>
                <li>
                Wrote and maintained Knowledge-Based Articles to help students and faculty/staff transition to new updates on
the MyMav school portal by collaborating with the Communications and the Developer team.   </li>
              </ol>
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
