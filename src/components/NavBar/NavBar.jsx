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

  let title = "Welcome " + user.name + "!"

let navimg = "/home/dunndeal/code/project-three-mywatchlist/popcorn-icon.png"

  return (
    <div className="">

    <Navbar collapseOnSelect expand="md" id="navbar" className="p-2 fs-5 bg-light">
      <Navbar.Brand className="fs-5 ms-2  align-top" href="/">
        
        <img
              src={require('/home/dunndeal/code/project-three-mywatchlist/src/components/NavBar/popcorn-icon.png')}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Popcorn Icon"
            />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="me-auto" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link> &nbsp;&nbsp;

          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#mywatch">MyWatch</Nav.Link> &nbsp;&nbsp;

          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#search">Search</Nav.Link>&nbsp;&nbsp;

          </Nav.Item>
        <NavDropdown className="position-absolute end-0 me-3" title={title} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={handleLogOut} href="">Logout</NavDropdown.Item>
        </NavDropdown>


        </Nav>
        {/* <Nav.Link to="" onClick={handleLogOut}>Log Out</Nav.Link> */}



      </Navbar.Collapse>


      {/* <Nav.Item className="me-3">Welcome, {user.name}</Nav.Item> */}

    </Navbar >
    </div>
  )
}