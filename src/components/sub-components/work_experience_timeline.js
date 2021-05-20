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
                  Create Office of Information Technology Project Pages
                  utilizing HTML5, CSS, JavaScript, and PHP on Cascade CMS
                </li>
                <li>
                  Prepare training materials, videos and graphics using Adobe
                  Creative Cloud, HTML5, and Bootstrap3
                </li>
                <li>
                  Improve web accessibility for Business-Affairs and Office of
                  Information Technology (OIT) sites{" "}
                </li>
                <li>
                  Analyze the impacts of upgrading software systems and work on
                  the project based on their lifecycle
                </li>
                <li>
                  Perform Regression Testing on Sitecore using Azure DevOps
                  Tools
                </li>
                <li>
                  Build Web Crawler and Web Scraper using Python (Requests and
                  Beautiful Soup) to map the UT Arlington site and also maintain
                  the database of all the PDF, Docx, and Excel files.
                </li>
                <li>
                  Write a Python script to convert DOCX, PPTX, XLSX files to PDF
                  and upload them on the server
                </li>
                <li>
                  Improve the web accessibility of the OIT and the Business
                  Affairs web sites
                </li>
              </ol>
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
