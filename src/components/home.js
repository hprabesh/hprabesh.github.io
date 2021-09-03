import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import { Jumbotron } from "react-bootstrap";
//images
import BackgroundImage from "../images/IMG_0478.jpg";
// new updates
import AmazonCloudPracticionar from "../images/certificates-images/amazon-cloud-computing.png";
import UpdatedPerformanceTracker from "../images/project-image/performance-tracker-new-layout.gif";
import Android from "../images/certificates-images/android-code-path.png";
//css
import "../css/home.css";

const responsive = {
  0: { items: 0 },
  568: { items: 1 },
  1024: { items: 2 },
  1500: { items: 3 },
};

class Home extends Component {
  // state = {  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-4" style={{ textAlign: "left" }}>
              <img
                className="image"
                src={BackgroundImage}
                alt="Background: Prabesh Humagain @ Winter - 2021: Arlington, TX"
                width="500px"
              />
            </div>
            <div class="col-sm-8">
              <h1>Hi! I'm Prabesh Humagain </h1>
              <br />
              <p>I like designing and building things.</p>
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
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <Jumbotron>
          <h2>Updates</h2>

          <AliceCarousel
            className="certificates"
            startIndex={0}
            touchTracking={true}
            mouseDragEnabled={false}
            mouseTracking
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            disableAutoPlayOnAction={true}
            items={[
              <figure>
                <center>
                  <img
                    src={AmazonCloudPracticionar}
                    className="updates"
                    alt="AWS Cloud Practitioner Essentials"
                  />
                  <figcaption>
                    <br />
                    Completed AWS Cloud Practitioner Essentials
                  </figcaption>
                </center>
              </figure>,
              <figure>
                <center>
                  <img
                    src={UpdatedPerformanceTracker}
                    className="updates"
                    alt="Updated App Performance Tracker"
                    height="80%"
                  />
                  <figcaption>
                    <br />
                    Updated Performance Tracker.
                    <br />
                    Feature updated: Successful Connection to Canvas API
                  </figcaption>
                </center>
              </figure>,
              <figure>
                <center>
                  <img
                    src={Android}
                    className="updates"
                    alt="Android Certification"
                  />

                  <figcaption>
                    <br />
                    Received an Android App Development
                    <br />
                    Certification from CodePath
                  </figcaption>
                </center>
              </figure>,
            ]}
            responsive={responsive}
          />
        </Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>
                <center>
                  Thank you for visiting my website. Please feel free to learn
                  more about me .
                </center>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
