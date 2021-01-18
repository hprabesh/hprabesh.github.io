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
import MongoDB from '../images/certificates-images/mongodb.png';
import MachineLearning from '../images/certificates-images/machine-learning.png';
import DeepLearning from '../images/certificates-images/neural-network-and-deep-learning.PNG';
import CNN from '../images/certificates-images/convolutional-neural-network.PNG';
import HyperparameterTuning from '../images/certificates-images/hyperparamet-turning.PNG';

import Test from '../images/test.png';

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
        "0","1","2","3","4"
      ], // titles for pop up 
    projectDescription:[
      "Project Description 0",
      "Project Description 1",
      "Project Description 2",
      "Project Description 3",
      "Project Description 4"
    ], //description for pop up
    imageUrls:[
      Test,
      CNN,
      MongoDB,
      MachineLearning,
      DeepLearning
    ], //image for pop up


    //certificates carousel
    certificateLinks:[MongoDB,MachineLearning,DeepLearning,CNN,HyperparameterTuning], 
   
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className="project-carousel" width="40px" src={Test} alt="1" onClick={()=>this.onButtonClick(0)} />
    },
    {
      key: uuidv4(),
      content: <img className="project-carousel" src={CNN} alt="2" width="40px" onClick={()=>this.onButtonClick(1)} />,
    },
    {
      key: uuidv4(),
      content: <img src={MongoDB} alt="3" className="project-carousel" width="40px" onClick={()=>this.onButtonClick(2)} />
    },
    {
      key: uuidv4(),
      content: <img className="project-carousel" src={MachineLearning} alt="4"  width="40px" onClick={()=>this.onButtonClick(3)}/>
    },
    {
      key: uuidv4(),
      content: <img src={DeepLearning} alt="5" className="project-carousel" width="40px" onClick={()=>this.onButtonClick(4)} />
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
        {(this.state.buttonStatus >=0) ? <Project title={this.state.titles[this.state.buttonStatus]} projectDescription={this.state.projectDescription[this.state.buttonStatus]} buttonSubmit={this.onButtonClose} image={this.state.imageUrls[this.state.buttonStatus]} projectLink="https://www.github.com/hprabesh" />: "" }
              <div className="projectBlock">
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
                    <Figures src={MongoDB} alt="MongoDB" description="MongoDB"  width="80%"/>,
                    <Figures src={MachineLearning} alt="Machine Learning" description="Machine Learning"  width="80%"/>,
                    <Figures src={DeepLearning} alt="Neural Network and Deep Learning" description="Neural Network and Deep Learning"  width="80%"/>,
                    <Figures src={CNN} alt="Convolutional NeuralNetwork" description="Convolutional Neural Network"  width="80%"/>,
                    <Figures src={HyperparameterTuning} alt="Tuning Hyperparameter" description="Improving Deep Neural Netwokrs; Hyperparameter Tuning, Regularization and Optimization" width="80%"/>
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