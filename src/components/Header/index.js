import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo_test from "../../images/logo_test.png"
import './index.css'

const HeaderBar = () => {
    return (
        <>
        <Container>
        <Navbar>
              <Navbar.Brand href="/">
                  <img
                      src={logo_test}
                      className="d-inline-block align-top logo-image"
                      alt="AnimePedia"
                  />
                  <span className="logo-text">
                      AnimePedia
                  </span>
              </Navbar.Brand>
          </Navbar>
        </Container>
        </>
    );
}
export default HeaderBar;