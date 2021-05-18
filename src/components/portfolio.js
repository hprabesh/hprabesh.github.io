import React, { Component } from 'react';
import uuidv4 from "uuid";
import { config } from "react-spring";
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from "react-spring-3d-carousel";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


//all local file import
import Project from '../components/sub-components/project.js';
import Figures from '../components/sub-components/certificates.js'


//all CSS Import below
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/portfolio.css';

//all images import
//for Projects
import PerformanceTracker from '../images/project-image/performance-tracker.gif';
import FlashCard from '../images/project-image/flashcard.gif';

//for Certificates
import MongoDB from '../images/certificates-images/mongodb.png';
import MachineLearningAmazon from '../images/certificates-images/amazon-machinelearning.png';
import MachineLearning from '../images/certificates-images/machine-learning.png';
import DeepLearning from '../images/certificates-images/neural-network-and-deep-learning.PNG';
import CNN from '../images/certificates-images/convolutional-neural-network.PNG';
import HyperparameterTuning from '../images/certificates-images/hyperparamet-turning.PNG';
import Android from '../images/certificates-images/android-code-path.png';


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};


export default class Portfolio extends Component {
  state={ 
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.slow,

    buttonStatus:-1, //default status for Project Pop Up Close
    titles:[
      "Performance Tracker","Flash Card Application","MANGA Manager","Deans Engineering Challenge for Smart City","Weather Wiz"
      ], // titles for pop up 
    projectDescription:[
      "Performance Tracker System is a mobile app designed for Android devices. The main idea of the app is to help improve user's productivity. One of the core concepts is to allow user to add different priorities of task and help them complete those tasks on time using the idea of 'streak points', which can also be shared among the colleagues. The purpose behind using 'streak points' in our application is that, when user collects more streaks, it generates the dopamine reward and that would actually help user push further to improve their daily performances.",
      "A performance level monitoring web application – frontend written using React and Material-UI, backend written using Express, Node.js and MongoDB; used Azure DevOps to create CI/CD pipeline for the frontend and Azure Web App Service for the backend ",
      "Python (TensorFlow) project that uses Artificial Neural Network Model to predict the amount of radiation incident in Arlington Region to analyze the feasibility of hybrid structure of solar panel and windmill as an alternative source of energy with the goal to make Arlington a smart city. ",
      "Python project using Requests, Beautiful Soup, Matplotlib and Pandas libraries, to create the database of weather info of Arlington scrapped off the site from the past 20 years to analyze the weather change in Arlington region. ",
    ], //description for pop up
    projectURL:[
      "https://github.com/hprabesh/cse3310-project",
      "https://github.com/hprabesh/flashcard",
    ], //for URL of projects
    imageUrls:[
      PerformanceTracker,
      FlashCard,
      MachineLearning,
      DeepLearning
    ], //image for pop up


    //certificates carousel
    certificateLinks:[MongoDB,MachineLearning,DeepLearning,CNN,HyperparameterTuning], 
   
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className="project-carousel" width="40px" src={PerformanceTracker} alt="1" onClick={()=>this.onButtonClick(0)} />
    },
    {
      key: uuidv4(),
      content: <img className="project-carousel" src={FlashCard} alt="2" width="40px" onClick={()=>this.onButtonClick(1)} />,
    },
    {
      key: uuidv4(),
      content: <img src={MongoDB} alt="3" className="project-carousel" width="40px" onClick={()=>this.onButtonClick(2)} />
    },
    {
      key: uuidv4(),
      content: <img className="project-carousel" src={MachineLearning} alt="4"  width="40px" onClick={()=>this.onButtonClick(3)}/>
    },

  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });
  
  

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };


  onButtonClose=()=>{
    this.setState({
      buttonStatus:-1,
    });
  }
  onButtonClick=(i)=>{
    this.setState({
      buttonStatus:i,
    });
  }


  render() { 
    return ( 
      <React.Fragment>
        {(this.state.buttonStatus >=0) ? <Project title={this.state.titles[this.state.buttonStatus]} projectDescription={this.state.projectDescription[this.state.buttonStatus]} buttonSubmit={this.onButtonClose} image={this.state.imageUrls[this.state.buttonStatus]} projectLink={this.state.projectURL[this.state.buttonStatus]}  />: "" }
              <div className="projectBlock"><br/>
                <center><h2>Projects</h2></center><br/>
                <div className="aboutJumboTron" >
                  <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                  />
                </div>
              </div>
              {/* {console.log(slides)} */}
            <Container>
              <h2>Learning and Certificate</h2>
              <Row>
                <Col>
                <AliceCarousel
                activeIndex={0}
                touchTracking={true}
                mouseTracking={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                items={
                  [
                    <Figures src={Android} alt="Android" description="CodePath Mobile Product Development" width="80%"/>,
                    <Figures src={MongoDB} alt="MongoDB" description="MongoDB"  width="80%"/>,
                    <Figures src={MachineLearningAmazon} alt="Amazon Machine Learning Webinar" description="Amazon Machine Learning Webinar"  width="80%"/>,
                    <Figures src={MachineLearning} alt="Machine Learning" description="Machine Learning"  width="80%"/>,
                    <Figures src={DeepLearning} alt="Neural Network and Deep Learning" description="Neural Network and Deep Learning"  width="80%"/>,
                    <Figures src={CNN} alt="Convolutional NeuralNetwork" description="Convolutional Neural Network"  width="80%"/>,
                    <Figures src={HyperparameterTuning} alt="Tuning Hyperparameter" description="Improving Deep Neural Netwokrs; Hyperparameter Tuning, Regularization and Optimization" width="80%"/>,
                  ]
                }
                responsive={responsive}
              />
                </Col>
              </Row>
              
            </Container>
      </React.Fragment>
     );
  }
}