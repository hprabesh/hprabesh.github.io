import React, { Component } from 'react';
// import {Container,Row,Col} from 'react-bootstrap';
//images
import BackgroundImage from '../images/background-image.png';
//css
import '../css/home.css';

class Home extends Component {
    // state = {  }
    render() { 
        return (
            <>
                <div className="home">
                    <img className="image" src={BackgroundImage} alt="Background: Prabesh Humagain @ Winter - 2021: Arlington, TX" />
                    <div className="home-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    
                    </div>
                </div>
            </>
          );
    }
}
 
export default Home;