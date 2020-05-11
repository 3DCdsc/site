import React from 'react'
import logo from '../../assets/images/GTClogo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {withRouter} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StickyNavBar.css'
import Button from 'react-bootstrap/Button';
class StickyNavBar extends React.Component{

    render(){
        return(
            <Navbar  variant="dark" expand="lg">
                <Navbar.Brand href="/"><img src={logo} height="70px" width="70px" alt="GTCLOGO"/>G T C</Navbar.Brand>
                <Button variant="outline-light" onClick={()=>{this.props.history.push("/register")}}>Register</Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar-content" id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/themes">Themes</Nav.Link>
                  <NavDropdown title="Additional Info" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
                    <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Contact Us!</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        )  
    }
}

export default withRouter(StickyNavBar);