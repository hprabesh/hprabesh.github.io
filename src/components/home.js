import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import { Jumbotron } from "react-bootstrap";
//images
import BackgroundImage from "../images/IMG_0478.jpg";
// new updates
import AmazonCloudPracticionar from "../images/certificates-images/amazon-cloud-computing.png";
import UpdatedPerformanceTracker from "../images/project-image/performance-tracker-new-layout.gif";
import PerformanceTracker from "../images/project-image/performance-tracker.gif";
import Android from "../images/certificates-images/android-code-path.png";
import FlashCard from "../images/project-image/flashcard.gif";
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
                I am a junior at the University of Texas at Arlington pursuing
                an Honors degree in Computer Science with interests in Machine
                Learning and Neural Networks, Web and Android Application
                Development.
              </p>
              <p>
                Currently, I am working part-time as a web developer at the
                University of Texas at Arlington, where I help design and build
                accessible web pages for the Legal Affairs, Project Managers,
                and Procurements.
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
                    src={PerformanceTracker}
                    className="updates"
                    alt="Performance Tracker"
                    height="80%"
                  />

                  <figcaption>
                    <br />
                    New Project Performance Tracker
                    <br />
                    has been added to{" "}
                    <a href="./portfolio" title="Portfolio">
                      Portfolio
                    </a>{" "}
                    page.
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
              <figure>
                <center>
                  <img
                    src={FlashCard}
                    className="updates"
                    alt="Android Certification"
                  />

                  <figcaption>
                    <br />
                    Completed my first android application: FlashCard
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
