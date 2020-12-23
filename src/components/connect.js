import React, { Component } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

//all CSS Import below
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/connect.css';

//import images
import GitHub from '../images/github-01.svg';
import Instagram from '../images/instagram-01.svg';
import LinkedIn from '../images/linkedin-01.svg';

class Contact extends Component {
  // state = {  } //update this one if in need
  render() { 
    return ( 
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col lg={12} className="text-center">
                <h1>Drop me a message!</h1>
              </Col>
            </Row>
            <Form className="formContact" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
              <Form.Row>
                <Form.Group as={Col} md={6} lg={6} sm={12} >
                  <Form.Label>First: *</Form.Label>
                  <Form.Control required type="text" width="100px" placeholder="First Name" className="formInputSection"/>
                </Form.Group>
                <Form.Group as={Col} md={6} lg={6} sm={12} > 
                  <Form.Label>Last: *</Form.Label>
                  <Form.Control required type="text" placeholder="Last Name" className="formInputSection" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6} lg={6} sm={12} controlId="formGroupEmail">
                  <Form.Label>Email: *</Form.Label>
                  <Form.Control required type="email" width="100px" placeholder="Email" className="formInputSection"/>
                </Form.Group>
                <Form.Group as={Col} md={6} lg={6} sm={12} > 
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" className="formInputSection"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={12} lg={12}>
                  <Form.Label>Message: *</Form.Label>
                  <Form.Control required as="textarea" rows={3} placeholder="Type your messages" className="formInputSection"/>
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit" style={{backgroundColor:'#5883b4',outlineColor:'#5883b4'}}>
                Submit Message
              </Button>
            </Form> 
            <Row className="letsConnect align-items-center">
              <Col md={4}  className="center-block d-flex justify-content-center"><h1 className="letsConnectChild">Let's Connect</h1></Col>

              <Col md={4} >
                <Row >
                  <Col xs={4}   className="center-block d-flex justify-content-center">
                    <figure align="Center"><a href="http://github.com/hprabesh/" title="GitHub" target="_blank" rel="noreferrer"><img src={GitHub}  height="40px" alt="GitHub Icon" /></a><figcaption style={{color:'white', fontWeight:600}}>GitHub</figcaption></figure><br/>
                  </Col>
                  <Col xs={4}   className="center-block d-flex justify-content-center">
                  <figure align="Center"><a href="https://www.instagram.com/prab3ssss/" title="Instagram" target="_blank" rel="noreferrer"><img src={Instagram} height="40px" alt="Instagram Icon"/></a><figcaption style={{color:'white', fontWeight:600}}>Instagram</figcaption></figure>
                  </Col>
                  <Col xs={4}   className="center-block d-flex justify-content-center">
                  <figure align="Center"><a href="https://www.linkedin.com/in/hprabesh/" title="LinkedIn" target="_blank" rel="noreferrer"><img src={LinkedIn} height="40px" alt="LinkedIn Icon"/></a><figcaption style={{color:'white', fontWeight:600}}>LinkedIn</figcaption></figure>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={12} className="center-block d-flex justify-content-center">
                <h1 className="footer" style={{color:'#5883b4'}}>Learn more <a href="/about-me" title="About Me" style={{color:'#5883b4',fontWeight:'700'}}>about me</a>.</h1>
              </Col>
            </Row>
          </Container>
          
        </React.Fragment>
     );
  }
}
 
export default Contact;
