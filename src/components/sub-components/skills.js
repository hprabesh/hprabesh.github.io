import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap';

//import css
import '../../css/sub-components/skills.css';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            tools: props.tools,
            skillLevel: props.skillLevel,
            type:props.programming?"":"Tools/Technologies:", 
          }
        this.display=this.display.bind(this);
        this.displaybar=this.displaybar.bind(this);
    }
    display(arr){
        var i;
        var text=arr[0];
        for (i=1;i<arr.length; i++){
            text = text+", "+ arr[i];
        }
        return text;
    }
    displaybar(){
        return(
            <div className="skillcontainer">
                <div className="skills" style={{width:String(this.state.skillLevel)+"%", backgroundColor:'#5883b4'}}/>
            </div>
        )
    }
    render() { 
        return ( 
            <React.Fragment>
                    <Row className="skillitem">
                        <Col xs={3} sm={3}/>
                        <Col  md={4} className="text-left">
                            <h3>{this.state.title}</h3>
                            <p className="subtitle-text"><span className="child-subtitle-text-title">{this.state.type}</span> <span className="child-subtitle-text">{this.display(this.state.tools)}</span></p>
                        </Col>
                        <Col  md ={3}>
                            {this.displaybar()}
                        </Col>
                        <Col xs={3} sm={3}/>
                    </Row>
            </React.Fragment>
         );
    }
}
 
export default Skills;
