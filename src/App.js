import React, { Component } from "react";
import Time from "react-time";
import { Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

//all import local files

import Connect from "./components/connect.js";
import About from "./components/about.js";
import Home from "./components/home.js";
import Portfolio from "./components/portfolio.js";
import Resume from "./images/resume-pdf/resume.pdf";
//all images from local dir
import Image from "./images/logo-01.svg";

//all CSS Import below
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

const NavStyles = (colorCode) => {
  return {
    fontWeight: "bold",
    backgroundColor: colorCode,
    borderRadius: "6px",
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarStatus: false,
    };
    this.changeBackground = this.changeBackground.bind(this);
  }
  changeBackground() {
    if (window.scrollY >= 10) {
      this.setState((state) => ({
        navbarStatus: true,
      }));
    } else {
      this.setState((state) => ({
        navbarStatus: false,
      }));
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeBackground);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar className="navbar-dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">
              <img
                src={Image}
                className="d-inline-block mr-1"
                alt="Text"
                height="70px"
                width="120px"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nab ml-auto mr-4">
                <Nav.Link
                  exact
                  as={NavLink}
                  to="/"
                  className="nav-item"
                  activeStyle={
                    this.state.navbarStatus
                      ? NavStyles("#5883b4")
                      : NavStyles("#8fa1b6")
                  }
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/portfolio"
                  className="nav-item"
                  activeStyle={
                    this.state.navbarStatus
                      ? NavStyles("#5883b4")
                      : NavStyles("#8fa1b6")
                  }
                >
                  Portfolio
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/about-me"
                  className="nav-item"
                  activeStyle={
                    this.state.navbarStatus
                      ? NavStyles("#5883b4")
                      : NavStyles("#8fa1b6")
                  }
                >
                  About
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  className="nav-item"
                  activeStyle={
                    this.state.navbarStatus
                      ? NavStyles("#5883b4")
                      : NavStyles("#8fa1b6")
                  }
                >
                  Contact
                </Nav.Link>

                <Nav.Link
                  href={Resume}
                  target="_blank"
                  rel="noopener"
                  className="nav-item"
                  activeStyle={
                    this.state.navbarStatus
                      ? NavStyles("#5883b4")
                      : NavStyles("#8fa1b6")
                  }
                >
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <div style={{ paddingTop: "120px" }}>
                <Home />
              </div>
            </Route>
            <Route path="/contact">
              <div style={{ paddingTop: "120px" }}>
                <Connect />
              </div>
            </Route>
            <Route path="/about-me">
              <div style={{ paddingTop: "120px" }}>
                <About />
              </div>
            </Route>
            <Route path="/portfolio">
              <div style={{ paddingTop: "120px" }}>
                <Portfolio />
              </div>
            </Route>
            <Route
              render={function () {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </Router>
        <Navbar
          className="navbar-dark navbar-bottom"
          expand="lg"
          sticky="bottom"
        >
          <Navbar.Brand>
            <p style={{ fontSize: "15px", marginBottom: "0" }}>
              <Time value={new Date()} format="YYYY" /> © Prabesh Humagain -{" "}
              <em>Built with ReactJS</em>{" "}
            </p>
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default App;
