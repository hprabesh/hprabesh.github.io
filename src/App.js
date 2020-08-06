import React from 'react';
import Toolbar from './toolbar';
import Stars from './particles';
// import Body from './body';
import Connect from './connect';
import Footer from './footer';
import {Helmet} from "react-helmet";
// import Updates from './updates';
function App() {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Prabesh Humagain - Home</title>
      </Helmet>

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


