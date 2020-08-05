import React from 'react';
import Toolbar from './toolbar';
import Stars from './particles';
// import Body from './body';
import Connect from './connect';
import Footer from './footer';
// import Updates from './updates';
function App() {
  return (
    <React.Fragment>
      <Toolbar/>
      <Stars/>
      {/* <Body/> */}
      {/* <Updates/> */}
      <Connect/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;


