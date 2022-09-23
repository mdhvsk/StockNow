import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'



function NavBar(){
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return (
      <div className = "customNav">
    <Navbar bg="blue" expand="lg" >
          <Container className = "customNav">
            <Navbar.Brand href="#home">Stocks Now</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard/stock/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>

                <button onClick = {handleLogout}> Logout</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
       
      );
}
   
export default NavBar

