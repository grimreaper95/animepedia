import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo_test from "../../images/logo_test.png"
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {profileThunk, logoutThunk} from "../../services/user-thunk";
import {useEffect} from "react";

const HeaderBar = () => {
    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const handleLogout = () => {
        console.log('logging out');
        dispatch(logoutThunk())
    }
    useEffect(()=>{
        dispatch(profileThunk())
    }, [])
    return (
        <>
        <Navbar className="shadow-lg mb-5 bg-body rounded">
            <Container>
            <Nav className="me-auto">
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
            </Nav>
            <Nav>
                {
                    currentUser &&
                    <>
                        <Nav.Link>Welcome {currentUser.username}</Nav.Link>
                        <Nav.Link onClick={handleLogout} className="nav-link" href="#">Logout</Nav.Link>
                        <Link to="/profile" className="nav-link" href="#">Profile</Link>
                    </>
                }
                {
                    !currentUser &&
                    <>
                        <Link to="/login" className="nav-link" href="#">Login</Link>
                        <Link to="/register" className="nav-link" href="#">Register</Link>
                    </>
                }

            </Nav>
            </Container>
          </Navbar>
        </>
    );
}
export default HeaderBar;