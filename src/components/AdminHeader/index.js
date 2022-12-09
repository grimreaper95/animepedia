import {useDispatch, useSelector} from "react-redux";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import {adminLogoutThunk, getAdminDetailsThunk} from "../../services/admin-thunk";
import {useNavigate} from "react-router";

const AdminHeader = () => {

    const {currentAdmin} = useSelector(state => state.adminData)
    const [firstName, setFirstName] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(adminLogoutThunk())
        navigate("/")
    }

    useEffect(() => {
        dispatch(getAdminDetailsThunk())
    }, [])


    return (
        <>
            <Navbar className="shadow-lg mb-5 bg-body rounded">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/">
                            <img
                                src={"../../../images/logo_test.png"}
                                className="d-inline-block align-top logo-image"
                                alt="AnimePedia"
                            />
                            <span className="logo-text">
                                 AnimePedia
                              </span>
                        </Navbar.Brand>
                    </Nav>
                    <Nav >
                        {currentAdmin &&
                            <>
                                Welcome {currentAdmin[0].username}
                                <Nav.Link onClick={handleLogout} className="nav-link" href="#">Logout</Nav.Link>

                            </>}

                        {
                            !currentAdmin &&

                            <>
                                Welcome
                            </>
                        }

                    </Nav>
                </Container>

            </Navbar>

        </>
    )


}

export default AdminHeader;