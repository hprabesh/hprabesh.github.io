import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

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
    const {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Message,
    } = this.state;
    return ( 
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col lg={12} className="text-center">
                <h1>Drop me a message!</h1>
              </Col>
            </Row>
            <form className="formContact" name="contact" method="POST" onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contact"/>
              <Row>
                <Col sm={12} md={6} >
                  <label className="padding">First: *</label><br/>
                  <input name="FirstName" type="text" placeholder="First Name" className="formInputSection" value={FirstName} onChange={this.handleChange} required/>
                </Col>
                <Col sm={12} md={6}>
                  <label className="padding">Last: *</label><br/>
                  <input name="LastName" type="text" placeholder="Last Name" className="formInputSection" value={LastName} onChange={this.handleChange} required/>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} >
                  <label className="padding">Email: *</label><br/>
                  <input name="Email" type="email" placeholder="Email" className="formInputSection" value={Email} onChange={this.handleChange} required/>
                </Col>
                <Col sm={12} md={6}>
                  <label className="padding">Phone Number: </label><br/>
                  <input name="PhoneNumber" type="text" placeholder="Phone Number" value={PhoneNumber} onChange={this.handleChange} className="formInputSection"/>
                </Col>
              </Row>
              <Row>
                <Col sm={12} >
                  <label className="padding">Message: *</label><br/>
                  <textarea name="Message" rows={4} placeholder="Messages" value={Message} onChange={this.handleChange} className="formInputSection" required/>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="padding" style={{backgroundColor:'#5883b4',outlineColor:'#5883b4'}}>
                Submit Message
              </Button>
            </form> 
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
