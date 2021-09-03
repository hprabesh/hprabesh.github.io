import React, { Component } from "react";
import { Jumbotron, Image, Container, Row, Col } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

//all CSS Import below
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/about.css";

//all local import below
import EducationTimeline from "./sub-components/education_timeline.js";
import WorkTimeline from "./sub-components/work_experience_timeline.js";
import Skills from "./sub-components/skills.js";

//all images import
import Avatar from "../images/avatar.png";
import Coding from "../images/coding.png";
import Chess from "../images/chess.png";
import TableTennis from "../images/tabletennisplaying.png";
import Music from "../images/music.png";

class About extends Component {
  // state = {  }
  render() {
    return (
      <div className="aboutInfoPage">
        <Jumbotron className="summary">
          <Container fluid>
            <Row className="summary">
              <Col md={3}>
                <figure align="Center">
                  {" "}
                  <Image
                    src={Avatar}
                    height="140px"
                    alt="Prabesh Humagain"
                    roundedCircle
                  />
                  <figcaption>
                    <strong>
                      Hi!
                      <br /> I'm Prabesh Humagain
                    </strong>
                  </figcaption>
                </figure>
              </Col>
              <Col md={9}>
                <h1>Summary:</h1>
                <p>
                  I am a rising junior majoring in Computer Science at the
                  University of Texas at Arlington (UTA). I am passionate about
                  Web and Android Application Development, Machine Learning, and
                  Neural networks, and I am actively seeking an internship/co-op
                  position in a similar field.
                </p>
                <p>
                  I have several experiences (work-related experience and school
                  team projects) relating to web and android application
                  development during my academic career. Also, these experiences
                  have helped me develop teamwork and communication skills. I am
                  proficient in programming languages Java, JavaScript, Python,
                  and C/C++ with a strong foundation in Object-Oriented
                  Programming and Algorithm and Data Structure.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col md={12} className="center-block d-flex justify-content-center">
              <h2>Experience</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={11}>
              {/* Imported Timeline portion from sub-components directory */}
              <WorkTimeline />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={12} className="center-block d-flex justify-content-center">
              <h2>Education</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={11}>
              {/* Imported Timeline portion from sub-components directory */}
              <EducationTimeline />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={12} className="center-block d-flex justify-content-center">
              <h2>Technical Skills</h2>
            </Col>
          </Row>
          <Skills
            title="Programming Languages"
            tools={["C/C++", "Python", "JavaScript", "Java"]}
            programming="true"
            skillLevel="80"
          />
          <Skills
            title="Front-End Web Development Tools"
            tools={["HTML", "CSS", "XML", "React", "jQuery", "Bootstrap"]}
            skillLevel="70"
          />
          <Skills
            title="Content Management System (CMS)"
            tools={["WordPress, Cascade, Sitecore"]}
            skillLevel="65"
          />
          <Skills title="Version Control" tools={["Git"]} skillLevel="85" />
          <Skills
            title="Back End Tools"
            tools={["ExpressJS", "Flask", "PHP"]}
            skillLevel="50"
          />

          <Skills
            title="Other Tools"
            tools={[
              "Firebase",
              "MongoDB",
              "Android Studio",
              "NumPy",
              "Postman",
              "Matlab",
              "Linux",
            ]}
            programming="true"
            skillLevel="75"
          />
        </Container>
        <Jumbotron className="hobbies">
          <Container fluid>
            <Row>
              <Col
                md={12}
                className="center-block d-flex justify-content-center skewness"
              >
                <h2>Hobbies</h2>
              </Col>
            </Row>
            <Row className="center-block justify-content-center auto skewness">
              <Col
                sm={6}
                md={2}
                className="center-block d-flex justify-content-center auto skewness"
              >
                <figure align="Center">
                  <Image src={Coding} alt="Coding/Programming" height="80px" />
                  <FigureCaption style={{ color: "white", fontWeight: 600 }}>
                    Coding
                  </FigureCaption>
                </figure>
              </Col>
              <Col
                sm={6}
                md={2}
                className="center-block d-flex justify-content-center skewness"
              >
                <figure align="Center">
                  <Image
                    src={TableTennis}
                    alt="PingPong/ Table Tennis"
                    height="80px"
                  />
                  <FigureCaption style={{ color: "white", fontWeight: 600 }}>
                    Table Tennis
                  </FigureCaption>
                </figure>
              </Col>
              <Col
                sm={6}
                md={2}
                className="center-block d-flex justify-content-center skewness"
              >
                <figure align="C enter">
                  <Image src={Chess} alt="Chess" height="80px" />
                  <FigureCaption style={{ color: "white", fontWeight: 600 }}>
                    <center>Chess</center>
                  </FigureCaption>
                </figure>
              </Col>
              <Col
                sm={6}
                md={2}
                className="center-block d-flex justify-content-center skewness"
              >
                <figure align="Center">
                  <Image src={Music} alt="Chess" height="80px" />
                  <FigureCaption style={{ color: "white", fontWeight: 600 }}>
                    Listening Music
                    <br />
                    (all kinds of genres)
                  </FigureCaption>
                </figure>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
