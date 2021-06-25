import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { Jumbotron } from "react-bootstrap";
import Carousel from "react-spring-3d-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//all local file import
import Project from "../components/sub-components/project.js";
import Figures from "../components/sub-components/certificates.js";

//all CSS Import below
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/portfolio.css";

//all images import
//for Projects
import PerformanceTracker from "../images/project-image/performance-tracker.gif";
import FlashCard from "../images/project-image/flashcard.gif";
import ToDoList from "../images/project-image/ToDoList.png";
import MangaManagerGif from "../images/project-image/manga-manager.gif";
import MangaManagerPng from "../images/project-image/manga-manager.PNG";

//for Certificates
import AmazonCloudPracticionar from "../images/certificates-images/amazon-cloud-computing.png";
import Android from "../images/certificates-images/android-code-path.png";
import MongoDB from "../images/certificates-images/mongodb.png";
import MachineLearningAmazon from "../images/certificates-images/amazon-machinelearning.png";
import MachineLearning from "../images/certificates-images/machine-learning.png";
import DeepLearning from "../images/certificates-images/neural-network-and-deep-learning.PNG";
import CNN from "../images/certificates-images/convolutional-neural-network.PNG";
import HyperparameterTuning from "../images/certificates-images/hyperparamet-turning.PNG";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1500: { items: 4 },
};

export default class Portfolio extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.slow,

    buttonStatus: -1, //default status for Project Pop Up Close
    titles: [
      "Performance Tracker",
      "Flash Card Application",
      "To Do List App",
      "Manga Manager",
    ], // titles for pop up
    projectDescription: [
      "Performance Tracker System is an android app built to help improve user's productivity. One of the core concepts is to allow user to add different priorities of task and help them complete those tasks on time using the idea of 'streak points', which can also be shared among the colleagues. The app is written using Java, and Firebase is used to handle all backend services and maintaining database.",
      "Flashcard is a simple android application that allows the user to create a flashcard making it easier to prepare for quizzes/exams. The app is written using Java, and Google Room SQLite is used to maintain the database.",
      "A simple To-Do list app that allows the user to visualize the number of tasks completed – frontend written using React and Material-UI, backend written using Express, Node.js and MongoDB; used Azure DevOps to create CI/CD pipeline for the frontend (and soon to release it for production) and Azure Web App Service for the backend ",
      "A basic Gnome Application to store the store records (Plant, Mulch, Tool) like price, quantity, and the variants. The application is built using C++17 and Gtkmm3.0 in Ubuntu for CSE1325 Intro to Object Oriented Programming class project ",
    ], //description for pop up
    projectURL: [
      "https://github.com/hprabesh/cse3310-project",
      "https://github.com/hprabesh/flashcard",
      "https://github.com/hprabesh/ToDoList",
      "https://github.com/hprabesh/MANGA-Manager",
    ], //for URL of projects
    imageUrls: [PerformanceTracker, FlashCard, ToDoList, MangaManagerGif], //image for pop up

    //certificates carousel
    certificateLinks: [
      MongoDB,
      MachineLearning,
      DeepLearning,
      CNN,
      HyperparameterTuning,
    ],
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <figure>
          <center>
            <img
              className="project-carousel"
              src={PerformanceTracker}
              alt="1"
              onClick={() => this.onButtonClick(0)}
            />
          </center>
          <figcaption>
            <center>
              <em>Performance Tracker</em>
            </center>
          </figcaption>
        </figure>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <figure>
          <center>
            <img
              className="project-carousel"
              src={FlashCard}
              alt="2"
              height="40px"
              onClick={() => this.onButtonClick(1)}
            />
          </center>{" "}
          <figcaption>
            <center>
              <em>FlashCard Application</em>
            </center>
          </figcaption>
        </figure>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <figure>
          <center>
            <img
              src={ToDoList}
              alt="3"
              className="project-carousel"
              onClick={() => this.onButtonClick(2)}
            />
          </center>
          <figcaption>
            <center>
              <em>ToDoList App</em>
            </center>
          </figcaption>
        </figure>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <figure>
          <center>
            <img
              src={MangaManagerPng}
              alt="4"
              className="project-carousel"
              onClick={() => this.onButtonClick(3)}
            />
          </center>
          <figcaption>
            <center>
              <em>MANGA Manager</em>
            </center>
          </figcaption>
        </figure>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  onButtonClose = () => {
    this.setState({
      buttonStatus: -1,
    });
  };
  onButtonClick = (i) => {
    this.setState({
      buttonStatus: i,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.buttonStatus >= 0 ? (
          <Project
            title={this.state.titles[this.state.buttonStatus]}
            projectDescription={
              this.state.projectDescription[this.state.buttonStatus]
            }
            buttonSubmit={this.onButtonClose}
            image={this.state.imageUrls[this.state.buttonStatus]}
            projectLink={this.state.projectURL[this.state.buttonStatus]}
          />
        ) : (
          ""
        )}
        <div className="projectBlock">
          <Jumbotron className="aboutJumboTron">
            <center>
              <h2>Projects</h2>
            </center>
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
            />
          </Jumbotron>
          <div className="certificates">
            <h2>Certifications</h2>

            <AliceCarousel
              className="certificates"
              startIndex={0}
              touchTracking={true}
              mouseDragEnabled
              mouseTracking
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              disableAutoPlayOnAction={true}
              items={[
                <Figures
                  data-value="1"
                  src={AmazonCloudPracticionar}
                  alt="Android"
                  description="Completed AWS Cloud Practitioner Essentials"
                  width="80%"
                />,
                <Figures
                  data-value="1"
                  src={Android}
                  alt="Android"
                  description="CodePath Mobile Product Development"
                  width="80%"
                />,
                <Figures
                  data-value="2"
                  src={MongoDB}
                  alt="MongoDB"
                  description="MongoDB"
                  width="80%"
                />,
                <Figures
                  data-value="3"
                  src={MachineLearningAmazon}
                  alt="Amazon Machine Learning Webinar"
                  description="Amazon Machine Learning Webinar"
                  width="80%"
                />,
                <Figures
                  data-value="4"
                  src={MachineLearning}
                  alt="Machine Learning"
                  description="Machine Learning"
                  width="80%"
                />,
                <Figures
                  data-value="5"
                  src={DeepLearning}
                  alt="Neural Network and Deep Learning"
                  description="Neural Network and Deep Learning"
                  width="80%"
                />,
                <Figures
                  data-value="6"
                  src={CNN}
                  alt="Convolutional NeuralNetwork"
                  description="Convolutional Neural Network"
                  width="80%"
                />,
                <Figures
                  data-value="7"
                  src={HyperparameterTuning}
                  alt="Tuning Hyperparameter"
                  description="Improving Deep Neural Netwokrs; Hyperparameter Tuning, Regularization and Optimization"
                  width="80%"
                />,
              ]}
              responsive={responsive}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
