import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar({ user, setUser }) {
    
    function handleLogOut() {
        // Remove token using the user service
        userService.logOut();
        // Update user state in App
        setUser(null);
      }

      let title = "Welcome " + user.name +"!"

      
    return (
        <Navbar collapseOnSelect expand="lg" className="fs-5 sticky-top bg-primary">
            <Navbar.Brand className="fs-5 ms-2" href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/mywatch">MyWatch</Nav.Link> &nbsp;&nbsp;
            <Nav.Link href="/search">Search</Nav.Link>&nbsp;&nbsp;
            {/* <Nav.Link to="" onClick={handleLogOut}>Log Out</Nav.Link> */}
            <NavDropdown className="position-absolute end-0 me-3" title={title} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOut} href="">Logout</NavDropdown.Item>
              
            </NavDropdown>


            </Navbar.Collapse>
            
            
            {/* <Nav.Item className="me-3">Welcome, {user.name}</Nav.Item> */}
            
        </Navbar >
    )
}