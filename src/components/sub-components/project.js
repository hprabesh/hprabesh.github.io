import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import  ModalFooter from 'react-bootstrap/ModalFooter';


//all CSS Import below
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/sub-components/project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:props.title,
            projectDescription: props.projectDescription,
            projectLink: props.projectLink,
            image: props.image,
          };
          this.onClosePopUps = this.onClosePopUps.bind(this);
    }
    onClosePopUps(e){
      this.props.buttonSubmit();
    }
    render() { 
        return ( 
          <Modal show={true}>
          <ModalHeader>
            <ModalTitle>Project: {this.state.title}</ModalTitle>
            
          </ModalHeader>
          <ModalBody>
            <figure>
              <img className="project-image" src={this.state.image} height="100%" width="100%" alt={this.state.title}/>
              <figcaption>Project Link: <em><a href={this.state.projectLink} title="GitHub Project" rel="noopener">{this.state.projectLink}</a></em></figcaption>
            </figure>
            <strong>Description</strong>:<br/>{this.state.projectDescription}<br/><br/><br/>
          </ModalBody>
          <ModalFooter>
            
              <Button onClick={this.onClosePopUps}>Cancel</Button>
              
          </ModalFooter>
        </Modal>
         );
      }
}
 
export default Project;