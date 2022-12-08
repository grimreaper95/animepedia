import {useDispatch, useSelector} from "react-redux";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import {getAdminDetailsThunk} from "../../services/admin-thunk";

const AdminHeader = () => {

    const {currentAdmin} = useSelector(state => state.adminData)
    const [firstName, setFirstName] = useState()
    const dispatch = useDispatch();

    const handleLogout = () => {


    }

    useEffect(() => {
        dispatch(getAdminDetailsThunk)
        console.log("head" + currentAdmin)
        setFirstName(currentAdmin.username)

        console.log(firstName)

    }, [currentAdmin])


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
                    <Nav>
                        {firstName &&
                            <>
                                Welcome {firstName}

                            </>}

                        {
                            !firstName &&

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