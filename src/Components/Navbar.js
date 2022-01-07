import '../style/Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopNavbar = function () {
  return (
    <div className="bgc">
      <Navbar collapseOnSelect fixed="top" expand="sm" className="bgc">
        <Container>
          <a className="navbar-brand link-info glitter justify-content-center-sm" href="/">Danmainah</a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-info" href="#top"><span>HOME</span></Nav.Link>
              <Nav.Link className="text-info" href="#About">ABOUT</Nav.Link>
              <Nav.Link className="text-info" href="#Projects">PROJECTS</Nav.Link>
              <Nav.Link className="text-info" href="#Contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
