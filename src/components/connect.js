import React, { Component } from 'react';
import {Container,Row,Col, Jumbotron} from 'react-bootstrap';

//all CSS Import below
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/connect.css';

//import images
import GitHub from '../images/github-01.svg';
import Instagram from '../images/instagram-01.svg';
import LinkedIn from '../images/linkedin-01.svg';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      FirstName:"",
      LastName:"",
      Email:"",
      PhoneNumber:"",
      Message:"",
    }
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return ( 
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col lg={12} className="text-center">
                <h1>Drop me a message!</h1>
              </Col>
            </Row>
            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact"/>
              <Row>
                <Col sm={12} md={6} >
                  <label className="padding">First: *</label><br/>
                  <input type="text" placeholder="First Name" name="FirstName" className="formInputSection" required/>
                </Col>
                <Col sm={12} md={6}>
                  <label className="padding">Last: *</label><br/>
                  <input  type="text" placeholder="Last Name" name="LastName" className="formInputSection" required/>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} >
                  <label className="padding">Email: *</label><br/>
                  <input type="email" placeholder="Email" name="Email" className="formInputSection" required/>
                </Col>
                <Col sm={12} md={6}>
                  <label className="padding">Phone Number: </label><br/>
                  <input type="text" placeholder="Phone Number" name="PhoneNumber" className="formInputSection"/>
                </Col>
              </Row>
              <Row>
                <Col sm={12} >
                  <label className="padding">Message: *</label><br/>
                  <textarea rows={4} placeholder="Messages" name="Message" className="formInputSection" required/>
                </Col>
              </Row>
              <button id="submit" type="submit" className="padding submit" style={{backgroundColor:'#5883b4',outlineColor:'#5883b4'}}>
                Submit Message
              </button>
            </form> 
 
            </Container>
            <Jumbotron className="hobbies">
              <Container fluid>      
                <Row className="letsConnect align-items-center">
                  <Col md={4}  className="center-block d-flex justify-content-center"><h1 className="letsConnectChild">Let's Connect</h1></Col>

                  <Col md={4} >
                    <Row >
                      <Col xs={4}  className="center-block d-flex justify-content-center">
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
                </Container>
            </Jumbotron>
        </React.Fragment>
     );
  }
}
 
export default Contact;
