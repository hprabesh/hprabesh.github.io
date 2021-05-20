import React, { Component } from 'react';
import {Figure} from 'react-bootstrap';



class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src:this.props.src,
            description:this.props.description,
            alt:this.props.alt,
            buttonStatus:false,
        }
    }
    handleDragStart=(e)=>{
        e.preventDefault();
      }
    

    render() { 
        return ( 
            <React.Fragment>
                <Figure>
                    <Figure.Image
                        width={'100%'}
                        alt={this.state.alt}
                        src={this.state.src}
                        style={{borderRadius:"15px"}}
                        draggable="false"
                        onDragStart={this.handleDragStart}
                        
                    />
                    <Figure.Caption>
                        <center><em>{this.state.description}</em></center>
                    </Figure.Caption>
                </Figure>
            </React.Fragment>
         );
    }
}
 

export default Certificates;