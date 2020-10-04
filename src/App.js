import React from 'react';
import Toolbar from './toolbar';

import Connect from './connect';
import Footer from './footer';
import {Helmet} from "react-helmet";
function App() {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Prabesh Humagain - Home</title>
      </Helmet>

      <Toolbar/>

      <Connect/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;


