import React, { Component } from 'react';

import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import {Carousel} from '3d-react-carousal';
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

class Portfolio extends Component {
  // state = {  }
  constructor(props){
    super(props);
    this.state={ 
      buttonStatus:-1,
      titles:[
        "0","1","2","3","4"
      ],
      projectDescription:[
        "Project Description 0",
        "Project Description 1",
        "Project Description 2",
        "Project Description 3",
        "Project Description 4"
      ],
      imageUrls:[
        Test,
        Test,
        Test,
        Test,
      ],
      certificateLinks:[MongoDB,MachineLearning,DeepLearning,CNN,HyperparameterTuning],
      images:[],
    
    }
    
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onButtonClose = this.onButtonClose.bind(this);
    // this.handleDragStart= this.handleDragStart.bind(this);
   }


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

  UNSAFE_componentWillMount(){
    var temp=[];
    for (let i =0; i<this.state.imageUrls.length; i++){
      temp=temp.concat(<img src={this.state.imageUrls[i]} alt={i} onClick={()=>this.onButtonClick(i)} />)
    }
    this.setState({
      images:temp,
    });
    
  }

  render() { 
    return ( 
      <React.Fragment>
        {(this.state.buttonStatus >=0) ? <Project title={this.state.titles[this.state.buttonStatus]} projectDescription={this.state.projectDescription[this.state.buttonStatus]} buttonSubmit={this.onButtonClose} image={this.state.imageUrls[this.state.buttonStatus]} projectLink="https://www.github.com/hprabesh" />: "" }
        
            <Jumbotron className="aboutJumboTron">
                <center><h2>Projects</h2></center>
              <Carousel  slides={this.state.images} autoplay= {false} />

            </Jumbotron>
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
 
export default Portfolio;