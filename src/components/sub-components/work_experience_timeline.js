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
          date="September 2021 - Present"
          iconStyle={circleTimelineCSS}
        >
          <div className="vertical-timeline-element-text">
            <p>Webmaster</p>
            <p>
              <ol>
                <li>
                  Design and develop the web application using PHP, Python
                  (Flask), and Jinja2 templating engine to help streamline the
                  Computer Science department's operation
                </li>
                <li>
                  Maintain the SQL database of the department operations like
                  Ph.D. admission, M.S. admission, GTA/GRA position requests,
                  advising tools, and many more.
                </li>
              </ol>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyleCSS}
          contentArrowStyle={contentArrowStyleCSS}
          date="November 2019 - August 2021"
          iconStyle={circleTimelineCSS}
        >
          <div className="vertical-timeline-element-text">
            <p>Frontend Web Developer</p>
            <p>
              <ol>
                <li>
                  Designed and built the Content Management System (CMS) on
                  Cascade and Sitecore using HTML5, CSS, JavaScript, and PHP by
                  collaborating with the Project Managers and the Communications
                  team.
                </li>
                <li>
                  Troubleshot the backend issues and debugged JavaScript and PHP
                  codebase.
                </li>
                <li>
                  Expedited the site migration project by building the
                  web-crawling and web-scraping tool that kept track of more
                  than 200 legal forms and procedures written in Python (Request
                  and BeautifulSoup).
                </li>
                <li>
                  Facilitated more than 100 students and faculty/staff in
                  transitioning to new technology by creating the training
                  materials such as technical documentation, knowledge-based
                  articles, and Canvas courses.
                </li>
              </ol>
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
