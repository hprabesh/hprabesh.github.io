import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
// import createMixins from '@material-ui/core/styles/createMixins';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      numbers:[1,2,3,4,5,6],
    };
  }
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 100);
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
   
  render(){
    return (
      <div>
        <h1>Site under construction</h1>
      </div>
    )
  }
}
 
export default App;