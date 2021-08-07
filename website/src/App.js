import React from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import './App.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import About from "./about";

function App(props) {
  return (
    <div className="App container">
        <Navbar expand="md">
            <Navbar.Header>
                <Navbar.Brand><Link to={"/"}> Rob Spencer</Link></Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to={"/"}>
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to={"#about"}>
                        <NavItem>About</NavItem>
                    </LinkContainer>
                    <LinkContainer to={"#software"}>
                        <NavItem>Software</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      {/*<HashRouter hashType={"noslash"}>*/}
      {/*    <div>*/}
      {/*        <Route exact path="/" component={Home} />*/}
      {/*        <Route path="#about" component={About} />*/}
      {/*        <Route path="#software" component={Software} />*/}
      {/*    </div>*/}
      {/*</HashRouter>*/}
    </div>
  );
}

// const Home = () => <div><h2>Home</h2></div>;
//     const Software = () => <div><h2>Software</h2></div>;

export default App;
