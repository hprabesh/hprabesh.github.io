import React, { Component } from 'react';
import {Jumbotron,Image,Container,Row,Col} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';

//all CSS Import below
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';

//all local import below
import Timeline from './sub-components/education_timeline.js';
// import Particles from './particles.js';


//all images import
import Avatar from '../images/avatar.png';
import Coding from '../images/coding.png';
import Chess from '../images/chess.png';
import TableTennis from '../images/tabletennisplaying.png';
import Music from '../images/music.png';



class About extends Component {
  // state = {  }
  render() { 
    return ( 
      <div className="aboutJumboTron">
        <Jumbotron className="jumboTron">
          <Container>
            <Row>
              <Col md={3}>
                <figure align="Center"> <Image src={Avatar} height="140px" alt="Prabesh Humagain" roundedCircle/><figcaption><strong>Hi there!<br/> I'm Prabesh Humagain</strong></figcaption></figure>
              </Col>
              <Col md={9}>
                <h1>Summary:</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          <Row >
            <Col md={12} className="center-block d-flex justify-content-center">
            <h2>Education</h2>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12}>
                {/* Imported Timeline portion from sub-components directory */}
              <Timeline/>
            </Col>
          </Row>
        </Container>
        <Jumbotron className="hobbies">
          <Container fluid>
            <Row>
              <Col md={12} className="center-block d-flex justify-content-center skewness">
                <h2>Hobbies</h2>
              </Col>
            </Row>
            <Row>
              <Col/>
              <Col md={2}  className="center-block d-flex justify-content-center auto skewness">
                <figure align="Center"><Image src={Coding} alt="Coding/Programming" height="80px" /><FigureCaption style={{color:'white', fontWeight:600}}>Coding</FigureCaption></figure>
              </Col>
              <Col md={2} className="center-block d-flex justify-content-center skewness">
                <figure align="Center"><Image src={TableTennis} alt = "PingPong/ Table Tennis" height="80px" /><FigureCaption style={{color:'white', fontWeight:600}}>Table Tennis</FigureCaption></figure>
              </Col>
              <Col md={2} className="center-block d-flex justify-content-center skewness">
                <figure align="Center"><Image src={Chess} alt="Chess" height="80px" /><FigureCaption style={{color:'white', fontWeight:600}}>Chess</FigureCaption></figure>
              </Col>
              <Col md={2} className="center-block d-flex justify-content-center skewness">
                <figure align="Center"><Image src={Music} alt="Chess" height="80px" /><FigureCaption style={{color:'white', fontWeight:600}}>Listening Music<br/>(all kinds of genres)</FigureCaption></figure>
              </Col>
              <Col/>
            </Row>
          </Container>
        </Jumbotron>
      </div>
     );
  }
}
 
export default About ;