import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import IconLogin from "../assets/navbar-icon-after-login.png";
import IconProfile from "../assets/profile-user.png";
import DropdownProfile from "./dropdown";

function NavbarLogin() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img width="80px" src={IconLogin} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <DropdownProfile />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
